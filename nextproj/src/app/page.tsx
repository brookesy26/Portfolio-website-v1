"use client"
import PageSelector from "./pageSelector"
import Heading from "./heading"
import NavBar from "./navigation"
import { useState } from "react"

export default function Home() {
  const [page, setPage] = useState<string>('home')

  // type status = 'home' | 'project' | 'skill'
  

  return ( 
  <>
  <Heading/>
  <PageSelector page={page}/>
  <NavBar setPage={setPage} page={page}/>
  </>
  )
}
