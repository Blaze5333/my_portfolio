import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import MacDock from "@/components/mac-dock"
import { icons } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mustafa Chaiwala | Full Stack Developer",
  description:
    "Portfolio of Mustafa Chaiwala - Full Stack Web & Mobile Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  suppressHydrationWarning>
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
