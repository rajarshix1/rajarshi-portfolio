'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { useAppContext } from '../context/AppContext'

const skillCategories = [
  {
    title: 'Backend Development',
    skills: 'Node.js, Express.js, Nest.js, Python, Golang',
  },
  {
    title: 'Database Management',
    skills: 'MongoDB, PostgreSQL, Redis, DynamoDB, Elasticsearch',
  },
  {
    title: 'Frontend Development',
    skills: 'React.js, Next.js, Tailwind CSS, Redux, React Native',
  },
]

export default function Skills() {
  const { darkTheme, setActiveSection } = useAppContext();
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    panelRefs.current.forEach((panel, index) => {
        if (!panel) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection('skills');
                }
            },
            { threshold: 0.2 } // Panel is active if 20% is visible
        );

        observer.observe(panel);
        observers.push(observer);
    });

    return () => {
        observers.forEach((observer, index) => {
            const panel = panelRefs.current[index];
            if (panel) {
                observer.unobserve(panel);
            }
        });
    };
  }, [setActiveSection]);

  const bgColor = darkTheme ? 'bg-black' : 'bg-gray-100'
  const textColor = darkTheme ? 'text-white' : 'text-black'
  const mutedTextColor = darkTheme ? 'text-gray-300' : 'text-gray-700'
  const headerBgColor = darkTheme ? 'bg-black' : 'bg-gray-100'
  const panelBgColor = darkTheme ? 'bg-gray-950' : 'bg-gray-100'
  const borderColor = darkTheme ? 'border-gray-800' : 'border-gray-200'

  return (
    <div id="skills" className={`${bgColor} ${textColor}`}>
      {/* Sticky "About Me" Section (Top 40%) */}
      <div className={`sticky top-0 h-[55vh] md:h-[40vh] flex items-center justify-center pt-20 px-8 md:pt-0 md:pl-24 lg:pl-32 ${headerBgColor} z-10`}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/mebw.jpg"
                alt="Profile Picture"
                width={200}
                height={200}
                className="rounded-full object-cover w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="md:col-span-2 space-y-4 text-center md:text-left">
              <h2 className={`text-3xl md:text-5xl font-black tracking-tighter ${darkTheme ? 'text-white' : 'text-slate-900'}`}>ABOUT ME</h2>
              <p className={`text-base md:text-lg ${mutedTextColor}`}>
                MERN Stack Engineer with 4 years of experience in designing and developing scalable backend solutions.
                Proficient in Node.js, React, Next.js, Nest.js, PostgreSQL, MongoDB, WebSocket, and payment gateway
                integrations, with expertise in building high-performance, data-driven applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Panel Replacement Scroll Section */}
      <div className="relative z-0">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title} 
            ref={el => {
              if (el) panelRefs.current[index] = el;
            }}
            className="h-[100vh]"
          >
            <div className={`sticky top-[55vh] h-[45vh] md:top-[40vh] md:h-[60vh] flex items-center justify-center pt-20 px-8 md:pt-0 md:pl-24 lg:pl-32 ${panelBgColor} border-t ${borderColor}`}>
              <div className="max-w-7xl mx-auto w-full">
                <div className={`flex items-start justify-between py-8`}>
                  <div
                    className={`text-4xl md:text-6xl font-bold ${
                      darkTheme ? 'text-gray-700' : 'text-gray-300'
                    }`}
                  >
                    {`0${index + 1}`}
                  </div>
                  <div className="flex-1 ml-8">
                    <h3 className={`text-2xl md:text-3xl font-black tracking-tighter mb-3 ${darkTheme ? 'text-white' : 'text-slate-900'}`}>
                      {category.title}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed ${darkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                      {category.skills}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}