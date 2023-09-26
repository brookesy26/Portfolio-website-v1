'use client'
import styled from "styled-components"
import Link from "next/link"
import { Icon } from '@iconify-icon/react';

export const StyledNav = styled.nav`
//position
position: fixed;
bottom: 30px;
left: 50%;
transform: translate(-50%);
//dimensions
width: 11rem;
padding: 0.9rem 3.5rem;
//layout
display: flex;
align-items: center;
justify-content: space-between;
//styleing
border-radius: 1.875rem;
border: 1px solid #665CD9;
background: #0F0F0F;
`
export const StyledLink = styled(Link)`
color: white;
`


const NavBar = () => {

  return (
    <StyledNav>
      <StyledLink href="projects"><Icon icon="fluent:apps-24-filled" width="28" height="28" /></StyledLink>
      <StyledLink href="home"><Icon icon="fluent:person-24-regular" width="32" height="32"/></StyledLink>
      <StyledLink href="skills" ><Icon icon="uil:graph-bar" width="28" height="28"/></StyledLink>
    </StyledNav>
  )
}

export default NavBar 