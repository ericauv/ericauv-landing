import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Button from '../Button'
import BackButton from '../BackButton'
import Header from './Header'
import ContactBar from '../../about/ContactBar'
const themes = {
  default: {
    name: 'default',
    red: '#FF0000',
    black: '#000000',
    grey: '#696969',
    lightgrey: '#E1E1E1',
    white: '#FFFFFF',
    offWhite: '#F5F5F5',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
    maxWidthVeryLarge: '1800px',
    maxWidthLarge: '1000px',
    maxWidthMedium: '700px',
    maxWidthSmall: '480px',
    maxWidthVerySmall: '390px',
  },
  dark: {
    name: 'dark',
    red: '#FF0000',
    white: '#000000',
    grey: '#696969',
    lightgrey: '#E1E1E1',
    black: '#FFFFFF',
    offWhite: '#F5F5F5',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
    maxWidthVeryLarge: '1800px',
    maxWidthLarge: '1000px',
    maxWidthMedium: '700px',
    maxWidthSmall: '480px',
    maxWidthVerySmall: '390px',
  },
}

const PageStyles = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const PageBody = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 20px;
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    width: 95%;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
`;

const ButtonsBar = styled.div`
  display:grid;
  grid-template-columns:repeat(3, minmax(100px, 1fr));
  width:80%;
  margin-top:15px;
  margin-bottom:10px;
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    width: 95%;
    grid-template-columns:repeat(3, minmax(75px, 1fr));
  }
`;
const Layout = ({ filled = false, home=false, contact=false, children }) => {
  const [selectedTheme, setSelectedTheme] = useState({ ...themes.default })

  const toggleTheme = () => {
    if (selectedTheme && selectedTheme.name === 'default') {
      setSelectedTheme({ ...themes.dark })
    } else if (selectedTheme && selectedTheme.name === 'dark') {
      setSelectedTheme({ ...themes.default })
    }
  }
  return (
    <ThemeProvider theme={selectedTheme}>
      <PageStyles className="page-landing">
        <>
          <ButtonsBar>
            {!home && <BackButton style={{ marginRight:'auto' }} />}
            <Button
              onClick={toggleTheme}
              style={{marginRight:'auto', marginLeft:'auto', gridColumn:2}}
            >
              {selectedTheme.name === 'default' ? 'Dark Mode' : 'Light Mode'}
            </Button>
          </ButtonsBar>
          <Header filled={filled}></Header>
          <PageBody className="page-landing-body">{children}</PageBody>
        </>
        {contact && <ContactBar/>}
      </PageStyles>
    </ThemeProvider>
  )
}

export default Layout
