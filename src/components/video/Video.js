import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Provider } from '../context/ListContext';
import ListContainer from '../ListContainer';
import VideoPlayer from './VideoPlayer';
import violetPath from 'd247ubh8hfac6h.cloudfront.net/violet-vid.mp4';
import minjuPath from 'd247ubh8hfac6h.cloudfront.net/minju-vid.mp4';
import haneulPath from 'd247ubh8hfac6h.cloudfront.net/haneul-vid.mp4';
import samGPath from 'd247ubh8hfac6h.cloudfront.net/sam-gellaitry-vid.mp4';
import magicPath from 'd247ubh8hfac6h.cloudfront.net/magic-vid.mp4';
import commeHatPath from 'd247ubh8hfac6h.cloudfront.net/hat-vid.mp4';
import commeLaunchPath from 'd247ubh8hfac6h.cloudfront.net/launch-vid.mp4';
import bahiaPath from 'd247ubh8hfac6h.cloudfront.net/bahia-dreamin-vid.mp4';
import nilsPath from 'd247ubh8hfac6h.cloudfront.net/nils-frahm-vid.mp4';
import goodbyePath from 'd247ubh8hfac6h.cloudfront.net/goodbye-vid.mp4';
import mumbaiPath from 'd247ubh8hfac6h.cloudfront.net/str8-outta-mumbai-vid.mp4';
import goodGuyPath from 'd247ubh8hfac6h.cloudfront.net/good-guy-vid.mp4';
// import violetPath from '../../images/violet-vid.mp4';
// import minjuPath from '../../images/minju-vid.mp4';
// import haneulPath from '../../images/haneul-vid.mp4';
// import samGPath from '../../images/sam-gellaitry-vid.mp4';
// import magicPath from '../../images/magic-vid.mp4';
// import commeHatPath from '../../images/hat-vid.mp4';
// import commeLaunchPath from '../../images/launch-vid.mp4';
// import bahiaPath from '../../images/bahia-dreamin-vid.mp4';
// import nilsPath from '../../images/nils-frahm-vid.mp4';
// import goodbyePath from '../../images/goodbye-vid.mp4';
// import mumbaiPath from '../../images/str8-outta-mumbai-vid.mp4';
// import goodGuyPath from '../../images/good-guy-vid.mp4';

const listItems = [
  {
    title: 'violet',
    video: violetPath,
    altTitle: 'Click or Press Space/Enter to play/pause'
  },
  {
    title: 'seoul-fashion-week-민주',
    video: minjuPath,
    altTitle: 'Click or Press Space/Enter to play/pause'
  },
  {
    title: 'seoul-fashion-week-하늘',
    video: haneulPath,
    altTitle: 'Click or Press Space/Enter to play/pause'
  },
  {
    title: 'sam-gellaitry',
    video: samGPath,
    altTitle: 'Click or Press Space/Enter to play/pause'
  },
  {
    title: 'magic',
    video: magicPath,
    altTitle: 'Click or Press Space/Enter to play/pause'
  },
  {
    title: 'comme-unité-hat',
    video: commeHatPath,
    altTitle: 'Click or Press Space/Enter to play/pause'
  },
  {
    title: 'comme-unité-launch',
    video: commeLaunchPath,
    altTitle: 'Click or Press Space/Enter to play/pause'
  },
  {
    title: 'bahia-dreamin',
    video: bahiaPath,
    altTitle: 'Click or Press Space/Enter to play/pause'
  },
  {
    title: 'nils-frahm',
    video: nilsPath,
    altTitle: 'Click or Press Space/Enter to play/pause'
  },
  {
    title: 'goodbye',
    video: goodbyePath,
    altTitle: 'Click or Press Space/Enter to play/pause'
  },
  {
    title: 'str8-outta-mumbai',
    video: mumbaiPath,
    altTitle: 'Click or Press Space/Enter to play/pause'
  },
  {
    title: 'good-guy',
    video: goodGuyPath,
    altTitle: 'Click or Press Space/Enter to play/pause'
  }
];
const VideoPageStyles = styled.div`
  height: 100%;
  width: 100%;
  display: -webkit-box -moz-box -ms-flexbox -webkit-flex; /* OLD - iOS 6-, Safari 3.1-6 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Video = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [vidRef] = useState(useRef(null));
  const togglePlaying = playing => {
    if (!vidRef) return null;
    if (!playing && vidRef) {
      setPlaying(true);
      vidRef.current.play();
    }
    if (playing && vidRef) {
      setPlaying(false);
      vidRef.current.pause();
    }
  };
  const states = {
    activeIndex,
    setActiveIndex,
    onClickValue: playing,
    onClickFunction: togglePlaying
  };
  const VideoContext = Provider;
  const activeItem = activeIndex !== null && listItems[activeIndex];
  const itemSize = 36;
  return (
    <VideoContext value={states}>
      <VideoPageStyles
        className="video-page-container"
        tabIndex={0}
        onKeyPress={e => {
          // Allow spacebar for controlling play/pause
          if (e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            togglePlaying(playing);
          }
        }}
      >
        {/* <ListTitle title="video" size={itemSize}>video</ListTitle> */}
        {activeItem && activeItem.video && (
          <VideoPlayer
            name="video-player"
            key={activeItem.video}
            setPlaying={setPlaying}
            vidRef={vidRef}
            src={`${activeItem.video}`}
          ></VideoPlayer>
        )}
        {!activeItem && !activeItem.video && (
          <div
            style={{
              display: '-webkit-box -webkit-flex flex',
              width: '100%',
              height: '240px',
              fontFamily: 'Arial, Helvetica, sans-serif',
              justifySelf: 'center',
              flexDirection: 'column',
              justifyItems: 'center'
            }}
          >
            <p>Selected works</p>
            <p>Click/Tap/Press enter on a title to play video.</p>
            <p>Press Space to play/pause</p>
            <p>Hover/Select title to show video thumbnail.</p>
          </div>
        )}
        <ListContainer
          title={'work'}
          list={listItems}
          itemSize={itemSize}
          itemSpacing={10}
        />
      </VideoPageStyles>
    </VideoContext>
  );
};

export default Video;
