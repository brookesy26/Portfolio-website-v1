"use client"

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
  height: fit-content;
  position: relative;
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
const Sspan = styled.span`
  color: #634AFF;
`

const Background = () => {
  return (
    <StyledSection>
      <StyledH2>Background</StyledH2>
      <StyledText><Sspan>Hi,</Sspan> recently I left a career as an ICT technician to follow my passion as a frontend developer. </StyledText>
      <StyledText>Currently studying a Web Design and Development degree set to graduate early 2024.</StyledText>
      <StyledText>Please browse my portfolio and feel free to get in touch.</StyledText>
    </StyledSection>
  )
}

export default Background