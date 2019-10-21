import React, { useRef, useContext, useState } from 'react';
import styled from 'styled-components';
import ListContext from './context/ListContext';
import ListItemStyles from './styles/ListItemStyles';
import { lock } from './Icons';

const Container = styled.div`
  display: flex;
  width: 50%;
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    width: 66%;
  }
  flex-direction: row;
  justify-content: space-between;
`;

const ListItemTag = ({ index, title = '', size = 24 }) => {
  const listItemRef = useRef(null);
  const {
    activeIndexTag,
    setActiveIndexTag,
    activeTags,
    handleTagClick
  } = useContext(ListContext);
  const [unlocked, setUnlocked] = useState(true);
  const selected = activeTags[title];
  const handleSelect = e => {
    e.preventDefault();
    e.stopPropagation();

    if (!unlocked) {
      if (selected) {
        setUnlocked(true);
      }
      handleTagClick(index);
    } else if (unlocked) {
      if (!selected) {
        handleTagClick(index);
      }
      setUnlocked(false);
    }
  };
  return (
    <ListItemStyles
      title={title}
      className={`list-item ${selected ? 'list-item-selected' : ''} ${
        activeIndexTag === index ? 'list-item-active' : ''
      }`}
      tabIndex="0"
      ref={listItemRef}
      onFocus={() => {
        return setActiveIndexTag ? setActiveIndexTag(index) : null;
        // if (unlocked && !selected) {
        //   handleTagClick(index);
        // }
      }}
      onBlur={() => {
        setActiveIndexTag(null);
        // if (unlocked && selected) {
        //   handleTagClick(index);
        // }
      }}
      onMouseOver={() => {
        setActiveIndexTag(index);
        // if (unlocked && !selected) {
        //   handleTagClick(index);
        // }
        listItemRef.current.focus(); // set focus to the element when it is hovered
      }}
      onClick={e => {
        handleSelect(e);
      }}
      onKeyPress={e => {
        // Treat Enter press as a click
        if (e.keyCode === 13 || e.key === 'Enter') {
          handleSelect(e);
        }
      }}
      size={size}
    >
      <Container>
        <h2>{title}</h2>
        {!unlocked && lock}
      </Container>
    </ListItemStyles>
  );
};

export default ListItemTag;
