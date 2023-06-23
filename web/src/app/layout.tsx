import './globals.css'
import { Inter } from 'next/font/google'
import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Space Veículos',
  description: 'Um espaço recheado de ótimas opções!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  )
}
