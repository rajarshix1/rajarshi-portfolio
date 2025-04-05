import Navbar from "../../components/Navbar";
import HomeScreen from "../../components/Home";

export default function Home() {
  return (
    <div className="flex flex-col  bg-secondary  h-full font-mono">
      <Navbar />
      <HomeScreen/>
    </div>
  )
}