import React from 'react'
import ConferenceTrack from '../ConferenceTrack';

const CallforPapers = () => {
  return (
    <>
    <div className='w-full mt-16 lg:h-64 sm:h-56 h-40 relative'>
        <img src="https://i.postimg.cc/zX1hTMfT/nit-patna-003.jpg" alt="main building image" className='w-full aspect-square lg:h-64 sm:h-56 h-40 absolute image-render-auto' />
        <div className='absolute h-full w-full flex justify-center items-center bg-black/15'>
            <h1 className='text-white md:text-6xl sm:text-5xl text-3xl font-bold'>Call for Papers</h1>
        </div>
    </div>
    <div className='w-full mt-6 md:px-20 sm:px-12 px-6'>
        <p className='text-lg text-blue-800 font-semibold'>Prospective authors are invited to submit original unpublished work that is not currently under consideration for publication elsewhere via the various track mentioned below.</p>
    </div>
    <div className='w-full h-30 flex justify-center items-center text-gray-600 underline'>
        <h1 className='font-mediums md:text-5xl sm:text-5xl text-3xl cursor-pointer' onClick={()=>window.open("https://drive.google.com/file/d/1Cr7ZAoTga7h14BRDZamnu93SHHRUsYKz/view?usp=drivesdk","_blank")}>Link for CFP Brochure</h1>
    </div>
    <div className='w-full mt-6 md:px-20 sm:px-12 px-6'>
        <p className='text-lg text-blue-800 font-semibold'>Papers are invited in the following areas, but not limited to these only</p>
    </div>
    <div className='w-full md:px-20 sm:px-12 px-6'>
        <ConferenceTrack/>
    </div>
    </>
  )
}

export default CallforPapers;