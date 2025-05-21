"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Code, Laptop, Smartphone, Globe } from "lucide-react"
import ProfilePhoto2 from "../components/assets/profile_photo2.jpeg"
export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "React Native",
    "TailwindCSS",
    "MongoDB",
    "Rust",
    "Solana",
    "Web3.js"
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with animated border */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 blur-md opacity-70 animate-pulse" />
              <div className="relative rounded-xl overflow-hidden border border-white/20">
                <Image
                  src={ProfilePhoto2}
                  alt="Developer"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-black/80 backdrop-blur-md rounded-lg p-3 border border-white/10 shadow-xl">
                <Code className="h-8 w-8 text-purple-500" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-md rounded-lg p-3 border border-white/10 shadow-xl">
                <Smartphone className="h-8 w-8 text-blue-500" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Full Stack Developer with a passion for creating seamless digital experiences
            </h3>

            <p className="text-gray-300">
              I'm a passionate Full Stack Developer with expertise in building responsive web applications and mobile
              apps. With a strong foundation in both frontend and backend technologies, I create scalable and efficient
              solutions that deliver exceptional user experiences.
            </p>

            <p className="text-gray-300">
              My journey in software development began over 5 years ago, and since then, I've worked on a diverse range
              of projects from e-commerce platforms to complex enterprise applications. I'm constantly learning and
              adapting to new technologies to stay at the forefront of the industry.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Laptop className="h-5 w-5 text-purple-500" />
                <span className="text-gray-200">Mobile Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5 text-purple-500" />
                <span className="text-gray-200">Web Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-purple-500" />
                <span className="text-gray-200">Clean Code</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-purple-500" />
                <span className="text-gray-200">Responsive Design</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div ref={ref} className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-10"
          >
            My Skills
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
