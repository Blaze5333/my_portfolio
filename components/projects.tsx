"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Github, ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react"
import Link from "next/link"
import StockOutScreen1 from "../components/assets/stockout/screen1.png"
import StockOutScreen2 from "../components/assets/stockout/screen2.png"
import StockOutScreen3 from "../components/assets/stockout/screen3.png"
import StockOutScreen4 from "../components/assets/stockout/screen4.png"
import SynapsisUI from "../components/assets/synapsisui/screen1.png"
import CarbonDex from "../components/assets/carbondex/screen1.png"
import Strike from "../components/assets/strike/screen1.png"
import DeDocScreen1 from "../components/assets/dedoc/screen1.jpeg"
import DeDocScreen2 from "../components/assets/dedoc/screen3.jpeg"
import DeDocScreen3 from "../components/assets/dedoc/screen4.jpeg"
import DeDocScreen4 from "../components/assets/dedoc/screen5.jpeg"
import DeDocScreen5 from "../components/assets/dedoc/screen6.jpeg"
import SynapsisUIApp1 from "../components/assets/synapsisuiApp/screen1.png"
import SynapsisUIApp2 from "../components/assets/synapsisuiApp/screen2.png"
import SynapsisUIApp3 from "../components/assets/synapsisuiApp/screen3.png"
import SynapsisUIApp4 from "../components/assets/synapsisuiApp/screen4.png"
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [activeProject, setActiveProject] = useState(0)
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web", label: "Web Apps" },
  ]

  const projects = [
   {
      id: 1,
      title: "StockOut App",
      description:
        "India's premier B2B deadstock marketplace connecting sellers with excess inventory to potential buyers. StockOut helps businesses convert unsold stock into revenue while offering buyers quality products at discounted prices.",
      image: StockOutScreen1,
      screenshots: [
        StockOutScreen1,
        StockOutScreen2,
        StockOutScreen3,
        StockOutScreen4,
      ],// Add video URL here if available
      category: "mobile",
      tags: ["React Native", "Firebase", "Redux", "B2B Marketplace","RazorPay","GoogleOAuth"],
      appStoreUrl: null,
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.stockoutindia.official&hl=en",
      features: [
        "Deadstock listing & discovery",
        "B2B marketplace platform",
        "Seller inventory management",
        "Buyer product discovery",
        "Pan-India marketplace",
      ],
    },
    {
      id: 2,
      title: "DeDocs App",
      description:
        "A blockchain-based document signing platform where users can upload consent forms and partnership deeds, invite signers, and securely store all signatures and documents on the Solana blockchain for enhanced security and verification.",
      image: DeDocScreen1,
      screenshots: [
        DeDocScreen1,
        DeDocScreen2,
        DeDocScreen3,
        DeDocScreen4,
        DeDocScreen5,
      ],// Add video URL here if available
      category: "mobile",
      tags: ["React Native", "Solana", "Blockchain", "Digital Signatures", "Smart Contracts", "Web3"],
      appStoreUrl: null,
      playStoreUrl: "#",
      features: [
        "Document upload & management",
        "Digital signing with verification",
        "Blockchain-backed security",
        "Partnership deed processing",
        "Multi-party signing workflows",
      ],
    },
    {
      id: 3,
      title: "SynapsisUI App",
      description:
        "A mobile application showcasing the SynapsisUI component library, designed to help developers create beautiful and functional user interfaces with ease. The app includes a variety of components, styles, and design patterns.",
      image: SynapsisUI,
      screenshots: [
        SynapsisUIApp1,
        SynapsisUIApp2,
        SynapsisUIApp3,
        SynapsisUIApp4,
      ],// Add video URL here if available
      category: "mobile",
      tags: ["React Native", "UI Kit","Component Library", ],
      appStoreUrl: null,
      playStoreUrl: "#",
      features: [
        "Document upload & management",
        "Digital signing with verification",
        "Blockchain-backed security",
        "Partnership deed processing",
        "Multi-party signing workflows",
      ],
    },
    {
      id: 8,
      title: "Strike",
      description: "STRIKE is a next-generation fantasy cricket platform built natively on Solana that transforms cricket fandom by combining fantasy sports, real-time match tracking, and blockchain technology.",
      image: Strike,
      category: "web",
      tags: ["TailwindCSS", "NEXT.js", "Supabase", "Solana","web3.js","ZKSync"],
      demoUrl: "https://strike-phi.vercel.app/",
      githubUrl: "#",
      features: [
        "Component library",
        "Dark/light themes",
        "Responsive layouts",
        "Data visualization",
        "Accessibility compliant",
      ],
    },
    {
      id: 6,
      title: "SynapsisUI",
      description: "A comprehensive UI kit for building modern mobile applications. It includes a wide range of components, styles, and design patterns to help developers create beautiful and functional user interfaces.",
      image: SynapsisUI,
      category: "web",
      tags: ["Figma", "TailwindCSS", "React", "Firebase", "UI Kit"],
      demoUrl: "https://www.synapsisui.com",
      githubUrl: "#",
      features: [
        "Component library",
        "Dark/light themes",
        "Responsive layouts",
        "Data visualization",
        "Accessibility compliant",
      ],
    },
     {
      id: 7,
      title: "CarbonDex",
      description: "A decentralized exchange (DEX) for trading carbon credits. It allows users to buy, sell, and trade carbon credits in a secure and transparent manner.",
      image: CarbonDex,
      category: "web",
      tags: ["TailwindCSS", "React", "Firebase", "Solidity","Web3","WalletConnect"],
      demoUrl: "https://carbon-dex.vercel.app/",
      githubUrl: "#",
      features: [
        "Component library",
        "Dark/light themes",
        "Responsive layouts",
        "Data visualization",
        "Accessibility compliant",
      ],
    },
    
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const mobileProjects = filteredProjects.filter((project) => project.category === "mobile")
  const webProjects = filteredProjects.filter((project) => project.category !== "mobile")

  const nextProject = () => {
    if (activeProject < mobileProjects.length - 1) {
      setActiveProject(activeProject + 1)
    } else {
      setActiveProject(0)
    }
    setShowVideo(false)
  }

  const prevProject = () => {
    if (activeProject > 0) {
      setActiveProject(activeProject - 1)
    } else {
      setActiveProject(mobileProjects.length - 1)
    }
    setShowVideo(false)
  }
 

  useEffect(() => {
    // Reset active project when filter changes
    setActiveProject(0)
    setActiveScreenshot(0)
    setShowVideo(false)
  }, [activeFilter])
  
  // Reset active screenshot when active project changes
  useEffect(() => {
    setActiveScreenshot(0)
  }, [activeProject])

  const toggleVideo = () => {
    setShowVideo(!showVideo)
    if (!showVideo && videoRef.current) {
      videoRef.current.play()
    }
  }
  const handleFilterClick = (filterId) => {
    console.log("Filter clicked:", filterId);
    setActiveFilter(filterId);
  }
  const handleScreenshotClick = (index) => {
    console.log("Screenshot clicked, setting activeScreenshot to:", index);
    setShowVideo(false);
    setActiveScreenshot(index);
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
          >
            My Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Explore my recent projects showcasing my skills in mobile app development, web development, and UI/UX
            design.
          </motion.p>
        </div>

        {/* Filters */}
         <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>


        {/* Mobile Projects Showcase */}
        {mobileProjects.length > 0 && (
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Phone Display - Left Side */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative">
                  {/* Phone Frame */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-[270px] h-[550px] bg-black rounded-[36px] p-3 shadow-xl border border-gray-800"
                  >
                    {/* Inner bezel */}
                    <div className="absolute inset-0 rounded-[32px] border-8 border-black pointer-events-none z-20"></div>

                    {/* Screen */}
                    <div className="relative h-full w-full rounded-[28px] overflow-hidden bg-gray-100">
                      <AnimatePresence mode="wait">
                        {mobileProjects.map((project, index) => (

                          <motion.div
                            key={`screen-${project.id}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: index === activeProject ? 1 : 0 }}
                            exit={{ opacity: 0 }}
                            className={cn("absolute inset-0", index === activeProject ? "z-10" : "z-0")}
                          >
                           
                             <Image
                                src={
                                  project.screenshots && project.screenshots.length > 0
                                    ? project.screenshots[activeScreenshot]
                                    : project.image || "/placeholder.svg"
                                }
                                alt={project.title}
                                width={400}
                                height={800}
                                className="h-full w-full object-cover"
                              />
                           
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      {/* Dynamic Island / Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[32px] bg-black rounded-b-[14px] z-30"></div>

                      {/* Home Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[100px] h-[4px] bg-black rounded-full z-30"></div>
                    </div>
                  </motion.div>

                  {/* Power Button */}
                  <div className="absolute top-[100px] -right-[4px] w-[4px] h-[60px] bg-gray-700 rounded-r-sm"></div>

                  {/* Volume Buttons */}
                  <div className="absolute top-[90px] -left-[4px] w-[4px] h-[30px] bg-gray-700 rounded-l-sm"></div>
                  <div className="absolute top-[130px] -left-[4px] w-[4px] h-[60px] bg-gray-700 rounded-l-sm"></div>

                  {/* Navigation Controls */}
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                    <button
                      onClick={prevProject}
                      className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      aria-label="Previous project"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    {mobileProjects[activeProject]?.videoUrl && (
                      <button
                        onClick={toggleVideo}
                        className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white"
                        aria-label={showVideo ? "Show screenshot" : "Play video"}
                      >
                        <Play className="h-5 w-5" />
                      </button>
                    )}

                    <button
                      onClick={nextProject}
                      className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      aria-label="Next project"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Details - Right Side */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  {mobileProjects.map(
                    (project, index) =>
                      index === activeProject && (
                        <motion.div
                          key={`details-${project.id}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white mb-4">
                            Mobile App
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                          <p className="text-gray-300 mb-6">{project.description}</p>

                          {/* Features */}
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {project.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                              <span key={tag} className="bg-white/10 text-xs rounded-full px-3 py-1 text-gray-200">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* App store badges */}
                          <div className="flex flex-wrap gap-4 mb-8">
                            {project.appStoreUrl && (
                              <Link href={project.appStoreUrl} className="block">
                                <div className="h-10 w-32 bg-black rounded-lg flex items-center justify-center gap-2 border border-white/10 hover:border-white/30 transition-colors">
                                  <div className="text-white">
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 leading-tight">Download on the</span>
                                    <span className="text-sm font-semibold text-white leading-tight">App Store</span>
                                  </div>
                                </div>
                              </Link>
                            )}

                            {project.playStoreUrl && (
                              <Link href={project.playStoreUrl} className="block">
                                <div className="h-10 w-32 bg-black rounded-lg flex items-center justify-center gap-2 border border-white/10 hover:border-white/30 transition-colors">
                                  <div className="text-white">
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.536-3.536l-12.473 7.227 10.918-10.918 1.555 3.691zm-14.962-7.85l12.54 7.227-2.325 2.325L3.073.321z" />
                                    </svg>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 leading-tight">GET IT ON</span>
                                    <span className="text-sm font-semibold text-white leading-tight">Google Play</span>
                                  </div>
                                </div>
                              </Link>
                            )}
                          </div>

                          {/* Action buttons */}
                         

                          {/* Screenshot thumbnails */}
                          {project.screenshots && project.screenshots.length > 1 && (
                            <div className="mt-8">
                              <h4 className="text-sm font-medium text-gray-400 mb-3">Screenshots</h4>
                              <div className="flex gap-3 overflow-x-auto pb-2 max-w-full">
                                {project.screenshots.map((screenshot, i) => (
                                  <button
                                    key={i}
                                    onClick={() => handleScreenshotClick(i)}
                                    className={`flex-shrink-0 w-16 h-32 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer pointer-events-auto ${
                                      i === activeScreenshot
                                        ? "border-2 border-purple-500 scale-105"
                                        : "border-2 border-transparent scale-100"
                                    }`}
                                    aria-label={`View screenshot ${i + 1}`}
                                  >
                                    <Image
                                      src={screenshot || "/placeholder.svg"}
                                      alt={`Screenshot ${i + 1}`}
                                      width={100}
                                      height={200}
                                      className="w-full h-full object-cover pointer-events-none"
                                    />
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      ),
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Project indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {mobileProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveProject(index)
                    setShowVideo(false)
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    index === activeProject ? "w-8 bg-purple-500" : "w-2 bg-white/20",
                  )}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Web/UI Projects */}
        {webProjects.length > 0 && (
          <>
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {activeFilter === "all" ? "Web & UI Projects" : activeFilter === "web" ? "Web Projects" : "UI Projects"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col"
                >
                  {/* Project Image with Browser Frame */}
                  <div className="relative">
                    <div className="h-8 bg-gray-900 rounded-t-xl flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="mx-auto text-xs text-gray-400">project-preview.com</div>
                    </div>
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-12 left-3 bg-black/60 backdrop-blur-md text-xs font-medium px-2 py-1 rounded-full text-white border border-white/10">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-white/10 text-xs rounded-full px-2 py-1 text-gray-200">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <Link
                        href={project.demoUrl}
                        className="text-sm font-medium text-purple-400 hover:text-purple-300 flex items-center transition-colors"
                      >
                        View Project
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>

                      <Link href={project.githubUrl} className="text-gray-400 hover:text-white transition-colors">
                        <Github className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* View All Projects Button */}
        {activeFilter !== "all" && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setActiveFilter("all")}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
