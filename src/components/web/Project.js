import React from "react"
import styled from "styled-components"
import ProjectList from "./ProjectList"
import BackButton from "../styles/BackButton"
import ListTitle from "../ListTitle"
const ProjectStyles = styled.div`
  height: 100%;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
  overflow-y: scroll;
  img {
    max-width: 100%;
  }
  p,
  li {
    font-family: "Georgia";
  }
`

const ProjectTitleStyles = styled.h1``
const Project = ({ title }) => {
  const project = ProjectList[title]

  if (!project) return null
  const {
    tags,
    summary,
    background,
    constraints,
    lessons,
    challenges,
    nextSteps,
    images,
  } = project

  return (
    <ProjectStyles className="project">
      <BackButton>{`<- Back`}</BackButton>
      <h1>{title}</h1>
      {images && images.title && <img src={images.title} alt="title" />}
      {tags && (
        <>
          <ul>
            {tags.map((tag, index) => (
              <li key={`tag-${index}`}>{tag}</li>
            ))}
          </ul>
        </>
      )}
      {summary && (
        <>
          <ListTitle size={32}>Summary</ListTitle>
          <p>{summary}</p>
        </>
      )}
      {images && images.summary && <img src={images.summary} alt="summary" />}
      {background && (
        <>
          <ListTitle size={32}>Background</ListTitle>
          <p>{background}</p>
        </>
      )}

      {challenges && (
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
      )}
    </ProjectStyles>
  )
}

export default Project
