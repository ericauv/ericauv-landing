import React, { useState } from 'react'
import styled from 'styled-components'
import { Provider } from './context/ListContext'
import ListContainer from './ListContainer'
import icons from './Icons'
import { navigate } from 'gatsby'

const listItems = [
  { title: 'web', icon: icons.code },
  // { title: 'photo', icon: icons.image },
  { title: 'video', icon: icons.video },
  { title: 'store', icon: icons.cart, externalLink:'https://store.ericauv.com' },
  { title: 'about', icon: icons.user },
]

const HomePageStyles = styled.div`
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
`

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [activeTags, setActiveTags] = useState([])
  const states = {
    activeIndex,
    setActiveIndex,
    activeTags,
    setActiveTags,
    onClickValue:
      listItems && listItems[activeIndex],
    onClickFunction: listItem => {
      if(!listItem.externalLink){
        navigate(`/${listItem.title}`)
      }else{
        window.location.href = listItem.externalLink;
      }
    },
  }

  const HomeContext = Provider

  return (
    <HomeContext value={states}>
      <HomePageStyles>
        <div
          style={{
            height: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginBottom: '50px',
          }}
        >
          <ListContainer
            itemsPerPage={5}
            list={listItems}
            itemSize={72}
            itemSpacing={5}
          />
        </div>
      </HomePageStyles>
    </HomeContext>
  )
}

export default Home
