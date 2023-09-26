"use client"
import stuffIDo from "./skills.json"
import {StyledLi, StyledUL, StyledSection, StyledH2} from "./hobbies.styles"

export default function Skills() {
  return (
    <StyledSection>
    <StyledH2>Skills</StyledH2>
    <StyledUL>
      {stuffIDo.skills.map((skill, i) => (
        <StyledLi key={i}>{skill}</StyledLi>
      ))}
    </StyledUL>
    </StyledSection>
  )
}