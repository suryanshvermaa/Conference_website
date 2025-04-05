import React from 'react'
import { Link } from 'react-router-dom'

const SmallAbout = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mx-auto w-[80%] h-[80%]">
      <h2 className="m-auto text-center text-3xl font-semibold text-gray-900 mb-4 border-b-2 pb-2">About Us</h2>
      
      <p className="text-gray-700 text-lg mb-4">
      👉  We are a group of developers building a conference website. Our team is passionate about web development and always eager to learn new technologies.
      </p>
      <p className="text-gray-700 text-lg mb-4">
      👉 We hope you enjoy our website and find all the information you need. If you have any questions or feedback, please feel free to reach out to us.
      </p>
      <p className="text-gray-700 text-lg mb-4">
      👉  Thank you for visiting, and we look forward to seeing you at the conference!
      </p>
      <p className="text-gray-700 text-lg mb-4">
      👉  Stay tuned for more updates! We're excited to have you join us on this journey.
      </p>

      <Link to="/about" className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">
        Read more
      </Link>
      <h2 className="m-auto text-center text-3xl font-semibold text-gray-900 mb-4 border-b-2 pb-2">Our <span className='text-gray-500'>Vision</span></h2>
      <p className="text-gray-700 text-lg mb-4">
      👉 To be the go-to platform for knowledge sharing and networking within the [conference's specific industry/topic] community", focusing on creating a valuable and engaging experience for attendees. 
      </p>
    </div>
  )
}

export default SmallAbout
