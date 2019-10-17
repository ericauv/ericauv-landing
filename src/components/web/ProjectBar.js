import React, { useRef } from 'react';
import styled from 'styled-components';
import { github } from '../Icons';
import { view } from '../Icons';
const ContactBarStyles = styled.div`
  box-shadow: ${props => props.theme.bsUp};
  transition: transform 0.5s ease;
  transform: translateY(
    ${props => (props.translate ? props.translate + 5 : 0)}px
  );
  position: absolute;
  width: 100%;
  bottom: 5px;
  background: ${props => props.theme.white};
  display: flex;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;
  margin-top: 20px;
  border-top: 3px solid ${props => props.theme.black};
  a {
    cursor: pointer;
    margin-right: 20px;
    &:focus {
      svg {
        transform: scale(1.1);
      }
    }
  }
  * > svg {
    transition: ease 0.3s;
    &:hover {
      transform: scale(1.1);
    }

    width: 46px;
    height: 46px;
    /* Medium Screen */
    @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
      width: 30px;
      height: 30px;
    }
    > path {
      fill: ${props => props.theme.black};
      stroke-width: 7;
    }
  }
`;

const ContactBar = ({ githubLink, projectLink, shouldTranslateBar }) => {
  const barRef = useRef();
  const translate = shouldTranslateBar ? barRef.current.clientHeight : 0;
  return (
    <ContactBarStyles ref={barRef} translate={translate}>
      {githubLink && (
        <a
          title="github"
          rel="noopener noreferrer"
          target="_blank"
          href={githubLink}
        >
          {github}
        </a>
      )}

      {projectLink && (
        <a
          title="view project"
          rel="noopener noreferrer"
          target="_blank"
          href={projectLink}
        >
          {view}
        </a>
      )}
    </ContactBarStyles>
  );
};

export default ContactBar;
