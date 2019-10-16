import React from 'react'
import styled from 'styled-components'
import { github } from '../Icons'
import { instagram } from '../Icons'
import { linkedin } from '../Icons'
import { email } from '../Icons'
const ContactBarStyles = styled.div`
  position:absolute;
  bottom:0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  a {
    cursor: pointer;
    margin-right: 20px;
  }
  * > svg {
    &:hover {
      transform: scale(1.05);
    }
    width: 64px;
    height: 64px;
    @media only screen and (max-width:${props => props.theme.maxWidthMedium}){
      width:48px;
      height:48px;
    }
    @media only screen and (max-width:${props => props.theme.maxWidthSmall}){
      width:32px;
      height:32px;
    }
    >path {
      fill: ${props => props.theme.black};
      stroke-width: 7;
      /* stroke: ${props => props.theme.black}; */
    }
  }
`

const ContactBar = () => {
  return (
    <ContactBarStyles>
      <a target="_blank" href="https://linkedin.com/in/eric-auvaart/">{linkedin}</a>
      <a target="_blank" href="https://github.com/ericauv">{github}</a>
      <a target="_blank" href='mailto:e.auvaart@gmail.com'>{email}</a>
      <a target="_blank" href="https://www.instagram.com/ericauv/">{instagram}</a>
    </ContactBarStyles>
  )
}

export default ContactBar
