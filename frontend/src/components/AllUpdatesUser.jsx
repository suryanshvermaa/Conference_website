import React, { useState, useEffect } from 'react';
import axios from 'axios';
const AllUpdatesUser = () => {
    const [updates, setUpdates] = useState([]);
    const token = localStorage.getItem('token');
  
    useEffect(() => {
      // Fetch all updates when the component mounts
      const fetchUpdates = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/recentupdate/all`,
            {
              headers: { token: token },
            }
          );
          setUpdates(response.data);
        } catch (error) {
          console.error('Error fetching updates:', error);
          toast.error('Failed to fetch updates. Please try again.');
        }
      };
      fetchUpdates();
    }, []);
    return <>
    <div className="bg-white shadow-lg rounded-lg p-6 flex-1 border border-gray-200 overflow-hidden">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">🔥 Recent Updates</h2>
          <ul className="space-y-3 max-h-[500px] overflow-y-auto">
            {updates.map((update, index) => (
              <li key={index} className="bg-yellow-100 p-4 rounded-md shadow-md flex justify-between items-center transition-transform duration-300">
                <div>
                  <strong className="text-gray-900">{update.title}</strong>
                  <p className="text-gray-600 text-sm">{update.description}</p>
                </div>
                {update.link && (
                  <a href={update.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                      View
                    </button>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
    </>
}
export default AllUpdatesUser