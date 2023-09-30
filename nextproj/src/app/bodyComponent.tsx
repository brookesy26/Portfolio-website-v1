"use client"

import styled from "styled-components"

const StyledBody = styled.body`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: auto 700px auto;
  }
`

export default function BodyStyled({children,}: {children: React.ReactNode}){
return(
  <StyledBody>{children}</StyledBody>
)
}