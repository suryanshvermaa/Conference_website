import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddRecentUpdates = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [eventDate, setEventDate] = useState('');

  const token = localStorage.getItem('token'); // Get the token from localStorage

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    // Convert the date to the required format
    const formattedDate = new Date(eventDate).toISOString();

    const updateData = {
      title,
      description,
      link: link || '', // Add link if available, else pass an empty string
      eventDate: formattedDate,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/recentupdate/add`,
        updateData,
        {
          headers: {
            token: token,
          },
        }
      );

      if (response.status === 201) {
        toast.success(response.data.message);   
        // Reset form after successful submission
        setTitle('');
        setDescription('');
        setLink('');
        setEventDate('');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center mb-6">Add New Update</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter update title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter update description"
              rows="5"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Link (Optional)</label>
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a link if available"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Event Date</label>
            <input
              type="datetime-local"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Update
          </button>
        </form>
      </div>

      {/* ToastContainer with position set to bottom-center */}
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AddRecentUpdates;
