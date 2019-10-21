import React, { useState } from 'react';
import styled from 'styled-components';
import { Provider } from './context/ListContext';
import ListContainer from './ListContainer';
import icons from './Icons';
import { navigate } from 'gatsby';

const listItems = [
  { title: 'web', icon: icons.code },
  // { title: 'photo', icon: icons.image },
  { title: 'video', icon: icons.video },
  {
    title: 'store',
    icon: icons.cart,
    externalLink: 'https://store.ericauv.com'
  },
  { title: 'about', icon: icons.user }
];

const HomePageStyles = styled.div`
  display: -webkit-box -moz-box -ms-flexbox -webkit-flex; /* OLD - iOS 6-, Safari 3.1-6 */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
  * > ul {
    overflow: hidden;
  }
`;
const HomeListContainerContainer = styled.div`
  height: 80%;
  display: -webkit-box -moz-box -ms-flexbox -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 70px;
  margin-right: 10px;
  /* Medium Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    height: 70%;
  }
  /* Small Screen */
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    height: 70%;
    margin-bottom: 80px;
  }
`;
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTags, setActiveTags] = useState([]);
  const states = {
    activeIndex,
    setActiveIndex,
    activeTags,
    setActiveTags,
    onClickValue: listItems && listItems[activeIndex],
    onClickFunction: listItem => {
      if (!listItem.externalLink) {
        navigate(`/${listItem.title}`);
      } else {
        window.location.href = listItem.externalLink;
      }
    }
  };

  const HomeContext = Provider;

  return (
    <HomeContext value={states}>
      <HomePageStyles>
        <HomeListContainerContainer className="home-list-container">
          <ListContainer list={listItems} itemSize={72} itemSpacing={10} />
        </HomeListContainerContainer>
      </HomePageStyles>
    </HomeContext>
  );
};

export default Home;
