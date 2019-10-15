import React, { useState } from "react"
import styled from "styled-components"
import { Provider } from "../context/ListContext"
import LandingHeader from "../LandingHeader"
import ListContainer from "../ListContainer"
import ProjectList from "./ProjectList"
import BackButton from "../styles/BackButton"
import { navigate } from "@reach/router"
const listItems = Object.values(ProjectList)

const getUniqueTags = listItems => {
  const accumulator = {}
  listItems.map(item => {
    item.tags.map(tag =>
      accumulator[tag] ? null : (accumulator[tag] = { title: tag })
    )
  })
  return Object.values(accumulator)
}
const tags = getUniqueTags(listItems)

const WebPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`

const Web = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [activeIndexTag, setActiveIndexTag] = useState(null)
  const [activeTags, setActiveTags] = useState({})
  const [activeTagChange, setActiveTagChange] = useState(true)

  const handleTagClick = tagIndex => {
    const clickedTag = tags[tagIndex].title
    if (activeTags[clickedTag]) {
      setActiveTags(activeTags => {
        delete activeTags[clickedTag]
        setActiveTagChange(!activeTagChange)
        return activeTags
      })
    } else {
      setActiveTags({ ...activeTags, [clickedTag]: clickedTag })
      setActiveTagChange(!activeTagChange)
    }
  }
  const routeToProject = index => {
    navigate(`/project?title=${listItems[index].title}`)
  }
  const states = {
    activeIndex,
    setActiveIndex,
    activeIndexTag,
    setActiveIndexTag,
    activeTags,
    handleTagClick,
    activeTagChange,
    onClickValue: activeIndex,
    onClickFunction: routeToProject,
  }
  const WebContext = Provider
  const itemSize = 36
  return (
    <WebContext value={states}>
      <WebPageStyles className="web-page-container">
        <LandingHeader filled={false}>ericauv</LandingHeader>
        <BackButton style={{ marginTop: "20px", alignSelf: "flex-start" }}>
          {"<- Back"}
        </BackButton>
        <ListContainer
          type="tag"
          key="tags-list"
          title="web"
          list={tags}
          itemSize={itemSize}
          itemSpacing={5}
          flexGrow={0.8}
        />
        <ListContainer
          key="work-list"
          title="work"
          list={listItems}
          itemSize={itemSize}
          itemSpacing={5}
        />
      </WebPageStyles>
    </WebContext>
  )
}

export default Web
