import styled from "styled-components"
import Link from "next/link"

export const StyledNav = styled.nav`
position: fixed;
display: flex;
justify-content: center;
width: 320px;
border-radius: 30px;
bottom: 30px;
left: 50%;
transform: translate(-50%);
background-color: black;
`
export const StyledLink = styled(Link)`
margin: 10px;
`