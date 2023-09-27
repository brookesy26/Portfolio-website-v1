"use client"

import styled from "styled-components"

const Smain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media(min-width: 800px){
    grid-column: 2/3;
    width: fit-content;
  }
`

export default function MainWrapper({children,}: {children: React.ReactNode}){
  return(
    <Smain>{children}</Smain>
  )
}