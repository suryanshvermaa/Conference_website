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
    <div className="mx-auto w-full max-w-3xl">
      <div className="admin-card">
        <div className="admin-card-inner">
          <div className="mb-6">
            <h2 className="admin-title">Upload Photo</h2>
            <p className="admin-muted mt-1">Add an image to the photo gallery.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="admin-label">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2 block w-full text-sm text-zinc-700 file:mr-3 file:rounded-lg file:border-0 file:bg-zinc-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-zinc-700 hover:file:bg-zinc-200"
                required
              />
              {imageUrl && (
                <div className="mt-4">
                  <img src={imageUrl} alt="Image Preview" className="w-full rounded-xl border border-zinc-200" />
                </div>
              )}
            </div>

            <div>
              <label className="admin-label">Tags</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="admin-input"
                placeholder="Enter tags separated by commas"
                required
              />
            </div>

            <button
              type="submit"
              className="admin-button-primary w-full"
              disabled={loading}
            >
              {loading ? 'Uploading...' : 'Add Photo to Gallery'}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AddPhotoGallery;
