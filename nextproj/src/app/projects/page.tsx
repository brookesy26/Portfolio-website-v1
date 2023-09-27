"use client"

import jsonData from "./projects.json"
import styled from "styled-components"

const StyledSection = styled.section`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  border-radius: 1.875rem;
  background: #11011B;
  width: fit-content;
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
const StyledLi = styled.li`
  background-color: #2C183C;
  display: inline-block;
  padding: 8px 12px 8px 12px;
  border-radius: 10px;
  color: #B947FF;
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
`
export default function Projects() {
  return (
    jsonData.map((project, i) => (
      <StyledSection key={`Section - ${i}`}>
        <StyledH2 key={`h2 - ${i}`}>{project.title}</StyledH2>
        <StyledText key={`text - ${i}`}>{project.text}</StyledText>
        <StyledUL key={`UL - ${i}`}>
          <StyledText key={`features-text - ${i}`}>Features:</StyledText>
          {project.features.map((feature, ii) => (
            <StyledLi key={`feature - ${ii}`}>{feature}</StyledLi>
          ))}
        </StyledUL>
        <StyledText key={`Href-text - ${i}`}>Test it out <a href={project.URL}>here</a></StyledText>
      </StyledSection>
    ))
    )
   
}
