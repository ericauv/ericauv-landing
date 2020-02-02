import React, { useState } from 'react';
import styled from 'styled-components';
import { Provider } from '../context/ListContext';
import ListContainer from '../ListContainer';
import { navigate } from '@reach/router';

const WebPageStyles = styled.div`
  display: -webkit-box -moz-box -ms-flexbox -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

const Web = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndexTag, setActiveIndexTag] = useState(null);
  const [activeTags, setActiveTags] = useState({});
  const [activeTagChange, setActiveTagChange] = useState(true);

  const getUniqueTags = projects => {
    const accumulator = {};
    projects.map(project => {
      return project.tags.map(tag =>
        accumulator[tag] ? null : (accumulator[tag] = { title: tag })
      );
    });
    return Object.values(accumulator);
  };
  const tags = getUniqueTags(projects);

  const handleTagClick = tagIndex => {
    const clickedTag = tags[tagIndex].title;
    if (activeTags[clickedTag]) {
      setActiveTags(activeTags => {
        delete activeTags[clickedTag];
        setActiveIndexTag(null);
        setActiveTagChange(!activeTagChange);
        return activeTags;
      });
    } else {
      setActiveTags({ ...activeTags, [clickedTag]: clickedTag });
      setActiveTagChange(!activeTagChange);
    }
  };
  const routeToProject = index => {
    navigate(`${projects[index].slug}`);
  };
  const states = {
    activeIndex,
    setActiveIndex,
    activeIndexTag,
    setActiveIndexTag,
    activeTags,
    handleTagClick,
    activeTagChange,
    onClickValue: activeIndex,
    onClickFunction: routeToProject
  };
  const WebContext = Provider;
  const itemSize = 36;

  return (
    <WebContext value={states}>
      <WebPageStyles className="web-page-container">
        <ListContainer
          type="tag"
          key="tags-list"
          title="skills"
          list={tags}
          itemSize={itemSize}
          itemSpacing={10}
          flexGrow={0.8}
        />
        <ListContainer
          key="work-list"
          title="projects"
          list={projects}
          itemSize={itemSize}
          itemSpacing={10}
        />
      </WebPageStyles>
    </WebContext>
  );
};

export default Web;
