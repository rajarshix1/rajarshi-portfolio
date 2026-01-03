'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { useAppContext } from '../context/AppContext'

interface TechTagProps {
    name: string;
}

const TechTag = ({ name }: TechTagProps) => {
    return (
        <div className="flex items-center rounded-md bg-white/10 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-gray-200 border border-white/10 hover:bg-white/20 transition-colors">
            <span>{name}</span>
        </div>
    );
};

export default function Projects() {
  const { darkTheme, setActiveSection } = useAppContext()
  const projectSectionRef = useRef<HTMLDivElement>(null); // Ref for the root container
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]); // Refs for each project panel

  // Multi-observer setup
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    panelRefs.current.forEach((panel) => {
        if (!panel) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection('projects');
                }
            },
            { threshold: 0.3 } // A panel is active if 30% is visible
        );

        observer.observe(panel);
        observers.push(observer);
    });

    // Fallback observer for the whole section
    const fallbackObserver = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setActiveSection('projects');
            }
        }, { threshold: 0.1 }
    );
    if(projectSectionRef.current) {
        fallbackObserver.observe(projectSectionRef.current);
    }


    return () => {
        observers.forEach((observer) => observer.disconnect());
        fallbackObserver.disconnect();
    };
  }, [setActiveSection]);
  
  const projects = [
    { 
      title: "Marketplace Apps", 
      description: "A comprehensive e-commerce solution that connects buyers and sellers with features for product listings, user reviews, and secure transactions.", 
      features: ["Secure user authentication", "Real-time product search", "Stripe & Razorpay integration", "Admin dashboard"],
      techStack: ["Node.js", "Next.js", "MongoDB", "AWS", "Stripe", "Tailwind CSS", "Redux"],
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop"
    },
    { 
      title: "Consolidated Payment Gateway", 
      description: "An application designed to simplify online payments by consolidating multiple gateways into a single, unified interface, with robust error logging.", 
      features: ["Stripe, Adyen, Braintree integration", "Single, unified payment form", "Continuous error monitoring", "Secure transaction handling"],
      techStack: ["Node.js", "React", "Express", "PostgreSQL", "JWT", "Redis"],
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop" 
    },
    { 
      title: "Real-Time Chat Applications", 
      description: "Developed a high-speed, Facebook-style internal chat system with features for sub-chats, delegation, and efficient message handling.", 
      features: ["WebSocket-based messaging", "Chat delegation logic", "Persistent chat history", "High performance"],
      techStack: ["Node.js", "Socket.io", "React", "MongoDB", "Framer Motion"],
      imageUrl: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1600&auto=format&fit=crop" 
    },
     { 
      title: "Institution Management System", 
      description: "A robust, all-in-one system for educational institutions to manage admissions, payroll, vehicle tracking, and user roles.", 
      features: ["Modular system design", "Secure role-based access control", "Real-time vehicle tracking", "Query optimization"],
      techStack: ["Node.js", "React", "PostgreSQL", "Next.js", "Docker", "Nginx"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop" 
    },
  ];

  const bgColor = darkTheme ? 'bg-black' : 'bg-gray-100';
  const textColor = darkTheme ? 'text-white' : 'text-black';
  const panelBgColor = darkTheme ? 'bg-black' : 'bg-gray-100';
  const headerBgColor = darkTheme ? 'bg-black' : 'bg-gray-100';
  const borderColor = darkTheme ? 'border-white/10' : 'border-gray-200';
  const mutedTextColor = darkTheme ? 'text-gray-400' : 'text-gray-600';

  return (
    <div ref={projectSectionRef} id="projects" className={`${bgColor} ${textColor} selection:bg-cyan-500 selection:text-white`}>
      {/* Sticky Header Section */}
      <div className={`sticky top-0 h-[35vh] flex items-center justify-center pt-10 md:pl-24 lg:pl-32 ${headerBgColor} z-20`}>
        <div className='w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6'>
            <div className="hidden md:flex items-center">
                <h2 className="text-5xl font-black text-white uppercase tracking-tighter">
                    Featured Work
                </h2>
            </div>
            <div className='flex flex-col justify-center text-center md:text-left md:w-1/2'>
              <p className={`text-base leading-relaxed ${mutedTextColor}`}>
                With 4 years of experience, I have delivered scalable solutions across the full stack. 
                Specializing in <span className="text-cyan-400">Marketplaces</span>, <span className="text-cyan-400">Fintech</span>, 
                and <span className="text-cyan-400">Real-time Systems</span>.
              </p>
            </div>
            <div className='hidden md:block md:w-1/3 opacity-50 grayscale hover:grayscale-0 transition-all duration-700'>
              <Image className='rounded-xl shadow-2xl border border-white/10' src="/gp.webp" alt="Github profile" height={200} width={400} objectFit="cover" />
            </div>
        </div>
      </div>

      {/* Projects List (Full Width Cards) */}
      <div className="relative z-10">
        {projects.map((project, index) => (
          <div 
            key={project.title} 
            ref={el => {
              if (el) panelRefs.current[index] = el;
            }}
            className="min-h-screen relative border-t border-white/10"
            >
            <div className={`sticky top-[30vh] min-h-[70vh] flex items-center justify-center py-20 px-6 md:pl-24 lg:pl-32 ${panelBgColor}`}>
              <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    <div className={`lg:col-span-7 group relative overflow-hidden rounded-2xl border border-white/10 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="aspect-video relative overflow-hidden">
                            <Image 
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div>
                            <span className="text-cyan-500 text-sm mb-2 block">0{index + 1} // Project</span>
                            <h2 className="text-4xl font-bold tracking-tight">{project.title}</h2>
                        </div>
                        
                        <p className={`text-lg leading-relaxed ${mutedTextColor}`}>{project.description}</p>
                        
                        <ul className="space-y-2">
                            {project.features.map((feature, i) => (
                                <li key={i} className={`flex items-start gap-2 text-sm ${mutedTextColor}`}>
                                    <span className="text-cyan-500 mt-1">▹</span> {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6 border-t border-white/5">
                            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4">Tech Stacks</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => <TechTag key={tech} name={tech} />)}
                            </div>
                        </div>
                    </div>

                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Footer CTA */}
        <div className="h-[60vh] flex items-center justify-center bg-black border-t border-white/10">
            <div className="flex flex-col items-center justify-center py-12 space-y-6 text-center px-6">
                <div className="p-4 rounded-full bg-white/5 border border-white/10">
                    <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Interested in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">collaboration?</span>
                </h3>
                <p className={`max-w-md text-lg ${mutedTextColor}`}>
                  Visit my GitHub to explore the source code for these projects and more experimental builds.
                </p>
                <a href="https://github.com/rajarshix1" target="_blank" rel="noopener noreferrer" className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                    <button className="relative px-8 py-4 bg-black text-white rounded-full font-bold transition-all duration-300 border border-white/20">
                        Explore GitHub Profile
                    </button>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}
