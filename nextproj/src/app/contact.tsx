"use client"
import styled from "styled-components"
import Link from "next/link"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #C05CFF;
  transition: color 500ms ease;
`
const StyledLi = styled.li`
  background-color: #2C183C;
  display: block;
  padding: 8px 12px 8px 12px;
  border-radius: 10px;
  text-decoration: none;
  transition: all 500ms ease;
  &:hover {
      background-color: #E60060;
      transform: scale(1.5);
      ${StyledLink}{
        color: white;
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
  list-style: none;
`
const StyledSection = styled.section`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 1.875rem;
  background: #11011B;
  width: auto;
  box-sizing: border-box;
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
        <StyledLi><StyledLink href="https://github.com/brookesy26" target="_blank">GitHub</StyledLink></StyledLi>
        <StyledLi><StyledLink href="https://www.linkedin.com/in/ashley-brookes/" target="_blank">Linkedin</StyledLink></StyledLi>
      </StyledUL>
    </StyledSection>
  )
}

export default Contact