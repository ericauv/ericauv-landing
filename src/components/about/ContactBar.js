import React from "react"
import styled from "styled-components"
import { github } from "../Icons"
import { instagram } from "../Icons"
import { linkedin } from "../Icons"
const ContactBarStyles = styled.div`
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
    width: 48px;
    height: 48px;
    @media only screen and (max-width:${props => props.theme.maxWidthMedium}){
      width:32px;
      height:32px;
    }
    @media only screen and (max-width:${props => props.theme.maxWidthSmall}){
      width:24px;
      height:24px;
    }
    >path {
      fill: ${props => props.theme.black};
      stroke-width: 7;
      /* stroke: ${props => props.theme.black}; */
    }
  }

  }
`

const ContactBar = () => {
  return (
    <ContactBarStyles>
      <a href="">{linkedin}</a>
      <a href="">{github}</a>
      <a href="">{instagram}</a>
    </ContactBarStyles>
  )
}

export default ContactBar
