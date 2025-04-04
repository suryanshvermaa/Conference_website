import React, { useState, useEffect } from 'react';
import axios from 'axios';
const AllPapersUser = () => {
    const [papers, setPapers] = useState([]);

  useEffect(() => {
    // Fetch all papers when the component mounts
    const fetchPapers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/papers/all`
        );
        setPapers(response.data);
      } catch (error) {
        console.error('Error fetching papers:', error);
        toast.error('Failed to fetch papers. Please try again.');
      }
    };
    fetchPapers();
  }, []);
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex-1 border h-[60%] border-gray-200 overflow-hidden">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">📄 Papers Received</h2>
          <ul className="space-y-3 max-h-[500px] overflow-y-auto">
            {papers.map((paper, index) => (
              <li key={index} className="bg-yellow-100 p-4 rounded-md shadow-md flex justify-between items-center transition-transform duration-300">
                <div>
                  <strong className="text-gray-900">{paper.heading}</strong>
                  <p className="text-gray-600 text-sm">Authors: {paper.authors.join(", ")}</p>
                </div>
                {paper.link && (
                  <a href={paper.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                      View
                    </button>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default AllPapersUser
