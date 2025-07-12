'use client'
import React from 'react'
import { useAppContext } from '../context/AppContext'
import Link from 'next/link'
// import { useAppContext } from '../context/AppContext'

function HomeScreen() {
    const {darkTheme} = useAppContext()
  return (
    <div id="home" className="scroll-mt-32 min-h-screen flex flex-col items-center justify-center md:flex-row  pt-16 md:pt-20 px-6 md:px-20">
      <div className="flex flex-col space-y-2 md:space-y-4 mb-4 md:mr-2 w-full md:w-7/12 ">
        <p className={` ${darkTheme? 'text-slate-100' : 'text-slate-800' } bg-clip-text text-xl`}>Hello, I&apos;m</p>
        <p className={` ${darkTheme? 'text-cyan-50' : 'text-slate-950' } bg-clip-text text-6xl`}>Rajarshi Mandal</p>
        <p className={` ${darkTheme? 'text-slate-400' : 'text-slate-800' } bg-clip-text text-xl`}>I&apos;m A Passionate <span className={`font-bold ${darkTheme? 'text-white' : 'text-slate-900' }`}>Full stack Developer</span></p>
        
        <ul className="flex flex-row space-x-8 text-xl font-semibold cursor-pointer">
          <Link href="#home">
          <li className={`text-cyan-700 font-bold`}>Home</li>
          </Link>
           <Link href="#skills">
          <li>About</li>
          </Link>
           <Link href="#projects">
          <li>Portfolio</li>
          </Link>
          <li>Contact</li>
        </ul>
        <ul className="flex flex-row space-x-4 font-semibold cursor-pointer ">
          <li className="hover:text-cyan-700">Github</li>
          <li className="hover:text-cyan-700">Linkedin</li>
          {/* <li>Contact</li> */}
        </ul>
        <div className="flex flex-row space-x-4 ">
        {/* <button className="px-3 py-2 w-fit rounded-3xl bg-primary hover:bg-red-700 hover:cursor-pointer text-accent shadow-2xl shadow-blue-500">Contact Me</button> */}
        <a className={`px-6 py-2 w-fit rounded-3xl border-2  border-blue-700 hover:bg-cyan-700 hover:text-white hover:cursor-pointer flex items-center justify-center ${darkTheme? 'text-accent ' : 'text-black '} `} href="/Resume-Rajarshi-BE.pdf" download><button >View Resume</button></a>
        {/* <a className={`px-6 py-2 w-fit rounded-3xl border-2  border-blue-700 hover:bg-red-700 hover:cursor-pointer flex items-center justify-center ${darkTheme? 'text-accent shadow-cyan-900' : 'text-black shadow-cyan-900'} shadow-lg shadow-cyan-900`} href="/Resume-Rajarshi-BE.pdf" download><button >View Resume</button></a> */}
        </div>
      </div>
      {/* <div className="w-full md:w-5/12  bg-gradient-to-tl from-fuchsia-100 to-pink-400 p-1 rounded-4xl mt-4 md:mr-2"> */}
      <div className="hidden md:flex md:w-5/12">
                {/* <div className="w-112 h-112 md:w-128 md:h-128 bg-[url(/multicol.gif)] pb-0.5 rounded-4xl relative shadow-2xl shadow-fuchsia-200">
                    <Image 
                        className="rounded-4xl w-full h-full object-cover" 
                        src="/mee.svg" 
                        alt="Rajarshi Image" 
                        height={400} 
                        width={400}
                    />
                </div> */}
            </div>
      </div>
  )
}

export default HomeScreen