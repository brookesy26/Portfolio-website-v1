"use client"
import styled from "styled-components"

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
const StyledSection = styled.section`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  border-radius: 1.875rem;
  background: #11011B;
  width: auto;
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
const Contact = () => {
  return (
    <StyledSection>
      <StyledH2>Contact</StyledH2>
      <StyledUL>
        <StyledLi>CV</StyledLi>
        <StyledLi>GitHub</StyledLi>
        <StyledLi>Linkedin</StyledLi>
      </StyledUL>
    </StyledSection>
  )
}

export default Contact