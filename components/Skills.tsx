'use client'
import React from 'react'
import { useAppContext } from '../context/AppContext'
import MediaCard from './MediaCard'

export default function Skills() {
  const { darkTheme } = useAppContext()
  return (
    <div id="skills" className={`scroll-mt-12 md:scroll-mt-0 flex flex-col min-h-screen font-mono ${darkTheme ? `bg-secondary text-accent` : `bg-white text-blue-950`}`}>
      <div className='w-full my-2 md:my-6 px-1 md:px-6 flex flex-col md:flex-row text-center justify-center space-y-2'>
        <div className='p-2 md:p-6'>
          <p className='bg-gradient-to-br from-violet-600 to-pink-600 bg-clip-text text-transparent text-3xl'>Here is the list of technologies I have worked with:</p>
        </div>
      </div>
      <div className='my-4'>
        <div className='flex items-center justify-center w-full mb-3'>
          <p className='bg-gradient-to-br from-blue-600 to-fuchsia-600 bg-clip-text text-transparent text-2xl'>✨Back-end✨</p>
        </div>
        <div className='flex flex-col md:justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
          <MediaCard title="Node.js" image="/node.png" description="3+ years of experience" shadow="shadow-emerald-100" />
          <MediaCard title="Express.js" image="/express.png" description="3+ years of experience" shadow="shadow-yellow-100" />
          <MediaCard title="Nest.js" image="/nest.png" description="2 years of experience" shadow="shadow-red-100" />
          <MediaCard title="Python" image="/python.png" description="2 years of experience" shadow="shadow-blue-100" />
        </div>
      </div>
      <div className='my-4'>
        <div className='flex items-center justify-center w-full mb-3'>
          <p className='bg-gradient-to-br from-blue-600 to-fuchsia-600 bg-clip-text text-transparent text-2xl'>✨Front-end + App✨</p>
        </div>
        <div className='flex flex-col md:justify-center items-center mb-[30px] md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
          <MediaCard title="React.js" image="/react.png" description="3+ years of experience" shadow="shadow-emerald-100" />
          <MediaCard title="Next.js" image="/next.png" description="3+ years of experience" shadow="shadow-yellow-100" />
          <MediaCard title="Tailwind" image="/tailwind.png" description="3+ years of experience" shadow="shadow-red-100" />
          <MediaCard title="React Native" image="/reactnative.png" description="A few months of experience" shadow="shadow-blue-100" />
        </div>
      </div>
    </div>
  )
}
