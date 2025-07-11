// import Image from 'next/image'
'use client'
import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import MaterialUISwitch from './MUISwitch';
import Link from 'next/link';
// import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
function Navbar() {
    const { darkTheme, setTheme } = useAppContext()
    const [show, setShow] = useState(false)
    return (
<div className="fixed top-0 z-50 bg-white dark:bg-black w-full border-b border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row items-center justify-between px-6 w-full  text-primary ">
            <Link className='hidden md:block' href='/'><p className='text-2xl font-bold bg-gradient-to-r from-fuchsia-800 to-pink-500 bg-clip-text text-transparent hover:cursor-pointer hover:text-red-700'>RAJARSHI MANDAL</p></Link>
            <ul className="hidden md:flex md:space-x-6 md:text-xl">
                { <Link href='#home'><li className='hover:cursor-pointer hover:text-emerald-600'>Home</li></Link>}
                { <Link href='#skills'><li className='hover:cursor-pointer hover:text-emerald-600'>Skills</li></Link>}
                { <Link href='#projects'><li className='hover:cursor-pointer hover:text-purple-600'>Projects</li></Link>}
                <MaterialUISwitch onChange={() => setTheme(!darkTheme)} />
                {/* <Switch  color={`default`}/> */}
            </ul>
            {/* <p className='md:hidden'>✨✨</p> */}
            <div className='md:hidden w-full flex justify-between py-2'>
                <div className="md:hidden flex flex-col items-center justify-center">

                    {show ?
                        <MenuOpenIcon className='md:hidden' onClick={() => setShow(!show)} />
                        : <MenuIcon className='md:hidden' onClick={() => setShow(!show)} />
                    }
                </div>
                <div className="md:hidden flex flex-col items-center justify-center">
                    <MaterialUISwitch onChange={() => setTheme(!darkTheme)} />
                </div>
            </div>
            <ul
                className={` md:hidden  absolute top-12 left-6 ${darkTheme ? `bg-secondary text-white` : `bg-white text-black `}  shadow-fuchsia-200 p-4 rounded-xl shadow-lg z-50 flex flex-col space-y-2 text-xl text-left transition-all duration-300 ease-in-out ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'} `}
            >            { <Link href='#home'><li className='hover:cursor-pointer hover:text-emerald-600'>Home</li></Link>}
                { <Link href='#skills'><li className='hover:cursor-pointer hover:text-emerald-600'>Skills</li></Link>}
                { <Link href='#projects'><li className='hover:cursor-pointer hover:text-purple-600'>Projects</li></Link>}
            </ul>
        </div>
        </div>


    )
}

export default Navbar