'use client'
import React from 'react'
import Link from 'next/link'
import { useAppContext } from '../context/AppContext'
import MaterialUISwitch from './MUISwitch'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import PhoneIcon from '@mui/icons-material/Phone';

const navItems = [
    { id: 'home', icon: <HomeIcon />, label: 'Home' },
    { id: 'skills', icon: <PersonIcon />, label: 'About' },
    { id: 'projects', icon: <FolderIcon />, label: 'Projects' },
    { id: 'contact', icon: <PhoneIcon />, label: 'Contact' },
];

function Navbar() {
    const { darkTheme, setTheme, showNav, activeSection } = useAppContext()

    const activeLinkStyle = darkTheme
        ? 'shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] bg-cyan-500/20 text-cyan-300'
        : 'shadow-[0_0_15px_5px_rgba(0,100,150,0.6)] bg-cyan-500/30 text-cyan-800';

    return (
        <nav
            className={`fixed z-50 transition-opacity duration-500 ${showNav ? 'opacity-100' : 'opacity-0'}
                        bottom-0 left-0 w-full 
                        md:w-auto md:left-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:bottom-auto`}
        >
            <div className={`flex flex-row items-center justify-evenly p-1 w-full
                        md:flex-col md:space-y-2 md:w-auto md:rounded-full md:p-1
                        ${darkTheme ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-sm border ${darkTheme ? 'border-gray-700/80' : 'border-gray-300/80'}`}>
                {navItems.map((item) => (
                    <Link
                        key={item.id}
                        href={`#${item.id}`}
                        className={`w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${activeSection === item.id
                                ? activeLinkStyle
                                : `${darkTheme ? 'text-gray-400 hover:bg-white/10' : 'text-gray-600 hover:bg-black/10'}`
                            }`}
                        aria-label={item.label}
                    >
                        {item.icon}
                    </Link>
                ))}
                <div className="hidden md:block border-t border-gray-700/50 w-full my-1"></div>
                <div className="scale-75">
                    <MaterialUISwitch onChange={() => setTheme(!darkTheme)} checked={darkTheme} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar