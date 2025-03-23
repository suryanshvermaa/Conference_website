import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllUpdates = () => {
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

  // Handle delete update
  const handleDelete = async (id) => {
    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/recentupdate/delete/${id}`,
        {
          headers: { token: token },
        }
      );
      toast.success(response.data.message);
      // Remove the deleted update from the state
      setUpdates(updates.filter((update) => update._id !== id));
    } catch (error) {
      console.error('Error deleting update:', error);
      toast.error('Failed to delete update. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold text-center mb-8">All Updates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {updates.map((update) => (
          <div key={update._id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-2">{update.title}</h3>
              <p className="text-gray-700 mb-4">{update.description.slice(0, 150)}...</p> {/* Show description preview */}
              {update.link && (
                <a href={update.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 mb-4">
                  View Update Link
                </a>
              )}
              <p className="text-gray-600 mb-4">Event Date: {new Date(update.eventDate).toLocaleString()}</p> {/* Format event date */}
            </div>
            <div className="mt-auto">
              <button
                onClick={() => handleDelete(update._id)}
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

export default AllUpdates;
