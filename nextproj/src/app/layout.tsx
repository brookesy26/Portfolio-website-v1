import type { Metadata } from 'next'
import { Roboto  } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry'
import "./global.css"
import BodyStyled from './bodyComponent'

const roboto = Roboto({
  weight: ['400','500','700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal Web Development Portfolio',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={roboto.className}>  
      <BodyStyled>
        <StyledComponentsRegistry>
          {children}
          </StyledComponentsRegistry>
      </BodyStyled>
    </html>
  )
}
