import React from 'react'
import styled from 'styled-components'
import {github, view} from '../Icons'


const StaticProjectBarStyles = styled.div`
    margin-top:5px;
    height:auto;
    width:100%;
    display: flex;
    justify-content:flex-start;

`;

const LinkStyles = styled.a`
    text-decoration:none;
    color: ${props => props.theme.black};
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
    cursor: pointer;
    margin-right: 20px;

    svg {
        margin-bottom:5px;
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
    &:focus {
        svg {
            transform: scale(1.1);
        }
    }

`;

const StaticProjectBar = ({githubLink='', projectLink=''}) => {
    return (
        <StaticProjectBarStyles>
      {githubLink && (
        <LinkStyles
          title="Github"
          rel="noopener noreferrer"
          target="_blank"
          href={githubLink}
        >
          {github}
          Github
        </LinkStyles>
      )}

      {projectLink && (
        <LinkStyles
          title="Live Project"
          rel="noopener noreferrer"
          target="_blank"
          href={projectLink}
        >
          {view}
          Live Project
        </LinkStyles>
      )}
        </StaticProjectBarStyles>
    )
}

export default StaticProjectBar
