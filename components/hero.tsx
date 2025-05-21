"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter, ChevronDown, Code, Laptop, Server } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ProfilePhoto1 from "../components/assets/profile_photo1.jpeg"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Initialize window size on client-side only
  useEffect(() => {
    // Set window size initially
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    // Update on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  // Handle card tilt effect
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isHovering) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate tilt based on mouse position relative to card center
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Normalize values between -1 and 1, then scale for desired tilt amount
    const tiltX = -((y - centerY) / centerY) * 10 // Reversed for natural tilt
    const tiltY = ((x - centerX) / centerX) * 10

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleCardMouseEnter = () => {
    setIsHovering(true)
  }

  const handleCardMouseLeave = () => {
    setIsHovering(false)
    // Reset tilt when mouse leaves
    setTilt({ x: 0, y: 0 })
  }

  const skills = [
    { name: "React", icon: <Code className="h-4 w-4" /> },
    { name: "Next.js", icon: <Laptop className="h-4 w-4" /> },
    { name: "Node.js", icon: <Server className="h-4 w-4" /> },
    { name: "TypeScript", icon: <Code className="h-4 w-4" /> },
    { name: "React Native", icon: <Laptop className="h-4 w-4" /> },
  ]

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* 3D Animated Background */}
      <div className="absolute inset-0 w-full h-full bg-black">
        {/* Grid pattern with animated gradient */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl animate-pulse" />
          </div>
        </div>

        {/* Spotlight effect that follows cursor */}
        <div
          className="absolute inset-0 w-full h-full opacity-50"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15), transparent 40%)`,
          }}
        />

        {/* Animated borders */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
      </div>

      {/* Floating particles - Conditionally render only on client side */}
      {windowSize.width > 0 && (
        <div className="absolute inset-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
                opacity: Math.random() * 0.5 + 0.3,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, Math.random() * -50, null],
                opacity: [null, Math.random() * 0.8 + 0.2, null],
              }}
              transition={{
                duration: Math.random() * 5 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Main content */}
      <motion.div
        ref={containerRef}
        style={{ y, opacity }}
        className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-left max-w-2xl order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white mb-6">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center"
                >
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                  Full Stack Developer
                </motion.span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="block text-white">Crafting Digital</span>
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[size:200%]"
              >
                Experiences
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              I build exceptional and accessible digital experiences for the web and mobile platforms, focusing on both
              performance and design.
            </motion.p>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-sm text-gray-200"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </span>
                <span className="absolute inset-0 translate-y-[100%] bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-white/20 text-white hover:border-white/40"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 translate-y-[100%] bg-white/5 transition-transform duration-300 group-hover:translate-y-0" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-6"
            >
              <Link href="https://github.com/Blaze5333" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/mustafa-chaiwala-7a3890226/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://x.com/MustafaCha47413" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </motion.div>
          </div>

          {/* Right column - 3D Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative mx-auto max-w-md w-full h-[400px] md:h-[500px] perspective-1000 order-1 lg:order-2"
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="relative w-full h-full preserve-3d transform-style-3d">
              {/* 3D Floating Card */}
              <motion.div
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.5,
                }}
                className="absolute inset-0 w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Card with glowing border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse blur-md opacity-70" />
                <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/20 bg-black/50 backdrop-blur-sm shadow-2xl">
                  {/* Card content */}
                  <div className="relative h-full w-full p-6 flex flex-col">
                    {/* Profile image */}
                    <div className="relative mx-auto mb-6" style={{ transform: "translateZ(20px)" }}>
                      <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
                        <div className="h-full w-full rounded-full overflow-hidden border-2 border-black">
                          <Image
                            src={ProfilePhoto1}
                            alt="Profile"
                            width={128}
                            height={128}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-black rounded-full p-1 border border-white/20">
                        <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-xs font-bold text-white">✓</span>
                        </div>
                      </div>
                    </div>

                    {/* Card text */}
                    <div className="text-center mb-4 md:mb-6" style={{ transform: "translateZ(15px)" }}>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">Mustafa Chaiwala</h3>
                      <p className="text-xs md:text-sm text-gray-300">Full Stack Developer</p>
                    </div>

                    {/* Stats */}
                    <div
                      className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      <div className="text-center">
                        <div className="text-base md:text-xl font-bold text-white">3+</div>
                        <div className="text-[10px] md:text-xs text-gray-400">Years Exp.</div>
                      </div>
                      <div className="text-center">
                        <div className="text-base md:text-xl font-bold text-white">10+</div>
                        <div className="text-[10px] md:text-xs text-gray-400">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-base md:text-xl font-bold text-white">5+</div>
                        <div className="text-[10px] md:text-xs text-gray-400">Clients</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-auto" style={{ transform: "translateZ(5px)" }}>
                      <div className="text-[10px] md:text-xs text-gray-400 mb-2">Tech Stack</div>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {["React Native","React", "Next.js", "Node", "TypeScript", "MongoDB",].map((tech) => (
                          <div
                            key={tech}
                            className="px-1.5 py-0.5 md:px-2 md:py-1 bg-white/10 rounded-md text-[8px] md:text-xs text-white border border-white/5"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 md:-top-6 md:-right-6 h-8 w-8 md:h-12 md:w-12 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-500/30 flex items-center justify-center"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <Code className="h-4 w-4 md:h-6 md:w-6 text-purple-500" />
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 h-8 w-8 md:h-12 md:w-12 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-500/30 flex items-center justify-center"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <Laptop className="h-4 w-4 md:h-6 md:w-6 text-blue-500" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] pointer-events-none">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_70%)]" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="text-sm text-gray-400 mb-2">Scroll Down</div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="flex items-center justify-center h-8 w-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
