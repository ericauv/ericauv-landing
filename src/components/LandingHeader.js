import React, { useState } from 'react'
import Link from 'gatsby'
import styled from 'styled-components'
const LandingHeaderStyles = styled.h1`
  cursor: pointer;
  z-index: 3;
  margin: 0;
  text-align: left;
  padding: 0;
  width: 100%;
  font-size: 72px;
  flex: 0 0 72px;
  line-height: 72px;
  height: 72px;
  font-weight: 900;
  /* text stroke */
  ${props =>
    props.filled ? '' : `-webkit-text-stroke: 2px ${props.theme.black};`}
  font-family: Arial, Helvetica, sans-serif;
  color: ${props => (props.filled ? props.theme.black : 'transparent')};

  text-align: center;
  text-decoration-line: ${props => (props.filled ? 'underline' : 'none')};
  text-decoration-color: ${props => props.theme.black};
  @media only screen and (max-width: ${props => props.theme.maxWidthSmall}) {
    flex: 0 0 auto;
    height: 54px;
    font-size: 54px;
    line-height: 54px;
  }
`

const LandingHeader = ({ filled = false, children }) => {
  const [active, setActive] = useState(false)
  return (
    // <Link href="/">
    //   <a
    //     tabIndex="0"
    //     onFocus={() => setActive(true)}
    //     onMouseOver={() => setActive(true)}
    //     onMouseLeave={() => setActive(false)}
    //     onBlur={() => setActive(false)}
    //     style={{ textDecoration: "none", outline: "none" }}
    //     className="landing-header-link"
    //   >
    <LandingHeaderStyles filled={filled || active} className="landing-header">
      {children}
    </LandingHeaderStyles>
    // </a>
    //</Link>
  )
}

export default LandingHeader
