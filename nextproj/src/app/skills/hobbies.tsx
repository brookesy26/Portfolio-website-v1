"use client"
import stuffIDo from "./skills.json"
import {StyledLi, StyledUL, StyledSection, StyledH2} from "./hobbies.styles"

export default function Hobbies() {
  return (
    <StyledSection>
    <StyledH2>Hobbies & Interests</StyledH2>
    <StyledUL>
      {stuffIDo.interests.map((interest, i) => (
        <StyledLi key={i}>{interest}</StyledLi>
      ))}
    </StyledUL>
    </StyledSection>
  )
}