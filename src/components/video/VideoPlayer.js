import React from 'react';
import styled from 'styled-components';

const VideoStyles = styled.video`
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 240px;
`;
const VideoPlayer = ({ src, setPlaying, vidRef }) => {
  const onPause = () => {
    setPlaying(false);
  };
  const onPlaying = () => {
    setPlaying(true);
  };
  return (
    <div className="video-player" style={{ height: '240px' }}>
      <VideoStyles
        onPause={onPause}
        onPlaying={onPlaying}
        ref={vidRef}
        loop
        onKeyPress={e => {
          if (e.key === ' ' || e.key === 'Spacebar') {
            e.stopPropagation(); // Don't send spacebar press event to parent so that parent doesn't repeat this action
            return null;
          }
        }}
        onMouseOver={e => {
          if (vidRef.current.hasAttribute('controls')) {
            return null;
          } else {
            vidRef.current.setAttribute('controls', true);
            vidRef.current.setAttribute('controlsList', 'nodownload');
          }
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoStyles>
    </div>
  );
};

export default VideoPlayer;
