import styled from 'styled-components';

const ListItemStyles = styled.li`
  text-decoration: none;
  transition:padding-left ease 0.3s;
  display: -webkit-box -moz-box -ms-flexbox -moz-flex -webkit-flex;      /* OLD - iOS 6-, Safari 3.1-6 */
  display: flex;
  align-items: center;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  outline:none;
  h2 {
    border-bottom:4px solid transparent;
    margin: 0;
    padding-bottom:2px;
    font-size: ${props => props.size}px;
    line-height: ${props => props.size}px;
    font-weight: 900;
    font-family: Arial, Helvetica, sans-serif;
    color: transparent;

    /* text-shadow:
   -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
} */

    -webkit-text-stroke: ${props => props.theme.textStroke};
  }
  svg {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    path {
      fill: transparent;
      stroke-width: 7;
      stroke: ${props => props.theme.black};
    }
  }
  &.list-item-active {
    /* padding-left: 5px; */
    /* border-left: 5px so  lid ${props => props.theme.black}; */

    h2 {
      /* text-shadow:none; */
      -webkit-text-stroke: 0px;
      color: ${props => props.theme.black};
      border-bottom:4px solid ${props => props.theme.black};
      /* text-decoration-line: underline;
      text-decoration-color: ${props => props.theme.black}; */
    }
    svg > path {
      stroke-width: 0;
      fill: ${props => props.theme.black};
    }
  }
  &.list-item-not-visible {
    height:0px;
    width:0px;
    opacity:0;
    padding:0;
    h2 {
      border:0;
      padding:0;
      height:0px;
      width:0px;
      opacity:0;
    }
    svg > path {
      height:0px;
      width:0px;
      opacity:0;
      stroke-width: 0;
      stroke: none;
    }
  }

  &.list-item-selected {
    h2 {
      padding-left: 0px;
      /* text-shadow:none; */
      -webkit-text-stroke: 0px;
      color: ${props => props.theme.black};
      border-bottom:4px solid ${props => props.theme.black};
      /* text-decoration-line: underline;
      text-decoration-color: ${props => props.theme.black}; */
    }
    svg > path {
      stroke-width: 0;
      fill: ${props => props.theme.black};
    }
  }
  /* Medium Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    h2 {
      font-size: ${props => Math.floor(props.size * 0.9)}px;
      line-height: ${props => Math.floor(props.size * 0.9)}px;
    }
    svg {
      width: ${props => Math.floor(props.size * 0.9)}px;
      height: ${props => Math.floor(props.size * 0.9)}px;
    }
  }
  /* Small Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
    h2 {
      font-size: ${props => Math.floor(props.size * 0.75)}px;
      line-height: ${props => Math.floor(props.size * 0.75)}px;
    }
    svg {
      width: ${props => Math.floor(props.size * 0.75)}px;
      height: ${props => Math.floor(props.size * 0.75)}px;
    }
  }
`;

export default ListItemStyles;
