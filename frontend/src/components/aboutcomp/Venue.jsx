import React from 'react'
import { FaAirbnb, FaTrain, FaBus } from 'react-icons/fa'

const Venue = () => {
  return (
    <div>
      <section className="mt-8 py-16 bg-white rounded-xl shadow-lg max-w-5xl px-2">
        <h2 className="text-3xl font-extrabold text-black mb-6 border-b-4 border-blue-500 pb-3 w-full text-center">Venue & Travels</h2>

        <p className="text-black text-lg leading-relaxed">
          <strong className="text-black">The ICNARI-2026</strong> will be held at <strong>NIT Patna, Bihar, India</strong>. The institute’s campus is beautifully situated on the south bank of the River Ganges, behind Gandhi Ghat, one of the most important and sacred places in Patna.
        </p>

        <p className="text-black text-lg mt-4 leading-relaxed">
          Historically known as Patliputra, Patna has long been a hub of knowledge and culture, attracting scholars and visitors from across the globe. Some of Patna’s best-known attractions include the Mahabodhi Temple, the ruins of Ancient Nalanda University, the Vaishali Ashokan Pillar, and the Patna Sahib Gurudwara.
        </p>

        <p className="text-black text-lg mt-4 leading-relaxed">
          The main entrance of NIT Patna is located on Ashok Rajpath, and it is approximately 3 km from Patna's Gandhi Maidan. The campus is conveniently connected to key parts of the city:
        </p>

        <ul className="list-none pl-0 text-black text-lg mt-4">
          <li className="flex items-center space-x-3">
            <FaAirbnb size={22} className="text-black" />
            <span><strong>12 km</strong> from the Jai Prakash Narayan International Airport.</span>
          </li>
          <li className="flex items-center space-x-3 mt-3">
            <FaTrain size={22} className="text-black" />
            <span><strong>8 km</strong> from the Patna Junction Railway Station.</span>
          </li>
          <li className="flex items-center space-x-3 mt-3">
            <FaBus size={22} className="text-black" />
            <span>Well-served by buses, making it easily accessible from various parts of the city.</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Venue
