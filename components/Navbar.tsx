// import Image from 'next/image'
'use client'
import React from 'react'
import { useAppContext } from '../context/AppContext'
import MaterialUISwitch from './MUISwitch';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
    const { darkTheme, setDarkTheme } = useAppContext()
    const pathName = usePathname()
    return (
        <div className="flex items-center justify-between px-6 w-full  text-primary ">
            <Link href='/'><p className='text-2xl font-bold bg-gradient-to-r from-fuchsia-800 to-pink-500 bg-clip-text text-transparent hover:cursor-pointer hover:text-red-700'>RAJARSHI MANDAL</p></Link>
            <ul className="flex space-x-6 text-xl">
           {pathName!="/" && <Link href='/'><li className='hover:cursor-pointer hover:text-emerald-600'>Home</li></Link>}
            {pathName!='/skills' && <Link href='/projects'><li className='hover:cursor-pointer hover:text-emerald-600'>Skills</li></Link>}
                {pathName!='/projects' && <Link href='/projects'><li className='hover:cursor-pointer hover:text-purple-600'>Projects</li></Link>}
                <MaterialUISwitch onChange={()=>setDarkTheme(!darkTheme)}/>
                {/* <Switch  color={`default`}/> */}
            </ul>
        </div>
    )
}

export default Navbar