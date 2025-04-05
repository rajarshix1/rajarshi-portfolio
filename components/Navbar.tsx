// import Image from 'next/image'
'use client'
import React from 'react'
import { useAppContext } from '../context/AppContext'
import Switch from '@mui/material/Switch';
import MaterialUISwitch from './MUISwitch';

function Navbar() {
    const { darkTheme, setDarkTheme } = useAppContext()
    return (
        <div className="flex items-center justify-between px-6 w-full  text-primary ">
            <p className='text-2xl font-bold bg-gradient-to-r from-fuchsia-800 to-pink-500 bg-clip-text text-transparent hover:cursor-pointer hover:text-red-700'>RAJARSHI MANDAL</p>
            <ul className="flex space-x-6 text-xl">
                <li className='hover:cursor-pointer hover:text-emerald-600'>Skills</li>
                <li className='hover:cursor-pointer hover:text-purple-600'>Projects</li>
                <MaterialUISwitch onChange={()=>setDarkTheme(!darkTheme)}/>
                {/* <Switch  color={`default`}/> */}
            </ul>
        </div>
    )
}

export default Navbar