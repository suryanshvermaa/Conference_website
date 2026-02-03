import React, { useState } from 'react';
import ConferenceTrack from '../ConferenceTrack';

const CallforPapers = () => {
    const [openBranches, setOpenBranches] = useState({});

    const toggleBranch = (branchName) => {
        setOpenBranches(prev => ({
            ...prev,
            [branchName]: !prev[branchName]
        }));
    };

    const  generalTracksByBranch= [
    {
      "domain": "Electrical Engineering",
      "topics": [
        "Applications of Power Electronics in Renewable Energy",
        "Applications of Power Electronics in Robotics and Automation",
        "Converter Topologies and Control",
        "Distributed Generation and Smart Energy Systems",
        "Energy Forecasting and Demand Management",
        "Energy Policies, Standards, and Regulations",
        "Energy-Efficient Buildings and Infrastructure",
        "Energy Storage Solutions for Utility-Scale PV Systems",
        "Modelling and Simulation of Energy Systems",
        "Resilient and Sustainable Power Generation Systems",
        "Smart Grids, Urban Microgrids, and Intelligent Energy Networks",
        "IoT Applications in Power System Monitoring and Control",
        "Wide Bandgap Devices for Power Conversion",
        "Smart Generation, Transmission, and Distribution",
        "Power System Restructuring, Economics, and Electricity Markets",
        "FACTS Controllers and HVDC Systems",
        "Power System Protection and Security"
      ]
    },
    {
      "domain": "Electronics, Communication and Instrumentation Engineering",
      "topics": [
        "Industrial Electronics and Automation",
        "Control Systems: Modelling, Design, and Applications",
        "Instrumentation and Measurement Systems",
        "Signal, Image, and Biomedical Processing",
        "Biomedical Imaging and Image Processing",
        "Biomechanics and Bioelectronics",
        "VLSI Design for Emerging and Future Applications",
        "Multicore System-on-Chip and Embedded Applications",
        "Wide Bandgap Semiconductor Devices and Applications"
      ]
    },
    {
      "domain": "Computing and Information Technologies",
      "topics": [
        "Artificial Intelligence, Data Science, and Scalable Machine Learning",
        "Data Analytics for Energy Management",
        "Blockchain Applications for Distributed Energy Resources (DER)",
        "Cloud Systems Security, Privacy, and Trust",
        "Cryptography and Cybersecurity Solutions",
        "Network, Cloud, Distributed, and Cyber Systems Security",
        "Cyber-Physical System Forensics",
        "Internet of Things (IoT) and Cyber-Physical Systems",
        "Next-Generation Communications, Networks, and IoT",
        "Computer Architectures and Embedded Systems",
        "Computer Architectures Using Emerging Technologies and Quantum Computing",
        "Software Analytics and Visualisation",
        "AR/VR, Entertainment, and Gaming Technologies",
        "Consumer Systems for Healthcare and Well-being",
        "Geoscience and Remote Sensing Technologies",
        "Smart Cities, Vehicular Technologies, and Intelligent Transportation Systems",
        "Robotics, Control Systems, and AI Integration"
      ]
    }
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
        <p className='text-lg text-gray-700 font-light'>It is planned to publish the peer reviewed and selected papers of conference as proceedings with Springer in their prestigious “Lecture Notes in Electrical Engineering” series <a href="https://link.springer.com/series/7818" className='underline text-blue-800'>https://link.springer.com/series/7818</a>. For detailed instructions for author and editors of conference proceedings, kindly visit the following link: <a href="https://www.springer.com/us/authors-editors/conference-proceedings" className='underline text-blue-800'>https://www.springer.com/us/authors-editors/conference-proceedings</a>. Select papers from the conference will be published by Springer as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published. Springer Nature does not charge any money for publication of Non-Open Access content. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.</p>
        <p className='text-lg text-gray-700 font-light'>If a paper’s topic does not align with the scope of LNEE series, the Publication Committee may recommend its consideration under another suitable Springer book series.</p>
    </div>
    <div className='w-full mt-6 md:px-20 sm:px-12 px-6'>
        <p className='text-lg text-blue-800 font-semibold'>Prospective authors are invited to submit original unpublished work that is not currently under consideration for publication elsewhere via the various track mentioned below.</p>
    </div>
    <div className='w-full h-30 flex justify-center items-center text-gray-600 underline'>
        <h1 className='font-mediums md:text-5xl sm:text-5xl text-3xl cursor-pointer' onClick={()=>window.open("https://drive.google.com/file/d/1Cr7ZAoTga7h14BRDZamnu93SHHRUsYKz/view?usp=drivesdk","_blank")}>Link for CFP Brochure</h1>
    </div>
   
    <div className='w-full mt-6 md:px-20 sm:px-12 px-6'>
        <p className='text-xl text-gray-800 font-semibold inline '>Papers are invited in the following diverse domains of Electrical, Electronics, and Computing
Engineering, as well as their applications across various engineering and scientific disciplines, but
not limited to these only.</p>
    </div>
    <div className='w-full mt-6 md:px-20 sm:px-12 px-6'>
        <h1 className="text-4xl font-bold text-center mb-8">General Tracks</h1>
    </div>
    <div className='w-full flex flex-col justify-start sm:px-14 px-6 my-5 gap-4'>
        {
            generalTracksByBranch.map((branch, index) => (
                <div key={index} className='border border-gray-300 rounded-lg overflow-hidden shadow-sm'>
                    <button
                        onClick={() => toggleBranch(branch.domain)}
                        className='w-full flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300'
                    >
                        <h2 className='text-xl font-semibold text-gray-900'>{branch.domain}</h2>
                        <svg
                            className={`w-6 h-6 transform transition-transform duration-300 ${openBranches[branch.domain] ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {openBranches[branch.domain] && (
                        <div className='p-4 bg-white animate-fadeIn'>
                            <ul className='list-disc pl-8 space-y-2'>
                                {branch.topics.map((topic, topicIndex) => (
                                    <li className='text-base text-gray-700 font-medium' key={`${branch.domain}-${topicIndex}`}>
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))
        }
    </div>
     <div className='w-full md:px-20 sm:px-12 px-6'>
        <div className='w-full mt-10'>
            <p className='text-xl text-gray-800 font-semibold inline'>In addition to the above areas, papers are also invited in the following special tracks:
Special Tracks</p>
        </div>
        <ConferenceTrack/>
    </div>
    </>
  )
}

export default CallforPapers;