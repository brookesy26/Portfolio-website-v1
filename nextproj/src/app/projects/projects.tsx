"use client"

import jsonData from "./projects.json"
import styled from "styled-components"
import Link from "next/link"

const StyledLink = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;
    @media(min-width: 800px){
    grid-column: 2/3;
    width: fit-content;
  }
`

const StyledH2 = styled.h2`
  color: #D7D7D7;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-block-start: 0;
  margin-block-end: 0;
`
const StyledText = styled.p`
  color: #929292;
  line-height: 1.625rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
`
const FeaturesText = styled(StyledText)`
  width: 100%;
`
const StyledLi = styled.li`
  background-color: #2C183C;
  display: inline-block;
  padding: 8px 12px 8px 12px;
  border-radius: 10px;
  color: #B947FF;
  box-sizing: border-box;
  background-position: right bottom;
`
const AnimatedLi = styled(StyledLi)``

const StyledSection = styled.section`
  border: 0.2rem solid transparent;
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  border-radius: 1.875rem;
  background: #11011B;
  width: fit-content;
  position: relative;
  box-sizing: border-box;
  &:hover {
    box-shadow: #00000095 0 5px 5px 5px;
    transition: all 0.5s ease;
    ${AnimatedLi}{
    color: white;
    transition: all 1s ease;
    background: linear-gradient(to right, #FF006B 50%, #2C183C 50%);
    background-size: 200% 100%;
    background-position: left bottom;
  }
}
`

const StyledUL = styled.ul`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  box-sizing: border-box;
`
const TechLI = styled(StyledLi)`
  font-size: 0.8rem;
`
const TechUL = styled(StyledUL)`
  justify-content: flex-end;
`

export default function Projects() {
  return (
    jsonData.map((project, i) => (
      <StyledLink href={project.URL} target="_blank" key={`project.URL ${i}`}>
      <StyledSection key={`Section - ${i}`}>
        <StyledH2 key={`h2 - ${i}`}>{project.title}</StyledH2>
        <StyledText key={`text - ${i}`}>{project.text}</StyledText>
        <StyledUL key={`UL - ${i}`}>
          <FeaturesText key={`features-text - ${i}`}>Features:</FeaturesText>
          {project.features.map((feature, ii) => (
            <AnimatedLi key={`feature - ${ii}`}>{feature}</AnimatedLi>
          ))}
        </StyledUL>
        <TechUL key={`Ul - ${i}${i}`}>
        {project.technology.map((tech, jj) => (
          <TechLI key={`tech - ${jj}`}>{tech}</TechLI>
        ))}
        </TechUL>
      </StyledSection>
      </StyledLink>
    ))
    )
   
}
