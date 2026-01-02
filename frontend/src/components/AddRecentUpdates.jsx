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
    <div className="mx-auto w-full max-w-3xl">
      <div className="admin-card">
        <div className="admin-card-inner">
          <div className="mb-6">
            <h2 className="admin-title">Add Update</h2>
            <p className="admin-muted mt-1">Post an announcement or important update.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="admin-label">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="admin-input"
                placeholder="Enter update title"
                required
              />
            </div>

            <div>
              <label className="admin-label">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="admin-textarea"
                placeholder="Enter update description"
                rows="5"
                required
              />
            </div>

            <div>
              <label className="admin-label">Link (Optional)</label>
              <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="admin-input"
                placeholder="Add a link if available"
              />
            </div>

            <div>
              <label className="admin-label">Event Date</label>
              <input
                type="datetime-local"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="admin-input"
                required
              />
            </div>

            <button
              type="submit"
              className="admin-button-primary w-full"
            >
              Add Update
            </button>
          </form>
      </div>
      </div>

      {/* ToastContainer with position set to bottom-center */}
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AddRecentUpdates;
