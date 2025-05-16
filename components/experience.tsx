"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Calendar, Building2, GraduationCap } from "lucide-react"

export default function Experience() {
  const [activeTab, setActiveTab] = useState("work")

  const workExperience = [
    {
      title: "Mobile App Developer",
      company: "InternLink",
      period: "2024 - Present",
      description:
        "Developing and maintaining mobile applications using React Native. Collaborating with cross-functional teams to define, design, and ship new features.",
      skills: ["React Native", "JavaScript", "TypeScript", "Firebase", "Git"],
    },
    {
      title: "Mobile App Developer(Freelance)",
      company: "DotCom Solutions",
      period: "2024 - Present",
      description:
        "Working on various freelance projects, focusing on mobile app development using React Native. Responsible for end-to-end development, from concept to deployment.",
      skills: ["React Native", "JavaScript", "TypeScript", "Firebase", "Git"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Heritage Institute of Technology",
      period: "2022-2026",
      description: "Specialized in Software Engineering with focus on web technologies and distributed systems.",
    },
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md bg-white/5 backdrop-blur-sm p-1">
            <button
              onClick={() => setActiveTab("work")}
              className={cn(
                "flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeTab === "work"
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10",
              )}
            >
              <Building2 className="h-4 w-4" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={cn(
                "flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeTab === "education"
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10",
              )}
            >
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Work Experience */}
        {activeTab === "work" && (
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l border-white/20">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-[41px] h-10 w-10 rounded-full bg-black border-4 border-purple-500 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-purple-500" />
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <span className="text-sm text-gray-400">{job.period}</span>
                    </div>
                    <div className="text-purple-400 mb-4">{job.company}</div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span key={skill} className="bg-white/10 text-xs rounded-full px-3 py-1 text-gray-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {activeTab === "education" && (
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l border-white/20">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-[41px] h-10 w-10 rounded-full bg-black border-4 border-blue-500 flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <span className="text-sm text-gray-400">{edu.period}</span>
                    </div>
                    <div className="text-blue-400 mb-4">{edu.institution}</div>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
