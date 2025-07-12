'use client'
import React from 'react'
import { useAppContext } from '../context/AppContext'
import MediaCard from './MediaCard'

export default function Skills() {
  const { darkTheme } = useAppContext()
  return (
    <div id="skills" className={`scroll-mt-12 md:scroll-mt-0 flex flex-col min-h-screen font-mono ${darkTheme ? ` text-accent` : ` text-blue-950`}`}>
      <div className='w-full my-2 md:my-6 px-1 md:px-6 flex flex-col md:flex-row text-center justify-center space-y-2'>
        <div className={`p-2 md:p-6 ${darkTheme? 'text-white': 'text-slate-900'} space-y-3`}>
          <p className='text-2xl font-bold '>About me:</p>
          <p className="text-justify font-semibold">MERN Stack Engineer with 3+ years of experience in designing and
          developing scalable backend solutions. Proficient in Node.js, React, Next.js, Nest.js, PostgreSQL, MongoDB,
          WebSocket, and payment gateway integrations, with expertise in building high-performance, data-driven
          applications.
        </p>
          <p className={`font-bold text-xl `}>Here is the list of technologies I have worked with:</p>
        </div>
      </div>
      <div className='my-4'>
        <div className='flex items-center justify-center w-full mb-3'>
          <p className={`font-bold text-2xl ${darkTheme? 'text-white': 'text-slate-900'}`}>✨Back-end✨</p>
        </div>
        <div className='flex flex-col md:justify-center items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
          <MediaCard title="Node.js" image="/node.png" description="3+ years of experience" shadow="shadow-emerald-100" />
          <MediaCard title="Express.js" image="/express-js.png" description="3+ years of experience" shadow="shadow-yellow-100" />
          <MediaCard title="Nest.js" image="/nest.png" description="2 years of experience" shadow="shadow-red-100" />
          <MediaCard title="Python" image="/python.png" description="2 years of experience" shadow="shadow-blue-100" />
        </div>
      </div>
      <div className='my-4'>
        <div className='flex items-center justify-center w-full mb-3'>
          <p className={`font-bold text-2xl ${darkTheme? 'text-white': 'text-slate-900'}`}>✨Front-end + App✨</p>
        </div>
        <div className='flex flex-col md:justify-center items-center mb-[30px] md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
          <MediaCard title="React.js" image="/react.png" description="3+ years of experience" shadow="shadow-emerald-100" />
          <MediaCard title="Next.js" image="/next.png" description="3+ years of experience" shadow="shadow-yellow-100" />
          <MediaCard title="Tailwind" image="/tailwind.png" description="3+ years of experience" shadow="shadow-red-100" />
          <MediaCard title="React Native" image="/reactnative.png" description="A few months of experience" shadow="shadow-blue-100" />
        </div>
      </div>
    </div>
  )
}
