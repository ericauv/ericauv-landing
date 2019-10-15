import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import ListItemTag from './ListItemTag'

const ListStyles = styled.ul`
  ::-webkit-scrollbar {
    width: 0px;
  }
  display: flex;
  flex-direction: column;
  flex-grow: ${props => props.flexGrow};
  flex-shrink: ${props => (props.flexGrow ? 1 / props.flexGrow : 1)};
  flex: 1 1 ${props => props.itemSpacing * 4 + props.itemSize * 4}px;
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    flex-basis: ${props =>
      Math.ceil(0.9 * (props.itemSpacing * 4 + props.itemSize * 4))}px;
  }
  @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
    flex-basis: ${props =>
      Math.ceil(0.75 * (props.itemSpacing * 4 + props.itemSize * 4))}px;
  }
  padding: 0;
  margin: 0;
  padding-left: 10px;
  overflow-y: scroll;
  li {
    padding: 0;
    padding-top: ${props => Math.floor(props.itemSpacing / 2)}px;
    padding-bottom: ${props => Math.ceil(props.itemSpacing / 2)}px;
    /* Medium Screen */
    @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
      padding-top: ${props => Math.floor((0.9 * props.itemSpacing) / 2)}px;
      padding-bottom: ${props => Math.ceil((0.9 * props.itemSpacing) / 2)}px;
    }
    /* Small Screen */
    @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
      padding-top: ${props => Math.floor((0.75 * props.itemSpacing) / 2)}px;
      padding-bottom: ${props => Math.ceil((0.75 * props.itemSpacing) / 2)}px;
    }
  }
`

const List = ({ list, itemSize, itemSpacing, type, flexGrow }) => {
  return (
    <ListStyles
      itemSize={itemSize + 6}
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
            title={listItem.title}
            icon={listItem.icon}
            tags={listItem.tags}
            size={itemSize}
          />
        ))}
    </ListStyles>
  )
}

List.propTypes = {
  list: PropTypes.array,
  itemSize: PropTypes.number,
  itemSpacing: PropTypes.number,
  flexGrow: PropTypes.number,
}
export default List
