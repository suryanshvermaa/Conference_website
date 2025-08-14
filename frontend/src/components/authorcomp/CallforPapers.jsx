import React from 'react'
import ConferenceTrack from '../ConferenceTrack';

const CallforPapers = () => {
    const generalTracks = [
        "Applications of Power Electronics in Renewable Energy",
        "Applications of Power Electronics in Robotics & Automation",
        "Converter topologies",
        "Distributed generation",
        "Application of Data Analytics in Energy Management",
        "Blockchain Applications for Distributed Energy Generation (DER)",
        "Energy Efficient Buildings",
        "Energy Forecasting",
        "Energy Policies & Standards",
        "Energy Storage solutions for Utility-scale PV generation",
        "IoT in Power System Applications",
        "Modelling of Energy Systems",
        "Resilient Power Generation Systems",
        "Urban Microgrids and smart grids",
        "Wide Bandgap devices",
        "AR/VR, Entertainment and Gaming",
        "Computer Architecture & Embedded Systems",
        "Consumer Systems for Healthcare and Wellbeing",
        "Geoscience and Remote Sensing Technology",
        "Industrial Electronics",
        "Next-Gen Communications, Networks & IoT",
        "Smart Cities, Vehicular Technology & Intelligent Transportation",
        "VLSI for Applied and Future Computing",
        "Multicore system-on-chip-based embedded systems and applications",
        "Biomedical Imaging and Image Processing",
        "Software Analytics & Visualization",
        "Computer Architectures Using Emerging Technology & Quantum Computing",
        "AI, Data Science and Scalable Machine Learning",
        "Internet of Things and Cyber-Physical Systems",
        "Cloud Systems Security, Privacy and Trust in Distributed Systems",
        "Robotics, control systems and AI",
        "Cryptography and security solutions",
        "Cyber-physical system forensics",
        "Network, cloud, distributed and cyber systems security",
        "Smart Generation, Transmission & Distribution",
        "Power System Restructuring, Economics & Electricity Markets",
        "FACTS Controllers and HVDC Systems",
        "Power System Protection and Security",
        "Microgrids, Power Quality, Load Forecasting",
        "Control System, Modelling and Applications",
        "Instrumentation",
        "Signal and Image Processing",
        "Biomechanics"
      ];
      
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
    <div className='w-full mt-6 md:px-20 sm:px-12 px-6'>
        <p className='text-lg text-blue-800 font-semibold'>It is planned to publish the peer reviewed and selected papers of conference as proceedings with Springer in their prestigious “Lecture Notes in Electrical Engineering” series <a href="https://link.springer.com/series/7818" className='underline'>https://link.springer.com/series/7818</a>. For detailed instructions for author and editors of conference proceedings, kindly visit the following link: <a href="https://www.springer.com/us/authors-editors/conference-proceedings" className='underline'>https://www.springer.com/us/authors-editors/conference-proceedings</a>. Select papers from the conference will be published by Springer as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published. Springer Nature does not charge any money for publication of Non-Open Access content. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.</p>
    </div>
    <div className='w-full h-30 flex justify-center items-center text-gray-600 underline'>
        <h1 className='font-mediums md:text-5xl sm:text-5xl text-3xl cursor-pointer' onClick={()=>window.open("https://drive.google.com/file/d/1Cr7ZAoTga7h14BRDZamnu93SHHRUsYKz/view?usp=drivesdk","_blank")}>Link for CFP Brochure</h1>
    </div>
    <div className='w-full md:px-20 sm:px-12 px-6'>
        <ConferenceTrack/>
    </div>
    <div className='w-full mt-6 md:px-20 sm:px-12 px-6'>
        <p className='text-xl text-gray-800 font-semibold inline px-3'>In addition to the above special tracks, papers are also invited in the following areas, but not limited to these only.</p>
    </div>
    <div className='w-full mt-6 md:px-20 sm:px-12 px-6'>
        <h1 className="text-4xl font-bold text-center mb-8">General Tracks</h1>
    </div>
    <div className='w-full flex flex-col justify-start sm:px-14 px-6 my-5'>
        {
            generalTracks.map((track,index)=>(
                <li className='text-lg text-gray-800 font-semibold px-3' key={index}> {track}</li>
            ))
        }
    </div>
    </>
  )
}

export default CallforPapers;