"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Code, Smartphone, Palette, Database, Server, Layers, Wrench, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"

type Service = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  color: string
}

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null)

  const services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies to deliver exceptional user experiences.",
      icon: <Code className="h-6 w-6" />,
      features: [
        "Responsive design for all devices",
        "Progressive Web Apps (PWA)",
        "Performance optimization",
        "SEO-friendly architecture",
        "Accessibility compliance",
      ],
      color: "from-purple-500 to-blue-500",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide seamless experiences across devices.",
      icon: <Smartphone className="h-6 w-6" />,
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "Offline functionality",
        "Push notifications",
        "App store optimization",
      ],
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const handleServiceClick = (id: number) => {
    setActiveService(activeService === id ? null : id)
  }

  return (
    <section id="services" className="py-20 relative overflow-hidden">
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
            Services Offered
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
            Specialized expertise to bring your digital ideas to life with cutting-edge technologies and best practices.
          </motion.p>
        </div>

        {/* Services Grid - Desktop View */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Hover background effect */}
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to bottom right, ${service.color.split(" ")[0].replace("from-", "")}, ${service.color.split(" ")[1].replace("to-", "")})`,
                }}
              />

              <div className="p-6">
                {/* Icon with gradient background */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>

                {/* Features list */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-400">
                      <ChevronRight className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Request Service
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Accordion - Mobile View */}
        <div className="lg:hidden space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
            >
              <button
                onClick={() => handleServiceClick(service.id)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-3 flex-shrink-0`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                </div>
                <ChevronRight
                  className={cn(
                    "h-5 w-5 text-gray-400 transition-transform duration-200",
                    activeService === service.id && "rotate-90",
                  )}
                />
              </button>

              {/* Expandable content */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  activeService === service.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="p-4 pt-0 border-t border-white/10">
                  <p className="text-gray-300 mb-4">{service.description}</p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-400">
                        <ChevronRight className="h-4 w-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Request Service
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Floating Element */}
        <div className="relative mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 relative overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute -inset-[100px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl opacity-50" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white text-center mb-4">Need a custom solution?</h3>
              <p className="text-gray-300 text-center mb-6">
                Let's discuss your project requirements and create a tailored solution that perfectly fits your needs.
              </p>
              <div className="flex justify-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:from-purple-600 hover:to-blue-600 transition-colors"
                >
                  Get in Touch
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 h-12 w-12 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-500/30 flex items-center justify-center"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Code className="h-6 w-6 text-purple-500" />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 h-12 w-12 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-500/30 flex items-center justify-center"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Smartphone className="h-6 w-6 text-blue-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
