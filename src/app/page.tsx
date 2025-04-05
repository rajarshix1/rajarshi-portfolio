import Image from "next/image";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col  bg-secondary  h-full font-mono">
      <Navbar />
      <div className="flex flex-col items-center md:justify-center md:flex-row mt-10 px-6 md:px-10">
      <div className="flex flex-col space-y-4 mb-4 md:mr-2 w-full md:w-7/12 ">
        <p className="bg-gradient-to-br from-violet-400 to-pink-200 bg-clip-text text-transparent text-6xl">Welcome</p>
        <p className="bg-gradient-to-br from-violet-300 to-slate-50 bg-clip-text text-transparent text-5xl">To my Portfolio!</p>
        <p>MERN Stack Engineer with 3+ years of experience in designing and
          developing scalable backend solutions. Proficient in Node.js, React, Next.js, Nest.js, PostgreSQL, MongoDB,
          WebSocket, and payment gateway integrations, with expertise in building high-performance, data-driven
          applications.
        </p>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 ">
        <button className="px-3 py-2 rounded-3xl bg-primary hover:bg-red-700 hover:cursor-pointer">Contact Me</button>
        <a  href="/Resume-Rajarshi-BE.pdf" download><button className="px-3 py-2 rounded-3xl bg-primary hover:bg-red-700 hover:cursor-pointer">View Resume</button></a>
        </div>
      </div>
      {/* <div className="w-full md:w-5/12  bg-gradient-to-tl from-fuchsia-100 to-pink-400 p-1 rounded-4xl mt-4 md:mr-2"> */}
      <div className="w-full h-full md:w-5/12  bg-[url(/rainbow.gif)] pb-0.5 rounded-4xl mt-4 md:ml-2 relative">
        <Image className="rounded-4xl min-w-[200px] w-full h-full object-cover" src="/mee.svg" alt="Rajarshi Image" height={600} width={1000}/>
      </div>
      </div>
    </div>
  )
}