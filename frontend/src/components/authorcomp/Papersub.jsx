import React from 'react'
import { Link } from 'react-router-dom'

const Papersub = () => {
  return (
    <div className="py-16 bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto my-8">
      <section className="p-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Paper Submission</h2>
        <p className="text-gray-600 text-lg mb-6">How and where to submit your research paper.</p>
        <ul className="list-disc pl-6 text-gray-700 text-lg">
          <li><strong className="font-semibold">Submission Starts:</strong> June 16, 2025</li>
          <li><strong className="font-semibold">Paper Submission Deadline:</strong> November 28, 2025</li>
          <li><strong className="font-semibold">Notification Acceptance:</strong> December 29, 2025</li>
          <li><strong className="font-semibold">Date of Conference:</strong>March 6th - 8th, 2026</li>
          <li><strong className="font-semibold">Early Bird Registration:</strong>January 25, 2026</li>
          <li><strong className="font-semibold">Camera-Ready Submission:</strong> February 16, 2026</li>
          <li>
            <strong className="font-semibold">Submission link:</strong> 
            <Link to="#" className="text-blue-600 underline hover:text-blue-800">Click here</Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Papersub;
