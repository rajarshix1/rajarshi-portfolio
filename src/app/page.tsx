'use client'
import HomeScreen from "../../components/Home";
import { useAppContext } from "../../context/AppContext";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function Home() {
      const { darkTheme } = useAppContext()
  
  return (
    <div className={`flex flex-col min-h-screen font-mono ${darkTheme? `bg-secondary text-accent` : `bg-white text-blue-950`}`}>
      <HomeScreen/>
      <Skills/>
      <Projects/>
    </div>
  )
}