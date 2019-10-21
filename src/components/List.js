import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import ListItemTag from './ListItemTag';

const ListStyles = styled.ul`
  ::-webkit-scrollbar {
    width: 0px;
  }
  margin: 0;
  padding: 0;
  padding-left: 10px;
  overflow-y: scroll;
  display: -webkit-box -moz-box -ms-flexbox -webkit-flex; /* OLD - iOS 6-, Safari 3.1-6 */
  flex-direction: column;
  -webkit-flex-grow: ${props => props.flexGrow};
  flex-grow: ${props => props.flexGrow};
  -webkit-flex-shrink: ${props => (props.flexGrow ? 1 / props.flexGrow : 1)};
  flex-shrink: ${props => (props.flexGrow ? 1 / props.flexGrow : 1)};
  -webkit-flex-basis: ${props => props.itemSpacing * 4 + props.itemSize * 4}px;
  flex-basis: ${props => props.itemSpacing * 4 + props.itemSize * 4}px;
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    -webkit-flex-basis: ${props =>
      Math.ceil(0.9 * (props.itemSpacing * 4 + props.itemSize * 4))}px;
    flex-basis: ${props =>
      Math.ceil(0.9 * (props.itemSpacing * 4 + props.itemSize * 4))}px;
  }
  @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
    -webkit-flex-basis: ${props =>
      Math.ceil(0.75 * (props.itemSpacing * 4 + props.itemSize * 4))}px;
    flex-basis: ${props =>
      Math.ceil(0.75 * (props.itemSpacing * 4 + props.itemSize * 4))}px;
  }

  li {
    padding: 0;
    margin-top: ${props => Math.floor(props.itemSpacing / 2)}px;
    margin-bottom: ${props => Math.ceil(props.itemSpacing / 2)}px;
    /* Medium Screen */
    @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
      margin-top: ${props => Math.floor((0.9 * props.itemSpacing) / 2)}px;
      margin-bottom: ${props => Math.ceil((0.9 * props.itemSpacing) / 2)}px;
    }
    /* Small Screen */
    @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
      margin-top: ${props => Math.floor((0.75 * props.itemSpacing) / 2)}px;
      margin-bottom: ${props => Math.ceil((0.75 * props.itemSpacing) / 2)}px;
    }
  }
`;

const List = ({ list, itemSize, itemSpacing, type, flexGrow }) => {
  return (
    <ListStyles
      itemSize={itemSize}
      flexGrow={flexGrow}
      itemSpacing={itemSpacing}
      className="list"
    >
      {type === 'tag' &&
        list.map((listItem, index) => (
          <ListItemTag
            index={index}
            key={listItem.title}
            title={listItem.title}
            icon={listItem.icon}
            tags={listItem.tags}
            size={itemSize}
          />
        ))}
      {!type &&
        list.map((listItem, index) => (
          <ListItem
            index={index}
            key={listItem.title}
            altTitle={listItem.altTitle}
            title={listItem.title}
            icon={listItem.icon}
            tags={listItem.tags}
            size={itemSize}
          />
        ))}
    </ListStyles>
  );
};

List.propTypes = {
  list: PropTypes.array,
  itemSize: PropTypes.number,
  itemSpacing: PropTypes.number,
  flexGrow: PropTypes.number
};
export default List;
