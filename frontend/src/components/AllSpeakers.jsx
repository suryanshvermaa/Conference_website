import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

const AllSpeakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const token = localStorage.getItem('token');
  const navigate=useNavigate();

  useEffect(() => {
    // Fetch all speakers when the component mounts
    const fetchSpeakers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/speaker/all`
        );
        console.log(response.data)
        setSpeakers(response.data);
      } catch (error) {
        console.error('Error fetching speakers:', error);
        toast.error('Failed to fetch speakers. Please try again.');
      }
    };
    fetchSpeakers();
  }, []);

  // Handle delete speaker
  const handleDelete = async (id) => {
    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/speaker/delete/${id}`,
        {
          headers: { token: token },
        }
      );
      toast.success(response.data.message);
      // Remove the deleted speaker from the state
      setSpeakers(speakers.filter((speaker) => speaker._id !== id));
    } catch (error) {
      console.error('Error deleting speaker:', error);
      toast.error('Failed to delete speaker. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-3xl font-semibold text-center mb-8">All Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {speakers.map((speaker) => (
          <div key={speaker._id} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-full h-48 bg-gray-200 mb-4">
              <img
                src={speaker.imageUrl}
                alt={speaker.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">{speaker.name}</h3>
              <p className="text-gray-700 mb-4">
                {speaker.specialization.join(', ')}
              </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleDelete(speaker._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/admin/all-speakers/update/${speaker._id}`)}
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AllSpeakers;
