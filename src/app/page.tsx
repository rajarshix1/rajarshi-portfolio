'use client'
import Navbar from "../../components/Navbar";
import HomeScreen from "../../components/Home";
import { useAppContext } from "../../context/AppContext";

export default function Home() {
      const { darkTheme } = useAppContext()
  
  return (
    <div className={`flex flex-col h-full font-mono ${darkTheme? `bg-secondary text-accent` : `bg-white text-blue-950`}`}>
      <Navbar />
      <HomeScreen/>
    </div>
  )
}