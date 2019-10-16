import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Provider } from '../context/ListContext';
import ListContainer from '../ListContainer';
import VideoPlayer from './VideoPlayer';

const videoPath = '../../static/video/';

const listItems = [
  { title: 'violet', video: 'violet/violet-vid.mp4' },
  {
    title: 'seoul-fashion-week-민주',
    video: 'seoul-fashion-week/minju-vid.mp4'
  },
  {
    title: 'seoul-fashion-week-하늘',
    video: 'seoul-fashion-week/haneul-vid.mp4'
  },
  { title: 'sam-gellaitry', video: 'sam-gellaitry/sam-gellaitry-vid.mp4' },
  { title: 'magic', video: 'magic/magic-vid.mp4' },
  { title: 'comme-unité-hat', video: 'comme-unite/hat-vid.mp4' },
  { title: 'comme-unité-launch', video: 'comme-unite/launch-vid.mp4' },
  { title: 'bahia-dreamin', video: 'bahia-dreamin/bahia-dreamin-vid.mp4' },
  { title: 'nils-frahm', video: 'nils-frahm/nils-frahm-vid.mp4' },
  { title: 'goodbye', video: 'goodbye/goodbye-vid.mp4' },
  {
    title: 'str8-outta-mumbai',
    video: 'str8-outta-mumbai/str8-outta-mumbai-vid.mp4'
  },
  { title: 'good-guy', video: 'good-guy/good-guy-vid.mp4' }
];

const VideoPageStyles = styled.div`
  height: 100%;
  width: 100%;
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
            src={`${videoPath}${activeItem.video}`}
          ></VideoPlayer>
        )}
        {!activeItem && !activeItem.video && (
          <div
            style={{
              display: 'flex',
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
          itemSpacing={5}
        />
      </VideoPageStyles>
    </VideoContext>
  );
};

export default Video;
