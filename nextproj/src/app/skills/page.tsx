"use client"

import Hobbies from "./hobbies";
import Skills from "./skills";
import styled from "styled-components"

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`
export default function SkillsAndHobbies() {
  return (
    <StyledMain>
      <Skills/>
      <Hobbies/>
    </StyledMain>
  )
}