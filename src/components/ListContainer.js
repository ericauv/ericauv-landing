import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ListTitle from './ListTitle'
import List from './List'
const ListContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.itemSize / 2}px;
  flex-grow: ${props => props.flexGrow};
  flex-shrink: ${props => (props.flexGrow ? 1 / props.flexGrow : 1)};
  flex-basis: auto;
  width: 100%;
`

const ListContainer = ({
  title = '',
  list = [],
  itemSize = 24,
  itemSpacing = 5,
  type = '',
  flexGrow = 1,
}) => {
  return (
    <ListContainerStyles
      itemSize={itemSize}
      flexGrow={flexGrow}
      className="list-container"
    >
      {title && <ListTitle size={itemSize}>{title}</ListTitle>}
      {list && (
        <List
          type={type}
          list={list}
          itemSize={itemSize}
          itemSpacing={itemSpacing}
          flexGrow={flexGrow}
        />
      )}
    </ListContainerStyles>
  )
}

ListContainer.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  itemSize: PropTypes.number.isRequired,
  itemSpacing: PropTypes.number.isRequired,
  flexGrow: PropTypes.number,
}
export default ListContainer
