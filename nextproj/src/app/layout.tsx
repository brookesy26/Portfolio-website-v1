'use client'

import type { Metadata } from 'next'
import Heading from './heading'
import NavBar from './navigation'
import StyledComponentsRegistry from './lib/registry'
import "./global.css"
import { Roboto  } from 'next/font/google'
import {StyledBody} from "./body.styled"
const roboto = Roboto({
  weight: ['400','500','700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Personal Web Development Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>  
        <StyledComponentsRegistry>
          <StyledBody>
            <Heading />
            {children}
            <NavBar />
          </StyledBody>
        </StyledComponentsRegistry>
    </html>
  )
}
