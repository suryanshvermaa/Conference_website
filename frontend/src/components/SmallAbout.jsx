import React from 'react'
import { Link } from 'react-router-dom'

const SmallAbout = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mx-auto w-[80%] h-[80%]">
      <h2 className="m-auto text-center text-3xl font-semibold text-gray-900 mb-4 border-b-2 pb-2">About Conference</h2>
      <p className='text-lg'>The International Conference on Next-Generation Adaptive Research and Innovations (ICNARI-2026), organized by the Department of Electrical Engineering at the National Institute of Technology, Patna, Bihar, India, is scheduled to take place in hybrid mode on 7th March 2026 and 8th March 2026. The conference aims to bring together leading visionaries, researchers, academicians, and industry experts to explore the latest advancements and innovations while showcasing cutting-edge developments in various fields of electrical engineering and sustainable technologies.
      <Link to="/about/about-the-conference" className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">
        Read more
      </Link>
      </p>
      <h2 className="m-auto text-center text-3xl font-semibold text-gray-900 mb-4 border-b-2 pb-2 mt-6">About NIT PATNA</h2>
      <p className='text-lg'>The immersion of ashes of the Father of the Nation, Mahatma Gandhi, in the river Ganges is a significant historical event. The campus has a picturesque river view with historic buildings, presenting a spectacle of architectural delight and natural beauty.

National Institute of Technology Patna has been declared as an Institute of National Importance and has been granted fully Autonomous Status by MHRD, Government of India. The Institute has also been declared as a Centre of Excellence, imparting high-level education, training, research, and development in science, engineering technology, and humanities.

It is imparting high-quality education & values at UG (B. Tech), PG (M. Tech) & Ph. D programmes through its experienced faculty well-versed in their respective fields of engineering and technology with well-equipped laboratories. At present, the Institute has seven disciplines viz. Architecture, Civil Engineering, Computer Science & Engg., Electrical Engg., Electronics & Communication Engg., Information Technology and Mechanical Engg., and well-established departments of Physics, Mathematics, and Humanities and Social Science.
      <Link to="/about/about-nit-patna" className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">
        Read more
      </Link>
      </p>
      
    </div>
  )
}

export default SmallAbout
