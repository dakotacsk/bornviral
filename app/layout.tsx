import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'

export const metadata: Metadata = {
  title: 'Born Viral - Scale Your Brand Through High-Impact Short-Form Content',
  description: 'We match you with top creators who deliver 75M+ organic views across TikTok & Instagram. Gen Z creators who understand social algorithms and viral success.',
  keywords: 'short-form content, TikTok marketing, Instagram Reels, viral content, brand growth, social media marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CustomCursor />
        <div className="noise" />
        <div className="scroll-indicator" />
        {children}
      </body>
    </html>
  )
}