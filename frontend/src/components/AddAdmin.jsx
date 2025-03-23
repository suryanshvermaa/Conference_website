import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAdmin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [imageLink, setImageLink] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // First, upload the image to your API
      const formData = new FormData();
      formData.append('image', image); // Pass the image as 'image' field

      const imageUploadResponse = await axios.post(`${import.meta.env.VITE_API_URL}/user/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const imageUrl = imageUploadResponse.data.result; // Assuming your API returns the image URL in the 'imageUrl' field

      setImageLink(imageUrl); // Store the image URL in the state

      // Now create a new admin with the image URL
      const newAdminData = {
        name,
        email,
        password,
        pic: imageUrl, // Pass the image URL to create the admin
      };

      const createAdminResponse = await axios.post(`${import.meta.env.VITE_API_URL}/user/newuser`, newAdminData,{headers:{token:localStorage.getItem('token')}});
      console.log(createAdminResponse);
      if (createAdminResponse.status === 200) {
        toast.success(createAdminResponse.data.msg);
        // Reset form after successful admin creation
        setName('');
        setEmail('');
        setPassword('');
        setImage(null);
        setImageLink('');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong! Please try again.');
    }
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setImageLink(imageUrl);
    }
  };

  return (
    <div className="add-admin-container flex justify-center items-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Add New Admin</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg"
              required
            />
          </div>
          {imageLink && (
            <div className="mb-4">
              <label className="block text-gray-700">Image Preview</label>
              <img
                src={imageLink}
                alt="Image Preview"
                className="w-full h-auto mt-2 border rounded-lg"
                style={{ objectFit: 'cover', maxHeight: '200px' }}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Image URL (Result)</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-lg"
              value={imageLink}
              readOnly
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition w-full"
          >
            Create Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
