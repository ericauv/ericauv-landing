import styled from 'styled-components';

export default styled.button.attrs(props => ({
  size: props.size || 1,
  scale: props.scale || 1
}))`
  border-radius: 5px;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  border: 0;
  display: flex;
  justify-content: center;
  outline: none;
  cursor: pointer;
  font-size: ${props => props.size}rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: ${props => props.size + 1}rem;
  line-height: ${props => props.size + 1}rem;
  @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
    font-size: ${props => props.size * 0.7}rem;
    height: ${props => props.size * 1.3}rem;
    line-height: ${props => props.size * 1.3}rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    &.no-shrink {
      font-size: ${props => props.size}rem;
      padding-left: 1rem;
      padding-right: 1rem;
      height: ${props => props.size + 1}rem;
      line-height: ${props => props.size + 1}rem;
    }
  }
  transform: rotate(0deg);
  transition: all 0.2s ease;

  &.single-character {
    padding: 0;
    @media (max-width: ${props => props.theme.maxWidthMedium}) {
      line-height: ${props =>
        props.size <= 2 ? props.size : props.size - 1}rem;
      height: ${props => (props.size <= 1 ? props.size : props.size - 1)}rem;
      width: ${props => (props.size <= 1 ? props.size : props.size - 1)}rem;
      font-size: ${props => (props.size <= 1 ? props.size : props.size - 1)}rem;
    }
    height: ${props => props.size}rem;
    width: ${props => props.size}rem;
  }
  :hover {
    transform: rotate(${props => (props.rotate ? 90 : 0)}deg)
      scale(${props => (props.scale ? props.scale : 1)});
    box-shadow: ${props => props.theme.bs};
  }
`;
