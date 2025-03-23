import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPaper = () => {
  const [heading, setHeading] = useState('');
  const [authors, setAuthors] = useState('');
  const [link, setLink] = useState(''); // Link is optional
  const [content, setContent] = useState('');

  const token = localStorage.getItem('token');  // Get the token from localStorage

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    // Split authors by commas and remove extra spaces
    

    const newPaperData = {
      heading,
      authors: authors,
      link: link || '', // If no link, send an empty string
      content,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/papers/add`,
        newPaperData,
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(response);
      if (response.status === 201) {
        toast.success(response.data.message);
        setHeading('');
        setAuthors('');
        setLink('');
        setContent('');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to add the paper. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center mb-6">Add New Paper</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Heading</label>
            <input
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter paper heading"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Authors</label>
            <input
              type="text"
              value={authors}
              onChange={(e) => setAuthors(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter authors' names separated by commas"
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
              placeholder="Enter paper link (Optional)"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter paper content"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Paper
          </button>
        </form>
        <ToastContainer position="bottom-center" />
      </div>
    </div>
  );
};

export default AddPaper;
