// import Image from 'next/image'
'use client'
import React, {  } from 'react'
import { useAppContext } from '../context/AppContext'
import MaterialUISwitch from './MUISwitch';
import Link from 'next/link';
// import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
    const { darkTheme, setTheme } = useAppContext()
    return (
        <div className={`fixed top-0 z-50 ${darkTheme ? ` bg-gradient-to-r from-black via-slate-950  to-blue-950 text-white` : ` text-black bg-gradient-to-r from-white via-slate-200  to-blue-200`} w-full  `}>
            <div className="flex md:flex-row items-center justify-between px-6 w-full  text-primary ">
                <Link className=' md:block flex' href='/'><p className='text-3xl font-bold bg-gradient-to-r from-cyan-800 to-slate-200 bg-clip-text text-transparent hover:cursor-pointer hover:text-red-700'>RM</p></Link>
                <ul className="hidden md:flex md:space-x-6 md:text-xl">
                     {<Link href='#home'><li className='hover:cursor-pointer hover:text-emerald-600'>🏠</li></Link>}
                    {<Link href='#skills'><li className='hover:cursor-pointer hover:text-emerald-600'>⚒️</li></Link>}
                    {<Link href='#projects'><li className='hover:cursor-pointer hover:text-purple-600'>📚</li></Link>}
                    <MaterialUISwitch onChange={() => setTheme(!darkTheme)} />
                    {/* <Switch  color={`default`}/> */}
                </ul>
                <ul className="md:hidden flex flex-row space-x-6 text-xl">
                    {<Link href='#home'><li className='hover:cursor-pointer hover:text-emerald-600'>🏠</li></Link>}
                    {<Link href='#skills'><li className='hover:cursor-pointer hover:text-emerald-600'>⚒️</li></Link>}
                    {<Link href='#projects'><li className='hover:cursor-pointer hover:text-purple-600'>📚</li></Link>}
                    <MaterialUISwitch onChange={() => setTheme(!darkTheme)} />
                    {/* <Switch  color={`default`}/> */}
                </ul>
                {/* <p className='md:hidden'>✨✨</p> */}
                {/* <div className='md:hidden w-full flex justify-between py-2'>
                <div className="md:hidden flex flex-col items-center justify-center">

                    {show ?
                        <MenuOpenIcon className='md:hidden' onClick={() => setShow(!show)} />
                        : <MenuIcon className='md:hidden' onClick={() => setShow(!show)} />
                    }
                </div>
                <div className="md:hidden flex flex-col items-center justify-center">
                    <MaterialUISwitch onChange={() => setTheme(!darkTheme)} />
                </div>
            </div> */}
                {/* <ul
                className={` md:hidden  absolute top-12 left-6 ${darkTheme ? `bg-secondary text-white` : `bg-white text-black `}  shadow-fuchsia-200 p-4 rounded-xl shadow-lg z-50 flex flex-col space-y-2 text-xl text-left transition-all duration-300 ease-in-out ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'} `}
            >            { <Link href='#home'><li className='hover:cursor-pointer hover:text-emerald-600'>Home</li></Link>}
                { <Link href='#skills'><li className='hover:cursor-pointer hover:text-emerald-600'>Skills</li></Link>}
                { <Link href='#projects'><li className='hover:cursor-pointer hover:text-purple-600'>Projects</li></Link>}
            </ul> */}
            </div>
        </div>


    )
}

export default Navbar