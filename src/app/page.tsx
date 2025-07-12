'use client'
import HomeScreen from "../../components/Home";
import { useAppContext } from "../../context/AppContext";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function Home() {
  const { darkTheme } = useAppContext()

  return (
    <div className={`flex flex-col min-h-screen font-mono bg-cover bg-center ${darkTheme ?
      `text-accent bg-gradient-to-r from-black via-slate-950  to-blue-950` : 
      `text-blue-950 bg-gradient-to-r from-white via-slate-200  to-blue-200`
      }`}
      // style={{
      //   backgroundImage: darkTheme ?
      //     'url(/bgbg.png)' :
      //     'url(/bgbgbg.png)',
      //   backgroundSize: '100% 100%',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      // }}
      >      
      <HomeScreen />
      <Skills />
      <Projects />
    </div>
  )
}