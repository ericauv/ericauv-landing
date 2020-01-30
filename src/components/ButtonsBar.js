import React, {useContext} from 'react'
import styled from 'styled-components'
import ThemeContext from './context/ThemeContext';
import Button from './styles/Button'
import BackButton from './styles/BackButton'

const ButtonsBarStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  width: 80%;
  margin-top: 15px;
  margin-bottom: 10px;
  @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
    width: 95%;
    grid-template-columns: repeat(3, minmax(75px, 1fr));
  }
`;


const ButtonsBar = ({home=false}) => {
    const { selectedTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <ButtonsBarStyles className='buttons-bar' home={home}>
        {!home && <BackButton style={{ marginRight: 'auto' }} />}
            <Button
            onClick={toggleTheme}
            style={{ marginRight: 'auto', marginLeft: 'auto', gridColumn: 2 }}
            >
            {selectedTheme.name === 'default'
                ? 'Dark Mode ☾'
                : 'Light Mode ☀'}
            </Button>
        </ButtonsBarStyles>
    )
}

export default ButtonsBar


