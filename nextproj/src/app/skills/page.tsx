"use client"

import Hobbies from "./hobbies";
import Skills from "./skills";
import { StyledMain } from "./main.styled";

export default function SkillsAndHobbies() {
  return (
    <StyledMain>
      <Skills/>
      <Hobbies/>
    </StyledMain>
  )
}