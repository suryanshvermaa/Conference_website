import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPhotoGallery = () => {
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token');

  // Handle image selection and show preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const imageUr = URL.createObjectURL(file);
    setImageUrl(imageUr);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error('Please upload an image.');
      return;
    }

    if (!tags) {
      toast.error('Please enter tags.');
      return;
    }

    setLoading(true);

    // Create form data to send the image to cloudinary
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        }
      );

      const imageUrl = response.data.result; // Get the image URL from response
    //   const tagsArray = tags.split(',').map(tag => tag.trim()); // Split tags by commas

      // Now add the image URL and tags to the database
      const galleryData = {
        imageUrl,
        tags: tags,
      };

      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/photogallery/upload`,
        galleryData,
        {
          headers: {
            token: token,
          },
        }
      );

      toast.success(result.data.message);
      setImage(null);
      setTags('');
      setImageUrl('');
    } catch (error) {
      console.error('Error uploading image or adding gallery:', error);
      toast.error('Failed to upload image or add to gallery.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Add New Photo to Gallery</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {imageUrl && (
              <div className="mt-4">
                <img src={imageUrl} alt="Image Preview" className="max-w-full h-auto rounded-md" />
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Tags</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter tags separated by commas"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Add Photo to Gallery'}
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AddPhotoGallery;
