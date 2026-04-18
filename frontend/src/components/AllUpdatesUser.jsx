import React, { useState, useEffect } from 'react';
import axios from 'axios';
const AllUpdatesUser = () => {
    const [updates, setUpdates] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const token = localStorage.getItem('token');

    useEffect(() => {
      const fetchUpdates = async () => {
        try {
          const skip = (currentPage - 1) * pageSize;
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/recentupdate/all?skip=${skip}&limit=${pageSize}`,
            {
              headers: { token: token },
            }
          );
          setUpdates(response.data.data);
          setTotalCount(response.data.totalCount);
          setTotalPages(response.data.totalPages);
        } catch (error) {
          console.error('Error fetching updates:', error);
        }
      };
      fetchUpdates();
    }, [currentPage, pageSize, token]);

    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(currentPage * pageSize, totalCount);

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
          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <span className="text-sm text-gray-600">
              Showing {startIndex}–{endIndex} of {totalCount} total
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm font-medium rounded border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Prev
              </button>
              <span className="px-3 py-1 text-sm font-medium text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm font-medium rounded border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
    </>
}
export default AllUpdatesUser