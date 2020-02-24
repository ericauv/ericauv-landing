import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

const navItems = [
    {
        title: 'home',
        to:'/',
        isExternalLink:false,
    },
    {
        title: 'web',
        to:'/web',
        isExternalLink:false,
    },
    {
        title: 'video',
        to:'/video',
        isExternalLink:false,
    }
]


const NavBarStyles = styled.nav`
    width:100%;
`;

const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    margin:0;
    padding:0;
`;



const Nav = () => {
    return (
        <NavBarStyles>
            <NavList>
                {navItems.map((item,index)=>(
                    <NavItem key={`nav-item-${index}`} title={item.title} to={item.to} isExternalLink={item.isExternalLink}/>
                ))}
            </NavList>
        </NavBarStyles>
    )
}

export default Nav
