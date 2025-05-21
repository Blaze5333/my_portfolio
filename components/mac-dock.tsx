"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Home, User, Briefcase, Code, Mail, Github, Linkedin, Twitter, Menu } from "lucide-react"

type DockItemProps = {
  icon: React.ReactNode
  label: string
  href: string
  isActive?: boolean
}

const DockItem = ({ icon, label, href, isActive }: DockItemProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className="group relative flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ y: 0, scale: 1 }}
        animate={{
          y: isHovered ? -10 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg",
          isActive && "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/50",
          "transition-colors duration-200",
        )}
      >
        <div
          className={cn(
            "text-gray-300 transition-colors duration-200",
            isHovered && "text-white",
            isActive && "text-purple-400",
          )}
        >
          {icon}
        </div>

        {/* Dot indicator for active item */}
        {isActive && <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-purple-500"></div>}
      </motion.div>

      {/* Label tooltip */}
      <div
        className={cn(
          "absolute -top-10 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-white text-xs font-medium",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
          "pointer-events-none",
        )}
      >
        {label}
      </div>
    </Link>
  )
}

export default function MacDock() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { icon: <Home className="h-6 w-6" />, label: "Home", href: "#home" },
    { icon: <User className="h-6 w-6" />, label: "About", href: "#about" },
    { icon: <Briefcase className="h-6 w-6" />, label: "Experience", href: "#experience" },
    { icon: <Code className="h-6 w-6" />, label: "Projects", href: "#projects" },
    { icon: <Mail className="h-6 w-6" />, label: "Contact", href: "#contact" },
  ]

  const socialItems = [
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/Blaze5333" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/mustafa-chaiwala-7a3890226/" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "https://x.com/MustafaCha47413" },
  ]

  return (
    <>
      {/* Desktop Dock */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="relative">
          {/* Dock Background */}
          <div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl"></div>

          {/* Dock Content */}
          <div className="relative px-4 py-3 flex items-center space-x-3">
            {navItems.map((item) => (
              <DockItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                isActive={activeSection === item.href.replace("#", "")}
              />
            ))}

            {/* Separator */}
            <div className="h-10 w-px bg-white/10 mx-2"></div>

            {/* Social Icons */}
            {socialItems.map((item,index) => (
              <DockItem key={index} icon={item.icon} label={item.label} href={item.href} />
            ))}
          </div>

          {/* Reflection */}
          <div className="absolute left-0 right-0 bottom-0 h-4 bg-gradient-to-b from-white/5 to-transparent rounded-b-2xl transform scale-y-[-0.3] scale-x-[0.95] opacity-50 blur-sm"></div>
        </div>
      </div>

      {/* Mobile Floating Menu Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white shadow-lg"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute bottom-16 right-0 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl overflow-hidden">
            <div className="py-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 hover:bg-white/10",
                    activeSection === item.href.replace("#", "") && "bg-white/5 text-purple-400",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div>{item.icon}</div>
                  <span className="text-sm font-medium text-white">{item.label}</span>
                </Link>
              ))}

              <div className="h-px bg-white/10 my-2"></div>

              <div className="flex justify-around px-4 py-3">
                {socialItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-gray-300 hover:text-white">
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
