import React from 'react';
import styled from 'styled-components';
import Link from '../styles/Link';

const AboutPageStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  font-weight: 900;
  text-align: center;
  font-size: 48px;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  color: ${props => props.theme.black};
  /* Medium Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    font-size: 32px;
  }
  /* Small Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
    font-size: 32px;
  }
  a {
    :focus {
      span {
        color: ${props => props.theme.black};
        -webkit-text-stroke: 0px;
        text-decoration-line: underline;
      }
    }
  }
  span {
    transition: ease 0.3s;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: ${props => props.theme.textStroke};
    outline: none;
    @media (hover: hover) {
      :hover {
        color: ${props => props.theme.black};
        -webkit-text-stroke: 0px;
        text-decoration-line: underline;
      }
    }
  }
`;
const CopyStyles = styled.div`
  display: -webkit-box -ms-flexbox -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
  font-size: 56px;
  text-align: justify;
  width: 100%;
  overflow-y: scroll;
  div.copy {
    margin-bottom: 25px;
  }
  ::-webkit-scrollbar {
    width: 0px;
  }
  /* Medium Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    font-size: 48px;
  }
  /* Small Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
    text-align: center;
    font-size: 42px;
  }
  /* Very Small Screen */
  @media only screen and (max-width: ${props =>
      props.theme.maxWidthVerySmall}) {
    text-align: center;
    font-size: 38px;
  }
  /* Uber Small Screen */
  @media only screen and (max-width: 280px) {
    text-align: center;
    font-size: 32px;
  }
`;

const About = () => {
  return (
    <AboutPageStyles autofocus filled={false}>
      <CopyStyles className="copy-container">
        <div className="copy">
          My name is Eric Auväärt. I develop{' '}
          <Link tabIndex={0} to="/web">
            <span>web experiences</span>
          </Link>{' '}
          and love to create{' '}
          <Link tabIndex={0} to="/video">
            <span>engaging visuals</span>
          </Link>
          .
        </div>
      </CopyStyles>
    </AboutPageStyles>
  );
};

export default About;
