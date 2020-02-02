import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ThemeContext from '../../context/ThemeContext';
import ButtonsBar from '../../ButtonsBar';
import Header from './Header';
import ContactBar from '../../about/ContactBar';
import Nav from '../../nav/Nav'
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

const HeaderStyles = styled.header`
  width:80%;
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    width: 95%;
  }

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


const Layout = ({
  filled = false,
  home = false,
  contact = false,
  children
}) => {
  const { selectedTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={selectedTheme}>
      <PageStyles className="page-landing">
        <>
        <HeaderStyles>
          <ButtonsBar home={home}/>
          <Header filled={filled}></Header>
          <Nav/>
        </HeaderStyles>
          <PageBody className="page-landing-body">{children}</PageBody>
        </>
        {contact && <ContactBar />}
      </PageStyles>
    </ThemeProvider>
  );
};

export default Layout;
