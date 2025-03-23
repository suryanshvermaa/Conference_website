import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllPapers = () => {
  const [papers, setPapers] = useState([]);
  const token = localStorage.getItem('token');

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

  // Handle delete paper
  const handleDelete = async (id) => {
    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/papers/delete/${id}`,
        {
          headers: { token: token },
        }
      );
      toast.success(response.data.message);
      // Remove the deleted paper from the state
      setPapers(papers.filter((paper) => paper._id !== id));
    } catch (error) {
      console.error('Error deleting paper:', error);
      toast.error('Failed to delete paper. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold text-center mb-8">All Papers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {papers.map((paper) => (
          <div key={paper._id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-2">{paper.heading}</h3>
              <p className="text-gray-700 mb-4">{paper.content.slice(0, 150)}...</p> {/* Show content preview */}
              {paper.link && (
                <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mb-4">
                  View Paper Link
                </a>
              )}
              <p className="text-gray-600 mb-4">
                Authors: {paper.authors.join(', ')}
              </p>
            </div>
            <div className="mt-auto">
              <button
                onClick={() => handleDelete(paper._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 w-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AllPapers;
