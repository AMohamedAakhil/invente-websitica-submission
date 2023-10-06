import React from 'react'
import { BiCarousel, BiHomeAlt2, BiRadio } from 'react-icons/bi'
import { RiFolderMusicLine } from 'react-icons/ri'

const Sidebar = () => {
  return (
    <>
     <div className="h-[165px] w-[50px] mt-10 rounded-3xl bg-gray-800 flex-col justify-center p-4">
        <div className="mb-5">
            <BiHomeAlt2 height={10} width={10} />
        </div>
        <div className="mb-5">
            <BiRadio />
        </div>
        <div className="mb-5">
            <RiFolderMusicLine />
        </div>
        <div className="mb-5">
        <BiCarousel />
        </div>

    </div>
    <div className="h-[88px] w-[50px] mt-5 rounded-3xl bg-gray-800 flex-col justify-center p-4">
        <div className="mb-5">
            <BiHomeAlt2 height={10} width={10} />
        </div>
        <div className="mb-5">
            <BiRadio />
        </div>

    </div>
    </>
   
  )
}

export default Sidebar