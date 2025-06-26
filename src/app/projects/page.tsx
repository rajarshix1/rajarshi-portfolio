'use client'
import React from 'react'
import Navbar from '../../../components/Navbar'
import { useAppContext } from '../../../context/AppContext'
import Image from 'next/image'

export default function Projects() {
    const {darkTheme} = useAppContext()
  return (
    <div className={`flex flex-col h-full font-mono ${darkTheme? `bg-secondary text-accent` : `bg-white text-blue-950`}`}>
        <Navbar/>
        <div className='w-full my-2 md:my-6 px-1 md:px-6 flex flex-col md:flex-row text-center justify-center space-y-2'>
           <div className='flex flex-col justify-center text-xl items-center p-2 md:p-6 md:w-1/2'>
           <p>With 3+ years of experience, I have done multiple projects both in frontend and in backend.</p> 
           <p>My projects includes : Online Marketplaces, Chat applications, Management systems, Payment systems, Real time location tracking, Crypto exchange, Block explorers and more.</p>
           </div>
           <div  className='px-2 md:w-1/2  flex justify-center items-center p-5 ' >
            <Image className='rounded-[10px] shadow-xl shadow-emerald-600' src="/gp.webp" alt="Github profile" height={300} width={600} />
           </div>
        </div>
        {/* <div className=''>Project2</div>
        <div className=''>Project3</div>
        <div className=''>Project4</div> */}
    </div>
  )
}
