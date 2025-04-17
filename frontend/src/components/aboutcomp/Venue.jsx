import React from 'react'
import { FaPlaneArrival, FaTrain, FaBus } from 'react-icons/fa'

const Venue = () => {
  return (
    <div className="flex w-full justify-center items-center flex-col">
      <section className="mt-8 py-16 bg-white rounded-xl shadow-lg w-full max-w-5xl px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-6 border-b-4 border-blue-500 pb-3 text-center">
          Venue & Travel
        </h2>

        <p className="text-black text-base md:text-lg lg:text-xl leading-relaxed">
          <strong>ICNARI-2026</strong> will be held at <strong>NIT Patna, Bihar, India</strong>. The institute is beautifully situated on the south bank of the River Ganges, behind Gandhi Ghat, one of the most sacred places in Patna.
        </p>

        <p className="text-black text-base md:text-lg lg:text-xl mt-4 leading-relaxed">
          Historically known as Patliputra, Patna has long been a hub of knowledge and culture, attracting scholars and travelers from around the world. Notable attractions include the Mahabodhi Temple, the ruins of Ancient Nalanda University, the Vaishali Ashokan Pillar, and Patna Sahib Gurudwara.
        </p>

        <p className="text-black text-base md:text-lg lg:text-xl mt-4 leading-relaxed">
          The main entrance of NIT Patna is on Ashok Rajpath, approximately 3 km from Gandhi Maidan. The campus is well-connected to key city points:
        </p>

        <ul className="text-black text-base md:text-lg lg:text-xl mt-4 space-y-4">
          <li className="flex items-center space-x-3">
            <FaPlaneArrival className="text-blue-600" size={20} />
            <span><strong>12 km</strong> from Jai Prakash Narayan International Airport</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaTrain className="text-blue-600" size={20} />
            <span><strong>8 km</strong> from Patna Junction Railway Station</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaBus className="text-blue-600" size={20} />
            <span>Easily accessible by city buses and local transport</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Venue
