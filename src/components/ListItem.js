import React, { useRef, useContext, useEffect, useState } from 'react';
import ListContext from './context/ListContext';
import ListItemStyles from './styles/ListItemStyles';
const ListItem = ({ index, title = '', altTitle='', icon, tags = [], size = 24 }) => {
  const listItemRef = useRef(null);
  const {
    activeIndex,
    setActiveIndex,
    activeTagChange,
    activeTags,
    onClickValue,
    onClickFunction
  } = useContext(ListContext);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const activeTagKeys = activeTags && Object.keys(activeTags);
    if (activeTagKeys) {
      setVisible(activeTagKeys.every(activeTag => tags.includes(activeTag)));
    } else {
      setVisible(true);
    }
  }, [activeTags, tags, setVisible, activeTagChange]);
  return (
    visible && (
      <ListItemStyles
        aria-label={altTitle || title}
        title={altTitle || title}
        className={`list-item ${visible ? '' : 'list-item-not-visible'} ${
          activeIndex === index ? 'list-item-active' : ''
        }`}
        tabIndex="0"
        ref={listItemRef}
        onFocus={() => {
          return setActiveIndex ? setActiveIndex(index) : null;
        }}
        // onBlur={() => setActiveIndex(null)} // commented out because need to keep as active when video is clicked
        onMouseOver={() => {
          setActiveIndex(index);
          listItemRef.current.focus(); // set focus to the element when it is hovered
        }}
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();
          return onClickFunction ? onClickFunction(onClickValue) : null;
        }}
        onKeyPress={e => {
          // Treat Enter press as a click
          if (e.keyCode === 13 || e.key === 'Enter') {
            e.stopPropagation();
            e.preventDefault();
            return onClickFunction ? onClickFunction(onClickValue) : null;
          }
        }}
        size={size}
      >
        <h2>{title}</h2>
        {icon}
      </ListItemStyles>
    )
  );
};

export default ListItem;
