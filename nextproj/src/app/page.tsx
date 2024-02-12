"use client"
import PageSelector from "./pageSelector"
import Heading from "./heading"
import NavBar from "./navigation"
import { useState, useEffect} from "react"
import {AddDoc} from "./firebase/setData"

export default function Home() {
  const [page, setPage] = useState<string>('home')

  return ( 
  <>
  <NavBar setPage={setPage} page={page}/>
  <Heading/>
  <PageSelector page={page}/>
  </>
  )
}
