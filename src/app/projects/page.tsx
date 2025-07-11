'use client'
import React from 'react'
import Navbar from '../../../components/Navbar'
import { useAppContext } from '../../../context/AppContext'
import Image from 'next/image'

export default function Projects() {
  const { darkTheme } = useAppContext()
  return (
    <div className={`flex flex-col min-h-screen font-mono ${darkTheme ? `bg-secondary text-accent` : `bg-white text-blue-950`}`}>
      <Navbar />
      <div className='w-full my-2 md:my-6 px-1 md:px-6 flex flex-col md:flex-row text-center justify-center space-y-2 border-y-2 shadow-emerald-600'>
        <div className='flex flex-col justify-center text-xl items-center p-2 md:p-6 md:w-1/2'>
          <p className='text-justify'>With 3+ years of experience, I have done multiple projects both in frontend and in backend.<br />My projects includes : Online Marketplaces, Chat applications, Management systems, Payment systems, Real time location tracking, Crypto exchange, Block explorers and more.</p>
        </div>
        <div className='px-2 md:w-1/2  flex justify-center items-center p-5 ' >
          <Image className='rounded-[10px] shadow-xl shadow-emerald-600' src="/gp.webp" alt="Github profile" height={300} width={600} />
        </div>
        {/* <p>Github Profile</p> */}

      </div>
      <ul className='w-full my-2 md:my-6 px-2 md:px-12 flex flex-col justify-center space-y-2'>
        <li className="flex flex-col">
          <h2 className="text-xl font-semibold">Marketplace Apps</h2>
          <p>
            Built two online marketplaces using Node.js and Next.js for the backend, Next.js for the frontend, and MongoDB as the database, deployed on AWS. Integrated Stripe and Razorpay for payments.
          </p>
        </li>
        <li className="flex flex-col">
          <h2 className="text-xl font-semibold">Consolidated Payment Gateway App</h2>
          <p>
            Developed a payment app that consolidates multiple payment gateways, including Stripe, Adyen, Braintree, and more. Users can complete payments through any gateway using a single payment form. Implemented a logging system for continuous error tracking and monitoring.
          </p>
        </li>
        <li className="flex flex-col">
          <h2 className="text-xl font-semibold">Chat Apps</h2>
          <p>
            Built an internal chat application for company communication using Node.js with Socket.io. Migrated from Laravel to Node.js, resulting in a significant improvement in message sending and fetching speed.
            Also developed a Facebook-style chat app using React/Next.js and Node.js with Socket.io. Added features like sub-chats, chat delegation, split chat boxes within the browser, and robust chat representative allocation.
          </p>
        </li>
        <li className="flex flex-col">
          <h2 className="text-xl font-semibold">Location-Based Apps</h2>
          <p>
            Developed a full-stack application with React and Node.js for real-time tracking of devices, specifically designed for trucks and trailers.
          </p>
        </li>
        <li className="flex flex-col">
          <h2 className="text-xl font-semibold">Institution Management System</h2>
          <p>
            Contributed to a robust Institution Management System. Built and improved features like student admissions, payroll management, vehicle tracking, and role-based access control. Fixed critical bugs, optimized queries, and significantly reduced file generation and download times.
          </p>
        </li>
        <li className="flex flex-col">
          <h2 className="text-xl font-semibold">Lottery Management System</h2>
          <p>
            Worked on a large-scale lottery management backend using Node.js and MongoDB.
          </p>
        </li>
        <li className="flex flex-col">
          <h2 className="text-xl font-semibold">Blockchain Apps</h2>
          <p>
            Contributed to and built multiple blockchain-based projects, including block explorers, crypto payment gateways supporting multiple coins and tokens, crypto conversion bridge backends, DAO backends, and more.
          </p>
        </li>
      </ul>

      {/* <div className=''>Project2</div>
        <div className=''>Project3</div>
        <div className=''>Project4</div> */}
    </div>
  )
}
