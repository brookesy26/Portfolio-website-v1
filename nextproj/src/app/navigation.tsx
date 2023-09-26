'use client'
import {StyledLink, StyledNav} from "./navigation.styles"

const NavBar = () => {

  return (
    <StyledNav>
      <StyledLink href="projects"> Projects</StyledLink>
      <StyledLink href="home"> Home</StyledLink>
      <StyledLink href="skills">Skills</StyledLink>
    </StyledNav>
  )
}

export default NavBar 