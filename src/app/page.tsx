import {BiMusic} from 'react-icons/bi'
import Image from 'next/image'
import SearchBar from '@/components/searchbar'
import Sidebar from '@/components/sidebar'
export default function Home() {
  return (
    <>
    <div className="bg-black opacity-50">
    <Image
        src="/Lead-image.png"
        alt="leadimage"
        layout="fill" // This makes the image span the full width and height of the parent container
        objectFit="cover" // This ensures the image covers the container
        className="opacity-40" // Apply the opacity class you defined in the Tailwind configuration
      />
    </div>
    <div className="p-5 flex">
      <div className="flex-row items-center">
        <div className="flex items-center">
          <div className="ml-3">
          <BiMusic />

          </div>
        <div className="ml-10">
        <SearchBar />
        </div>
        </div>
        
      <Sidebar />
      </div>
      <div className="mt-[4rem] -ml-[5rem]">
        <div className="flex">
        <Image
        src="/Lead-image.png"
        alt="album"
        width={200}
        height={200}
      />      
      <div className="ml-5 mt-10">
        <div className="text-3xl text-slate-300 font-semibold">
        Tomorrow's Tunes

        </div>
        <div className="text-sm font-light mt-3 text-slaet-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        </div>
      </div>
        </div>
      
      </div>
      </div>

    </> 
  )
}
