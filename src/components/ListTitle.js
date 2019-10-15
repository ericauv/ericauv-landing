import React from 'react';
import styled from 'styled-components';
const ListTitleStyles = styled.h2`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  z-index: 2;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-bottom: 5px;
  font-size: ${props => props.size}px;
  line-height: ${props => props.size}px;
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
  color: ${props => props.theme.black};
  text-decoration-line: underline;
  text-decoration-color: ${props => props.theme.black};
  /* Medium Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    font-size: ${props => Math.floor(props.size * 0.9)}px;
    line-height: ${props => Math.floor(props.size * 0.9)}px;
  }
  /* Small Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
    font-size: ${props => Math.floor(props.size * 0.75)}px;
    line-height: ${props => Math.floor(props.size * 0.75)}px;
  }
`;

const ListTitle = ({ children, size }) => (
  <ListTitleStyles className="list-title" size={size}>
    {children}
  </ListTitleStyles>
);

export default ListTitle;
