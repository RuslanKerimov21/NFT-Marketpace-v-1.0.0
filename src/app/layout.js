import './index.css';
import { Footer, Header } from '@/components';
export const metadata = {
  title: 'NFT Marketplace',
  description: 'World Wide Web Marketplaced',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
