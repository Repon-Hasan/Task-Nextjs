import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Shop - Your Favorite E-commerce Store',
  description: 'Discover amazing products at great prices',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}