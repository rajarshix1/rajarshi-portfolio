import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
   <div className="flex justify-between px-6 w-full bg-gradient-to-r from-indigo-200 to-sky-100 text-primary">
               <p className='text-2xl font-bold bg-gradient-to-r from-fuchsia-800 to-pink-500 bg-clip-text text-transparent'>RAJARSHI MANDAL</p>
               <ul className="flex space-x-6 text-xl">
                       <li>Skills</li>
                       <li>Projects</li>
                   </ul>
               </div>
  )
}

export default Navbar