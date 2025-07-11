'use client'
import React from 'react'
import Image from 'next/image'
import { useAppContext } from '../context/AppContext'

// Icon components using emoji or simple shapes
const ProjectIcon = ({ type, darkTheme, gradient, lightGradient }:any) => {
  const iconMap:any = {
    marketplace: '🛒',
    payment: '💳',
    chat: '💬',
    location: '📍',
    bus: '🚌',
    management: '🏢',
    lottery: '🎰',
    blockchain: '⛓️'
  }
  
  return (
    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${darkTheme ? lightGradient: gradient} shadow-lg`}>
      {iconMap[type] || '💻'}
    </div>
  )
}

const ProjectCard = ({ title, description, icon, darkTheme, gradient, lightGradient }:any) => {
  return (
    <div className={`${darkTheme? gradient : lightGradient} rounded-2xl p-4 hover:cursor-pointer`}>
      <div className='flex items-center justify-items-start space-x-4'>
        <ProjectIcon type={icon} darkTheme={darkTheme} gradient={gradient} lightGradient={lightGradient} />
      <p>{title}</p>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default function Projects() {
  const { darkTheme } = useAppContext()
  
  const projects = [
    {
      title: "Marketplace Apps",
      description: "Built two online marketplaces using Node.js and Next.js for the backend, Next.js for the frontend, and MongoDB as the database, deployed on AWS. Integrated Stripe and Razorpay for payments.",
      icon: "marketplace",
      gradient: "bg-gradient-to-br from-emerald-900 to-teal-900",
      lightGradient: "bg-gradient-to-br from-emerald-100 to-teal-100"
    },
    {
      title: "Consolidated Payment Gateway App",
      description: "Developed a payment app that consolidates multiple payment gateways, including Stripe, Adyen, Braintree, and more. Users can complete payments through any gateway using a single payment form. Implemented a logging system for continuous error tracking and monitoring.",
      icon: "payment",
      gradient: "bg-gradient-to-br from-blue-900 to-indigo-900",
      lightGradient: "bg-gradient-to-br from-blue-100 to-indigo-100"
    },
    {
      title: "Chat Applications",
      description: "Built an internal chat application for company communication using Node.js with Socket.io. Migrated from Laravel to Node.js, resulting in a significant improvement in message sending and fetching speed. Also developed a Facebook-style chat app with sub-chats, chat delegation, and robust chat representative allocation.",
      icon: "chat",
      gradient: "bg-gradient-to-br from-purple-900 to-pink-900",
      lightGradient: "bg-gradient-to-br from-purple-100 to-pink-100"
    },
    {
      title: "Location-Based Apps",
      description: "Developed a full-stack application with React and Node.js for real-time tracking of devices, specifically designed for trucks and trailers.",
      icon: "location",
      gradient: "bg-gradient-to-br from-red-900 to-orange-900",
      lightGradient: "bg-gradient-to-br from-red-100 to-orange-100"
    },
    {
      title: "Institution Management System",
      description: "Contributed to a robust Institution Management System. Built and improved features like student admissions, payroll management, vehicle tracking, and role-based access control. Fixed critical bugs, optimized queries, and significantly reduced file generation and download times.",
      icon: "management",
      gradient: "bg-gradient-to-br from-cyan-900 to-blue-900",
      lightGradient: "bg-gradient-to-br from-cyan-100 to-blue-100"
    },
    {
      title: "Lottery Management System",
      description: "Worked on a large-scale lottery management backend using Node.js and MongoDB.",
      icon: "lottery",
      gradient: "bg-gradient-to-br from-yellow-900 to-orange-900",
      lightGradient: "bg-gradient-to-br from-yellow-100 to-orange-100"
    },
    {
      title: "School Bus Tracking- Golang",
      description: "Created a full fledged microservice for tracking schoolbuses for the Institute management system. Partially written in go, partially in Node and express.js.",
      icon: "bus",
      gradient: "bg-gradient-to-br from-violet-900 to-purple-900",
      lightGradient: "bg-gradient-to-br from-violet-100 to-purple-100"
    },
    {
      title: "Blockchain Applications",
      description: "Contributed to and built multiple blockchain-based projects, including block explorers, crypto payment gateways supporting multiple coins and tokens, crypto conversion bridge backends, DAO backends, and more.",
      icon: "blockchain",
      gradient: "bg-gradient-to-br from-violet-900 to-purple-900",
      lightGradient: "bg-gradient-to-br from-violet-100 to-purple-100"
    }
  ]
  
  return (
    <div id="projects" className={`scroll-mt-32 md:scroll-mt-0 flex flex-col min-h-screen font-mono ${darkTheme ? `bg-secondary text-accent` : `bg-white text-blue-950`}`}>
      {/* Header Section */}
      <div className='w-full my-2 md:my-6 px-2 md:px-8 flex flex-col md:flex-row text-center justify-center space-y-2 border-y-2 shadow-emerald-600'>
        <div className='flex flex-col justify-center text-xl items-center p-4 md:p-6 md:w-1/2'>
          <p className='text-justify'>With 3+ years of experience, I have done multiple projects both in frontend and in backend.<br />My projects includes : Online Marketplaces, Chat applications, Management systems, Payment systems, Real time location tracking, Crypto exchange, Block explorers and more.</p>
        </div>
        <div className='px-2 md:w-1/2 flex justify-center items-center p-5'>
          <Image className='rounded-[10px] shadow-sm shadow-emerald-600' src="/gp.webp" alt="Github profile" height={300} width={600} />
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="w-full px-4 md:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              icon={project.icon}
              darkTheme={darkTheme}
              gradient={project.gradient}
              lightGradient={project.lightGradient}
            />
          ))}
        </div>
      </div>
      
      {/* Optional: Add a call-to-action section */}
      <div className="flex flex-col items-center justify-center py-12 space-y-4">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Want to see more?
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-md">
          Check out my GitHub profile for more projects and contributions
        </p>
      <a href="https://github.com/rajarshix1" target="_blank" rel="noopener noreferrer">
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          View GitHub Profile
        </button>
      </a>
        
      </div>
    </div>
  )
}