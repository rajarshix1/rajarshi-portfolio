'use client'
import React from 'react'
import Navbar from '../../../components/Navbar'
import { useAppContext } from '../../../context/AppContext'
import MediaCard from '../../../components/MediaCard'

export default function Projects() {
  const { darkTheme } = useAppContext()
  return (
    <div className={`flex flex-col h-full font-mono ${darkTheme ? `bg-secondary text-accent` : `bg-white text-blue-950`}`}>
      <Navbar />
      <div className='w-full my-2 md:my-6 px-1 md:px-6 flex flex-col md:flex-row text-center justify-center space-y-2'>
        <div className='p-2 md:p-6'>
          <p className='bg-gradient-to-br from-violet-400 to-pink-200 bg-clip-text text-transparent text-3xl'>Here is the list of technologies I have worked with:</p>
        </div>
      </div>
      <div className='flex items-center justify-center w-full mb-3'>
      <p className='bg-gradient-to-br from-blue-500 to-fuchsia-300 bg-clip-text text-transparent text-2xl'>✨Back-end✨</p>
      </div>
      <div className='flex flex-col md:justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
      <MediaCard title="Node.js" image="/node.png" description="3+ years of experience" shadow="shadow-emerald-400" />
      <MediaCard title="Express.js" image="/express.png" description="3+ years of experience" shadow="shadow-yellow-400" />
      <MediaCard title="Nest.js" image="/nest.png" description="2 years of experience" shadow="shadow-red-400" />
      <MediaCard title="Go" image="/go.png" description="A few months of experience" shadow="shadow-blue-400" />
      </div>
    </div>
  )
}
