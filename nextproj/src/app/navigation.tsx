'use client'

import styled from "styled-components"
import Link from "next/link"
import { Icon } from '@iconify/react'; 
import { useState } from "react";

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
z-index: 999;
//styleing
border-radius: 1.875rem;
border: 1px solid #665CD9;
background: #0F0F0F;
@media (min-width: 800px) {
  position: static;
  grid-column: 2/3;
  grid-row: 2/3;
  transform: translate(0%);
}
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
const StyledIcon = styled(Icon)<VariantType>`
  color: ${(props) => props.$variant ? '#FF006B ' : '#FFFFFF'};
  scale: ${(props) => props.$variant ? '1.2' : '1'};
  transition: all 0.3s ease;
  position: relative;
`
type PageType = {
  $location: string;
}
type VariantType = {
  $variant: Boolean;
}
interface MyComponentProps {
  page: string;
  setPage: (page: string) => void;
}

const NavBar = (props : MyComponentProps) => {

  const {page, setPage } = props;
  const [homeState, setHomeState] = useState(true)
  const [projectState, setProjectState] = useState(false)
  const [skillsState, setSkillsState] = useState(false)

  function handleHomeClick(){
    setHomeState(true)
    setProjectState(false)
    setSkillsState(false)
    setPage('home')
    window.scroll({
      top: 0,  
      behavior: 'smooth'
    });
  }
  function handleProjectClick(){
    setProjectState(true)
    setHomeState(false)
    setSkillsState(false)
    setPage('project')
    window.scroll({
      top: 0,  
      behavior: 'smooth'
    });
  }
  function handleSkillsClick(){
    setSkillsState(true)
    setHomeState(false)
    setProjectState(false)
    setPage('skill')
    window.scroll({
      top: 0,  
      behavior: 'smooth'
    });
  }
  return (
    <AnimatedNav $location={page}>
        <StyledIcon icon="fluent:apps-24-filled" width="28" height="28" $variant={projectState} onClick={handleProjectClick}/>
        <StyledIcon icon="fluent:person-24-regular" width="32" height="32"  $variant={homeState} onClick={handleHomeClick}/>
        <StyledIcon icon="uil:graph-bar" width="28" height="28" name="skills" $variant={skillsState} onClick={handleSkillsClick}/>
    </AnimatedNav>
  )
}

export default NavBar 