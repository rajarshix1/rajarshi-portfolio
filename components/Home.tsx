'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useAppContext } from '../context/AppContext'
import Link from 'next/link'

function HomeScreen() {
    const { darkTheme, setShowNav, setActiveSection } = useAppContext()
    const [role, setRole] = useState("Full stack");
    const [isVisible, setIsVisible] = useState(true);
    const homeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const roles = ["Full stack", "Backend", "Nodejs", "Mern stack"];
        let index = 0;
        let timeout: ReturnType<typeof setTimeout>;
        const interval = setInterval(() => {
            setIsVisible(false);
            timeout = setTimeout(() => {
                index = (index + 1) % roles.length;
                setRole(roles[index]);
                setIsVisible(true);
            }, 500);
        }, 2500);
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowNav(false);
                    setActiveSection('home');
                } else {
                    setShowNav(true);
                }
            },
            { threshold: 0.1 } // Adjust threshold as needed
        );

        const currentRef = homeRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [setShowNav, setActiveSection]);

  return (
    <div ref={homeRef} id="home" className={`relative min-h-screen flex flex-col items-center justify-center md:flex-row pt-24 px-8 md:pl-24 ${darkTheme?'bg-[url(/bgbg.png)]' : 'bg-[url(/herobgsky.webp)]'} bg-cover bg-center h-screen}`}>
      <div className="flex flex-col space-y-2 md:space-y-4 mb-4 md:mr-2 w-full md:w-7/12 ">
        <p className={` ${darkTheme? 'text-slate-100' : 'text-slate-800' } bg-clip-text text-xl`}>Hello, I&apos;m</p>
        <h1 className={`font-black  ${darkTheme? 'text-cyan-50' : 'text-slate-950' } bg-clip-text font-semibold text-6xl`}>Rajarshi Mandal</h1>
        <p className={` ${darkTheme? 'text-slate-400' : 'text-slate-800' } bg-clip-text text-xl`}>I&apos;m A Passionate <span className={`font-bold ${darkTheme? 'text-white' : 'text-slate-900' } block md:inline transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{role} Developer</span></p>
        
        <ul className="flex flex-row space-x-2 text-xl font-semibold cursor-pointer">
          <Link href="#home">
          <li className={`text-cyan-700 font-bold`}>Home</li>
          </Link>
           <Link href="#skills">
          <li>About</li>
          </Link>
           <Link href="#projects">
          <li>Portfolio</li>
          </Link>
          <Link href="#contact">
          <li>Contact</li>
          </Link>
        </ul>
        <ul className="flex flex-row space-x-4 font-semibold cursor-pointer ">
          <li className="hover:text-cyan-700">Github</li>
          <li className="hover:text-cyan-700">Linkedin</li>
          {/* <li>Contact</li> */}
        </ul>
        <div className="flex flex-row space-x-4 ">
        <a className={`px-6 py-2 w-fit rounded-3xl border-2  border-blue-700 hover:bg-cyan-700 hover:text-white hover:cursor-pointer flex items-center justify-center ${darkTheme? 'text-accent ' : 'text-black '} `} href="/Resume-Rajarshi-BE.pdf" download><button >View Resume</button></a>
        </div>
      </div>
      <div className="hidden md:flex md:w-5/12">
      </div>
      </div>
  )
}

export default HomeScreen