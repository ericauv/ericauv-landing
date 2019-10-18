import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
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

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
    }
  }`;


const Project = (props) => {
  const projectRef = useRef();
  useEffect(() => {
    projectRef.current.focus();
    projectRef.current.addEventListener('scroll', () => {});
    const currentRef = projectRef.current;
    // returned function will be called on component unmount
    return () => {
      currentRef.removeEventListener('scroll', () => {});
    };
  }, []);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldTranslateBar, setShouldTranslateBar] = useState(false);
  const { title, tags, githubLink, projectLink, titleMediaType, titleMedia } = props.pageContext.frontmatter;
  const handleScroll = () => {
    const currentScrollY = projectRef.current.scrollTop;
    projectRef.current.focus();
    if (currentScrollY > lastScrollY) {
      setShouldTranslateBar(true);
    } else {
      setShouldTranslateBar(false);
    }
    setLastScrollY(currentScrollY);
  };

  return (
    <ProjectStyles
      autoFocus
      tabIndex={0}
      onScroll={handleScroll}
      ref={projectRef}
      className="project"
    >
      <h2>{title}</h2>
      {titleMedia && titleMediaType==='img' ? <img src={titleMedia.publicURL} alt={title}></img> : <video autoPlay loop title={title}>
        <source src={titleMedia.publicURL} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>}
      {tags && tags.length && (
        <TagSection className="tag-section">
          {tags.map((tag, index) => (
            <Tag
              className={`tag ${index === 0 ? 'tag-first' : ''}`}
              key={`${title}-tag-${index}`}
            >
              {tag}
            </Tag>
          ))}
        </TagSection>
      )}
      <MDXRenderer>{props.pageContext.body}</MDXRenderer>
      {/* {sections &&
        sections.map((section, index) => (
          <ProjectSection
            className="project-section"
            key={`project-section-${index}`}
          >
            <ProjectSectionTitle
              className="project-section-title"
              key={`section-${index}-title`}
            >
              {section.title}
            </ProjectSectionTitle>
            <ProjectSectionContent
              className="project-section-content"
              key={`section-${index}-content`}
            >
              {section.content}
            </ProjectSectionContent>
          </ProjectSection>
        ))} */}
      {(projectLink || githubLink) &&

      <ProjectBar
      shouldTranslateBar={shouldTranslateBar}
      githubLink={githubLink}
      projectLink={projectLink}
      />
    }
    </ProjectStyles>
  );
};
export default Project;



