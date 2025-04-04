import React from 'react'
import { FaAirbnb, FaTrain, FaBus } from 'react-icons/fa'  // Correcting the import from 'fa' icons

const Venue = () => {
  return (
    <div>
      <section className="mt-8 p-12 bg-gradient-to-r from-blue-50 to-gray-100 rounded-lg shadow-xl ">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 border-b-4 border-blue-500 pb-3">Venue & Travels</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          <strong className="text-blue-700">The ICNARI-2026</strong> will be held at NIT Patna, Bihar, India. The institute’s campus is beautifully situated on the south bank of the River Ganges, behind Gandhi Ghat, one of the most important and sacred places in Patna.
        </p>
        <p className="text-gray-800 text-lg mt-4 leading-relaxed">
          Historically known as Patliputra, Patna has long been a hub of knowledge and culture, attracting scholars and visitors from across the globe. Some of Patna’s best-known attractions include the Mahabodhi Temple, the ruins of Ancient Nalanda University, the Vaishali Ashokan Pillar, and the Patna Sahib Gurudwara.
        </p>
        <p className="text-gray-800 text-lg mt-4 leading-relaxed">
          The main entrance of NIT Patna is located on Ashok Rajpath, and it is approximately 3 km from Patna's Gandhi Maidan. The campus is conveniently connected to key parts of the city:
        </p>
        <ul className="list-none pl-0 text-gray-800 text-lg mt-4">
          <li className="flex items-center space-x-3">
            <FaAirbnb size={24} className="text-blue-600" /> {/* Airplane Icon */}
            <span>12 km from the Jai Prakash Narayan International Airport.</span>
          </li>
          <li className="flex items-center space-x-3 mt-3">
            <FaTrain size={24} className="text-blue-600" /> {/* Train Icon */}
            <span>8 km from the Patna Junction Railway Station.</span>
          </li>
          <li className="flex items-center space-x-3 mt-3">
            <FaBus size={24} className="text-blue-600" /> {/* Bus Icon */}
            <span>Well-served by buses, making it easily accessible from various parts of the city.</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Venue
