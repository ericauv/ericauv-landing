import styled from 'styled-components';
const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 1px 0px black;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.black};
  border-radius: 5px;
  padding: 15px;
  * > a {
    text-decoration: none;
    color: ${props => props.theme.black};
  }
`;

export default CardStyles;
