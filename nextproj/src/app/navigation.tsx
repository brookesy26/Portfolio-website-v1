'use client'

import styled from "styled-components"
import Link from "next/link"
import { Icon } from '@iconify/react'; 
import { useState } from "react";

type PageType = {
  $location: string;
}

const StyledNav = styled.nav`
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

const AnimatedNav = styled(StyledNav)<PageType>`
&::after {
  content: '';
  height: 0.17rem;
  width: 2rem;
  border-radius: 30px;
  background-color: #FF006B;
  position: absolute;
  top: 3.2rem;
  left: ${(props) => {
      switch (props.$location) {
        case 'home':
          return '8rem';
        case 'project':
          return '3.35rem';
        case 'skill':
          return '12.65rem';
        default:
          return '8rem';
      }
    }};
  transition: left 0.3s ease;
}
`
const StyledLink = styled(Link)`
color: white;
`
const StyledIcon = styled(Icon)<VariantType>`
  color: ${(props) => props.$variant ? '#FF006B ' : '#FFFFFF'};
  transition: color 0.3s ease;
`
type VariantType = {
  $variant: Boolean;
}

const NavBar = () => {
const [homeState, setHomeState] = useState(true)
const [projectState, setProjectState] = useState(false)
const [skillsState, setSkillsState] = useState(false)
const [page, setPage] = useState('home')

function handleHomeClick(){
  setHomeState(true)
  setProjectState(false)
  setSkillsState(false)
  setPage('home')
}
function handleProjectClick(){
  setProjectState(true)
  setHomeState(false)
  setSkillsState(false)
  setPage('project')
}
function handleSkillsClick(){
  setSkillsState(true)
  setHomeState(false)
  setProjectState(false)
  setPage('skill')
}

  return (
    <AnimatedNav $location={page}>
      <StyledLink href="projects">
        <StyledIcon icon="fluent:apps-24-filled" width="28" height="28" $variant={projectState} onClick={handleProjectClick}/>
        </StyledLink>

      <StyledLink href="/">
        <StyledIcon icon="fluent:person-24-regular" width="32" height="32"  $variant={homeState} onClick={handleHomeClick}/>
        </StyledLink>
        
      <StyledLink href="skills" >
        <StyledIcon icon="uil:graph-bar" width="28" height="28" name="skills" $variant={skillsState} onClick={handleSkillsClick}/>
        </StyledLink>
    </AnimatedNav>
  )
}

export default NavBar 