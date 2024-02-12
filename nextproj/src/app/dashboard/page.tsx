"use client"
import styled from "styled-components"

const StyledSection = styled.section`
  color: white;
`

export default function Dash() {
  
  return (
    <StyledSection>
      <h1>login</h1>
      <h2>UserName</h2>
      <input type="text" />
      <h2>Password</h2>
      <input type="text" />
    </StyledSection>
  )
}