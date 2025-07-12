'use client'
import Image from "next/image";
import { useAppContext } from "../context/AppContext";
interface MediaCardProps {
    title: string;
    image: string;
    description: string;
    shadow: string;
  }
export default function MediaCard({title, image, description, shadow}:MediaCardProps) {
    const {darkTheme} = useAppContext()
    return (
    <div className={`flex flex-col justify-center items-center h-50 w-80 md:h-60 md:w-60 p-6 ${darkTheme? `bg-slate-900 text-accent`: `bg-white text-secondary`} rounded-2xl shadow-sm ${shadow} border-2 border-slate-800`}>
      <div className="flex items-center justify-center h-5/8">
      <Image
        src={image}
        alt={title}
        width={120}
        height={120}
        
      />
      </div>
      <div className='flex flex-col h-3/8 justify-center items-center p-2 text-center'>
        <p className="text-xl">
          {title}
        </p>
        <p className="text-sm">
         {description}
        </p>
      </div>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </div>
  );
}
