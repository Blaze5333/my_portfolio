import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import MacDock from "@/components/mac-dock"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Portfolio of a full stack mobile and web developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          {children}
          <MacDock />
        </ThemeProvider>
      </body>
    </html>
  )
}
