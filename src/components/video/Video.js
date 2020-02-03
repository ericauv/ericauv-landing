import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Provider } from '../context/ListContext';
import ListContainer from '../ListContainer';
import VideoPlayer from './VideoPlayer';
const cloudFrontDomain = 'https://d247ubh8hfac6h.cloudfront.net/';
const violetPath = `${cloudFrontDomain}violet-vid.mp4`;
const minjuPath = `${cloudFrontDomain}minju-vid.mp4`;
const haneulPath = `${cloudFrontDomain}haneul-vid.mp4`;
const samGPath = `${cloudFrontDomain}sam-gellaitry-vid.mp4`;
const magicPath = `${cloudFrontDomain}magic-vid.mp4`;
const commeHatPath = `${cloudFrontDomain}hat-vid.mp4`;
const commeLaunchPath = `${cloudFrontDomain}launch-vid.mp4`;
const bahiaPath = `${cloudFrontDomain}bahia-dreamin-vid.mp4`;
const nilsPath = `${cloudFrontDomain}nils-frahm-vid.mp4`;
const goodbyePath = `${cloudFrontDomain}goodbye-vid.mp4`;
const mumbaiPath = `${cloudFrontDomain}str8-outta-mumbai-vid.mp4`;
const goodGuyPath = `${cloudFrontDomain}good-guy-vid.mp4`;

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

  useEffect(() => {
    setPlaying(false);
  }, [activeIndex]);

  const togglePlaying = playing => {
    if (!vidRef) return null;
    if (!playing && vidRef && vidRef.current) {
      setPlaying(true);
      vidRef.current.play();
    }
    if (playing && vidRef && vidRef.current) {
      setPlaying(false);
      vidRef.current.pause();
    }
  };
  const states = {
    activeIndex,
    setActiveIndex,
    onClickValue: playing,
    onClickFunction: togglePlaying,
    noChangeActiveOnHover: playing ? true : false
  };
  const VideoContext = Provider;
  const activeItem = activeIndex !== null ? listItems[activeIndex] : listItems[0];
  if(activeIndex === null) setActiveIndex(0);
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
            {/* <p>Selected works</p>
            <p>Click/Tap/Press enter on a title to play video.</p>
            <p>Press Space to play/pause</p>
            <p>Hover/Select title to show video thumbnail.</p> */}
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
