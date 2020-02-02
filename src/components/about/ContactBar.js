import React from 'react';
import styled from 'styled-components';
import resumePDF from '../../images/Auvaart-Eric_Web-Developer_Resume.pdf';
import { github } from '../Icons';
import { instagram } from '../Icons';
import { linkedin } from '../Icons';
import { email } from '../Icons';
import { pdf } from '../Icons';
const ContactBarStyles = styled.div`
  position:absolute;
  bottom:5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  a {
    span{ // for screen-readers
      display:none;
    }
    font-size:0.8rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    cursor: pointer;
    margin-right: 20px;
    &:focus{
      svg{
        transform:scale(1.1);
      }
    }
  }
  * > svg {
    transition:ease 0.3s;
    &:hover {
      transform: scale(1.1);
    }

    width: 46px;
    height: 46px;
    @media only screen and (max-width:${props => props.theme.maxWidthMedium}){
      width:30px;
      height:30px;
    }
    /* @media only screen and (max-width:${props => props.theme.maxWidthSmall}){
      width:32px;
      height:32px;
    } */
    >path {
      fill: ${props => props.theme.black};
      stroke-width: 7;
      /* stroke: ${props => props.theme.black}; */
    }
  }
`;

const ContactBar = () => {
  return (
    <ContactBarStyles>
      <a
        title="View LinkedIn Profile"
        rel="noopener noreferrer"
        target="_blank"
        href="https://linkedin.com/in/eric-auvaart/"
      >
        {linkedin}
        <span>
          LinkedIn  
        </span>
      </a>
      <a title="View Resume/CV" href={resumePDF}>
        {pdf}
        <span>
          Resume/CV      
        </span>
      </a>
      <a
        title="View Github Profile"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/ericauv"
      >
        {github}
        <span>
          GitHub
        </span>
      </a>
      <a
        title="Send Eric Auvaart an Email"
        rel="noopener noreferrer"
        target="_blank"
        href="mailto:e.auvaart@gmail.com"
      >
        {email}
        <span>
          Email      
        </span>

      </a>
      <a
        title="View Instagram Profile"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/ericauv/"
      >
        {instagram}
        <span>
          Instagram      
        </span>
      </a>
    </ContactBarStyles>
  );
};

export default ContactBar;
