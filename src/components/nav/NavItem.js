import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
const NavItemStyles= styled.li`
    list-style:none;
    width:100%;
    text-align:center;
    a {
        display:block;
        padding:5px;
        color: ${props=>props.theme.white};
        font-size:18px;
        background: ${props=>props.theme.black};
        width:100%;
        text-align:center;
        width:100%;
        text-decoration: none;
        font-weight: 900;
        font-family: Arial, Helvetica, sans-serif;
        @media only screen and (max-width: ${props => props.theme.maxWidthMedium}) {
            color: ${props=>props.theme.white};
            font-size: 0.8rem;
            -webkit-text-stroke: 0px;

        }

        /* text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
        */

    }

    &:hover{
        outline:none;
        a{
            text-decoration:underline;
            text-decoration-color: ${props=>props.theme.white}
        }
    }
    a:focus{
            text-decoration:underline;
            text-decoration-color: ${props=>props.theme.white}
        }

    a.active{
        box-shadow:0px 0px 0px 1px ${props=>props.theme.black} inset;
        background: ${props=>props.theme.white};
        /* text-shadow:none; */
        color: ${props => props.theme.black};
        text-decoration-line: underline;
        text-decoration-color: ${props => props.theme.black};
    }

`;




const NavItem = (props) => {
    const {title,to,isExternalLink} = props;
    return (
        <NavItemStyles>
            {!isExternalLink && <Link to={to} activeClassName='active'>{title}</Link>}
            {isExternalLink &&
                (
                    <a
                        title='View Store'
                        rel="noopener noreferrer"
                        target="_blank"
                        href={to}
                    >
                        {title}
                    </a>
                )
            }
        </NavItemStyles>
    )
}

export default NavItem
