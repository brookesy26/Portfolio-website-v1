
import Background from "./background"
import Contact from "./contact"
import MainWrapper from "./mainComponent"
import NavBar from "./navigation"
export default function Home() {
  return ( 
  <>
  <MainWrapper>
    <Background />
    <Contact />
  </MainWrapper>
  <NavBar/>
  </>
  )
}
