import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Button from './styles/Button'
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
`

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
  }
`
const Layout = props => {
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
          <Button
            onClick={toggleTheme}
            style={{ marginBottom: '15px', marginTop: '15px' }}
          >
            {selectedTheme.name === 'default' ? 'Dark Mode' : 'Light Mode'}
          </Button>
          <PageBody className="page-landing-body">{props.children}</PageBody>
        </>
      </PageStyles>
    </ThemeProvider>
  )
}

export default Layout
