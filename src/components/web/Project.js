import { ThemeContextProvider } from '../context/ThemeContext';
import Layout from '../styles/layout/Layout';
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby'
import { useStaticQuery } from "gatsby"
import ProjectList from './ProjectList';
import ProjectBar from './ProjectBar';
const ProjectStyles = styled.div`
  outline: none;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;
  width: 80%;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
  overflow-y: scroll;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 10px;
  ::-webkit-scrollbar {
    width: 0px;
  }
  /* Large Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthLarge}) {
    width: 83%;
  }
  /* Medium Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    width: 90%;
  }
  /* Small Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
    width: 100%;
  }
  h2 {
    font-weight: 900;
    font-size: 32px;
    color: ${props => props.theme.black};
    text-decoration: underline;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid ${props => props.theme.black};
  }
  video{
    border-radius:15px;
    height:400px;
    width:100%;
    margin-bottom: 10px;
    border: 1px solid ${props => props.theme.black};
  }

  p,
  li {
    line-height: 2rem;
    font-family: 'Georgia';
  }
  font-size:100px;
`;

const TagSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  background: ${props => props.theme.lightGrey};
  box-shadow: ${props => props.theme.bsLarge};
  color: ${props => props.theme.black};
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 900;
  @media only screen and (max-width: ${props => props.theme.maxWidthLarge}) {
    font-size: 16px;
  }
  @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
    font-size: 14px;
  }
  border-radius: 5px;
  width: fit-content;
  padding-left: 8px;
  padding-right: 8px;
`;
export const ProjectSection = styled.div``;
export const ProjectSectionTitle = styled.h3`
  font-weight: 900;
  -webkit-text-stroke: ${props => props.theme.textStroke};
  color: transparent;
  font-size: 28px;
  margin-top: 10px;
  margin-bottom: 0;
`;
export const ProjectSectionContent = styled.div`
  p {
    margin-top: 10px;
  }
  line-height: 2rem;
  font-family: 'Georgia';
`;


const Project = (props) => {
  const data = useStaticQuery(
    graphql`
    query htmlGet {
      markdownRemark(id: {eq: "b011abce-a79b-581b-9590-cc8acd92c239"}) {
        id
        html
      }
    }`
  );
  console.log(data)
  return (
    <ThemeContextProvider>
  <Layout>

    <ProjectStyles
    autoFocus
    tabIndex={0}
    className="project"
    >
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </ProjectStyles>
    </Layout>
    </ThemeContextProvider>
  );
};
export default Project;
