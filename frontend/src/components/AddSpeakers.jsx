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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center mb-6">Add New Speaker</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter speaker name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Specialization</label>
            <input
              type="text"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter speaker's specialization separated by commas"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              rows="4"
              type="text"
              value={desription}
              onChange={(e) => setdescription(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter speaker's specialization separated by commas"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full mt-2"
            />
            {imageUrl && (
              <div className="mt-4">
                <h3 className="text-gray-700">Image Preview</h3>
                <img src={imageUrl} alt="Preview" className="w-full mt-2 rounded-lg" />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Speaker
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AddSpeaker;
