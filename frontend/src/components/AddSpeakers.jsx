import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSpeaker = () => {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [desription,setdescription]=useState('')

  const token = localStorage.getItem('token');  // Get the token from localStorage

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const imageUr = URL.createObjectURL(file);
      setImageUrl(imageUr);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    // Upload image to Cloudinary
    const formData = new FormData();
    formData.append('image', image);

    try {
      // Replace with your Cloudinary upload API
      const imageResponse = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        }
      );

      if (imageResponse.data.result) {
        const speakerData = {
          name,
          specialization: specialization, // Split by commas
          imageUrl: imageResponse.data.result,
          description:desription
        };

        // Now add the speaker data
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/speaker/create`,
          speakerData,
          {
            headers: {
              token:localStorage.getItem('token'),
            },
          }
        );
        console.log(response);
        if (response.status === 201) {
          toast.success(response.data.message);
          setName('');
          setSpecialization('');
          setImage(null);
          setImageUrl('');
          setdescription('')
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to add the speaker. Please try again.');
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="admin-card">
        <div className="admin-card-inner">
          <div className="mb-6">
            <h2 className="admin-title">Add Speaker</h2>
            <p className="admin-muted mt-1">Create a new speaker profile.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="admin-label">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="admin-input"
                placeholder="Enter speaker name"
                required
              />
            </div>

            <div>
              <label className="admin-label">Specialization</label>
              <input
                type="text"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                className="admin-input"
                placeholder="Enter speaker's specialization separated by commas"
                required
              />
            </div>
            <div>
              <label className="admin-label">Description</label>
              <textarea
                rows="4"
                type="text"
                value={desription}
                onChange={(e) => setdescription(e.target.value)}
                className="admin-textarea"
                placeholder="Enter a short bio/description"
                required
              />
            </div>

            <div>
              <label className="admin-label">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2 block w-full text-sm text-zinc-700 file:mr-3 file:rounded-lg file:border-0 file:bg-zinc-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-zinc-700 hover:file:bg-zinc-200"
              />
              {imageUrl && (
                <div className="mt-4">
                  <div className="admin-muted">Preview</div>
                  <img src={imageUrl} alt="Preview" className="mt-2 w-full rounded-xl border border-zinc-200" />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="admin-button-primary w-full"
            >
              Add Speaker
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AddSpeaker;
