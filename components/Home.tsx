'use client'
import Image from 'next/image'
import React from 'react'
// import { useAppContext } from '../context/AppContext'

function HomeScreen() {
    // const {darkTheme} = useAppContext()
  return (
    <div id="home" className="scroll-mt-32 min-h-screen flex flex-col items-center md:justify-center md:flex-row px-6 md:px-10">
      <div className="flex flex-col space-y-2 md:space-y-4 mb-4 md:mr-2 w-full md:w-7/12 ">
        <p className="bg-gradient-to-br from-violet-400 to-pink-200 bg-clip-text text-transparent text-6xl">Welcome</p>
        <p className="bg-gradient-to-br from-violet-300 to-slate-50 bg-clip-text text-transparent text-5xl">To my Portfolio!</p>
        <p className="text-justify">MERN Stack Engineer with 3+ years of experience in designing and
          developing scalable backend solutions. Proficient in Node.js, React, Next.js, Nest.js, PostgreSQL, MongoDB,
          WebSocket, and payment gateway integrations, with expertise in building high-performance, data-driven
          applications.
        </p>
        <div className="flex flex-row justify-center space-x-4 ">
        <button className="px-3 py-2 w-fit rounded-3xl bg-primary hover:bg-red-700 hover:cursor-pointer text-accent shadow-2xl shadow-blue-500">Contact Me</button>
        <a className="px-3 py-2 w-fit rounded-3xl bg-blue-700 hover:bg-red-700 hover:cursor-pointer flex items-center justify-center text-accent shadow-2xl shadow-blue-200" href="/Resume-Rajarshi-BE.pdf" download><button >View Resume</button></a>
        </div>
      </div>
      {/* <div className="w-full md:w-5/12  bg-gradient-to-tl from-fuchsia-100 to-pink-400 p-1 rounded-4xl mt-4 md:mr-2"> */}
      <div className="flex items-center justify-center w-full md:w-5/12">
                <div className="w-112 h-112 md:w-128 md:h-128 bg-[url(/multicol.gif)] pb-0.5 rounded-4xl relative shadow-2xl shadow-fuchsia-200">
                    <Image 
                        className="rounded-4xl w-full h-full object-cover" 
                        src="/mee.svg" 
                        alt="Rajarshi Image" 
                        height={400} 
                        width={400}
                    />
                </div>
            </div>
      </div>
  )
}

export default HomeScreen