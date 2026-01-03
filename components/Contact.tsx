'use client'
import React, { useRef, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Contact() {
    const { setActiveSection, darkTheme } = useAppContext();
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection('contact');
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = contactRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [setActiveSection]);

    const highlightStyle = darkTheme 
        ? "text-cyan-400" 
        : "text-cyan-600";
    
    const glowStyle = darkTheme ? "drop-shadow-[0_0_6px_rgba(0,255,255,0.2)]" : "drop-shadow-[0_0_6px_rgba(0,100,150,0.2)]";


    return (
        <div ref={contactRef} id="contact" className="relative flex flex-col items-center justify-center min-h-screen pt-24 px-8 md:pl-24 bg-black text-white overflow-hidden">
            {/* Subtle background graphic */}
            <div
                className="absolute inset-0 w-full h-full bg-no-repeat bg-center opacity-10"
                style={{ backgroundImage: 'url(/darkbghero.webp)', backgroundSize: 'cover' }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8">
                <h1 className="text-2xl md:text-5xl font-semibold uppercase tracking-tighter">
                    From ideas to <span className={`${highlightStyle} ${glowStyle}`}>execution</span> / <br />
                    Let’s build something <span className={`${highlightStyle} ${glowStyle}`}>extraordinary!</span>
                </h1>

                <p className="text-lg text-gray-400">
                    I’m Available For Full-Time Roles & Freelance Projects.
                </p>

                <a href="mailto:rajarshimandalx@gmail.com" className={`group inline-flex items-center justify-center px-8 py-3 border border-white rounded-full text-lg hover:bg-white hover:text-black transition-colors duration-300 ${glowStyle}`}>
                    Get In Touch
                    <ArrowForwardIcon className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="flex items-center space-x-8 pt-8">
                    <a href="https://github.com/rajarshix1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">Github</a>
                    <a href="mailto:rajarshim5@gmail.com" className="text-white hover:text-cyan-400 transition-colors">Email</a>
                    <a href="https://www.linkedin.com/in/rajarshi-mandal-513981192/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">LinkedIn</a>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <div className="absolute bottom-8 z-10">
                <Link href="#home" passHref>
                    <button 
                        aria-label="Scroll to top"
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white transition-all"
                    >
                        <ArrowUpwardIcon />
                    </button>
                </Link>
            </div>
        </div>
    );
}
