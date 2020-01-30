import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
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
  h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
    -webkit-text-stroke: ${props => props.theme.textStroke};
    color: transparent;
    font-size: 28px;
    margin-top: 10px;
    margin-bottom: 0;
  }
  img {
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid ${props => props.theme.black};
  }
  video {
    /* border-radius: 15px; */
    max-height: 400px;
    width: 100%;
    margin-bottom: 10px;
    border-top: 4px solid ${props => props.theme.black};
    border-bottom: 4px solid ${props => props.theme.black};
  }

  div.project-content {
    p {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    line-height: 2rem;
    font-family: 'Georgia';
  }
`;

const TagSection = styled.div`
  margin-bottom: 40px;
  display: -webkit-box -moz-box -ms-flexbox -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  display:flex;
  justify-content:center;
  height:120%;
  background: ${props => props.theme.lightGrey};
  box-shadow: ${props => props.theme.bsLarge};
  color: ${props => props.theme.black};
  min-width: 50px;
  min-height: 24px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 900;
  @media only screen and (max-width: ${props => props.theme.maxWidthLarge}) {
    font-size: 16px;
    min-height: 20px;
  }
  @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
    min-height: 18px;
    font-size: 14px;
  }
  border-radius: 5px;
  padding-left: 8px;
  padding-right: 8px;
`;

const Project = ({ data }) => {
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
  const {
    title,
    tags,
    githubLink,
    projectLink,
    titleMediaType,
    titleMedia
  } = data.frontmatter;
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
autofocus
      tabIndex={0}
      onScroll={handleScroll}
      ref={projectRef}
      className="project"
    >
      <h2>{title}</h2>
      {titleMedia &&
        (titleMediaType === 'img' ? (
          <img src={titleMedia && titleMedia.publicURL} alt={title}></img>
        ) : (
          <video autoPlay loop muted preload controls title={title}>
            <source src={titleMedia && titleMedia.publicURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      {tags && tags.length && (
        <TagSection className="tag-section">
          {tags.map((tag, index) => (
            <Tag className={`tag`} key={`${title}-tag-${index}`}>
              {tag}
            </Tag>
          ))}
        </TagSection>
      )}
      <div
        className="project-content"
        dangerouslySetInnerHTML={{ __html: data.html }}
      ></div>
      {(projectLink || githubLink) && (
        <ProjectBar
          shouldTranslateBar={shouldTranslateBar}
          githubLink={githubLink}
          projectLink={projectLink}
        />
      )}
    </ProjectStyles>
  );
};
export default Project;
