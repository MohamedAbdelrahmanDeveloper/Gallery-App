import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderApp from '@/components/header/HeaderApp'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gallery',
  description: "desc - by Mohamed Abdelrahman",
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "My Website",
    description: "My Website Description",
    siteName: "My Website",
    images: [{
      url: "https://example.com/og.png",
    }],
  },
  twitter: { description :"",card: "summary_large_image", site: "@site", creator: "@creator", "images": "https://example.com/og.png" }
}

export const MetaApp: any = metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="en" >
        <body className={inter.className + ' min-h-screen bg-base-200'}>
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <HeaderApp />
                  {children}
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                  <p>Copyright © {new Date().getFullYear()} - <a target='_blank' href='https://github.com/m7md0a' className='link link-hover'>Mohamed</a></p>
                </aside>
              </footer>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
                  {/* Sidebar content here */}
                  <div className="text-xl ps-3.5 font-medium pb-5">Start-next</div>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/gallery">Gallery</Link></li>
                </ul>
            </div>
          </div>
              
        </body>
      </html>
  )
}
