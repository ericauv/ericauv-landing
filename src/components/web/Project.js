import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectList from './ProjectList';
import ProjectBar from './ProjectBar';
import ListTitle from '../ListTitle';
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
    font-weight: 900;
    -webkit-text-stroke: ${props => props.theme.textStroke};
    color: transparent;
    font-size: 24px;
  }
  img {
    max-width: 100%;
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
  justify-content: space-between;
`;

const Tag = styled.div`
  background: ${props => props.theme.lightGrey};
  border-radius: 5px;
  width: fit-content;
  padding-left: 3px;
  padding-right: 3px;
`;

const Project = ({ title }) => {
  const project = ProjectList[title];
  const projectRef = useRef();
  useEffect(() => {
    projectRef.current.focus();
    projectRef.current.addEventListener('scroll', () => {});

    // returned function will be called on component unmount
    return () => {
      projectRef.current.removeEventListener('scroll', () => {});
    };
  }, []);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldTranslateBar, setShouldTranslateBar] = useState(false);
  if (!project) return null;
  const {
    tags,
    summary,
    githubLink,
    projectLink,
    background,
    constraints,
    lessons,
    challenges,
    nextSteps,
    images
  } = project;

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
      tabIndex={0}
      onScroll={handleScroll}
      ref={projectRef}
      className="project"
    >
      <h2>{title}</h2>
      <img src={images.title} alt={title}></img>
      {tags && tags.length && (
        <TagSection className="tag-section">
          {tags.map((tag, index) => (
            <Tag className="tag" key={`${title}-tag-${index}`} tag={tag}></Tag>
          ))}
        </TagSection>
      )}
      <div>{summary}</div>
      <ProjectBar
        shouldTranslateBar={shouldTranslateBar}
        githubLink={githubLink}
        projectLink={projectLink}
      />
      {/*
      {summary && (
        <>
          <ListTitle size={32}>Summary</ListTitle>
          <p>{summary}</p>
        </>
      )} */}

      {/* {challenges && (
        <>
          <ListTitle size={32}>Challenges</ListTitle>
          {images && images.challenges && (
            <img src={images.challenges} alt="challenges" />
          )}
          <ul>
            {challenges &&
              challenges.map((challenge, index) => (
                <li key={`challenge-${index}`}>{challenge}</li>
              ))}
          </ul>
        </>
      )}
      {constraints && (
        <>
          <ListTitle size={32}>Constraints</ListTitle>
          {images && images.constraints && (
            <img src={images.constraints} alt="constraints" />
          )}
          <ul>
            {constraints &&
              constraints.map((constraint, index) => (
                <li key={`constraint-${index}`}>{constraint}</li>
              ))}
          </ul>
        </>
      )}
      {lessons && (
        <>
          <ListTitle size={32}>Lessons</ListTitle>
          {images && images.lessons && (
            <img src={images.lessons} alt="lessons" />
          )}
          <ul>
            {lessons.map((lesson, index) => (
              <li key={`lesson-${index}`}>{lesson}</li>
            ))}
          </ul>
        </>
      )}
      {nextSteps && (
        <>
          <ListTitle size={32}>Next Steps</ListTitle>
          {images && images.nextSteps && (
            <img src={images.nextSteps} alt="next steps" />
          )}
          <ul>
            {nextSteps.map((step, index) => (
              <li key={`step-${index}`}>{step}</li>
            ))}
          </ul>
        </>
      )} */}
    </ProjectStyles>
  );
};

export default Project;
