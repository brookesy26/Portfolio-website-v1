'use client'
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const FirstLineWrapper = styled.span`
  color: #EBEBEB;
  padding-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;
`
const ColoredWrapper = styled.span`
  color: #FF006B;
`
const SecondLineWrapper = styled.span`
  color: #EBEBEB;
  padding-bottom: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
`
const StyledIcon = styled(Icon)`
  padding-right: 0.4rem;
`
const StyledIconSmallSpace = styled(Icon)`
  padding-right: 0.25rem;
`
const StyledIconTinySpace = styled(Icon)`
  padding-right: 0.05rem;
`
const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  @media(min-width: 800px){
    grid-column: 2/3;
  }
`
const Heading = () => {
  return (
    <Wrapper>
      <FirstLineWrapper><ColoredWrapper>Ashley </ColoredWrapper>Brookes</FirstLineWrapper>
      <SecondLineWrapper>Frontend Developer</SecondLineWrapper>
      <ImgWrapper>
        <StyledIconTinySpace icon="vscode-icons:file-type-html"  width={32}/>
        <StyledIconSmallSpace icon="vscode-icons:file-type-css"  width={32}/>
        <StyledIcon icon="logos:javascript"  width={27.5}/>
        <StyledIcon icon="logos:react"  width={31}/>
        <StyledIcon icon="logos:sass" width={33}/>
      </ImgWrapper>
    </Wrapper>
  )
}

export default Heading