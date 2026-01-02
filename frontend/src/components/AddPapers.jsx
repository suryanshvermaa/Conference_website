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
    <div className="mx-auto w-full max-w-3xl">
      <div className="admin-card">
        <div className="admin-card-inner">
          <div className="mb-6">
            <h2 className="admin-title">Add Paper</h2>
            <p className="admin-muted mt-1">Publish a paper entry on the site.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="admin-label">Heading</label>
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className="admin-input"
                placeholder="Enter paper heading"
                required
              />
            </div>

            <div>
              <label className="admin-label">Authors</label>
              <input
                type="text"
                value={authors}
                onChange={(e) => setAuthors(e.target.value)}
                className="admin-input"
                placeholder="Enter authors' names separated by commas"
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
                placeholder="Enter paper link (Optional)"
              />
            </div>

            <div>
              <label className="admin-label">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="admin-textarea"
                placeholder="Enter paper content"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="admin-button-primary w-full"
            >
              Add Paper
            </button>
          </form>
        </div>
        <ToastContainer position="bottom-center" />
      </div>
    </div>
  );
};

export default AddPaper;
