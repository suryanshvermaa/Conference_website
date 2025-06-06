import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSpeaker = () => {
  const [image, setImage] = useState(null);
  const [prevImage, setPrevImage] = useState(null);
  const [speaker, setSpeaker] = useState({
    name: "",
    specialization: "",
    imageUrl: "",
    description: "",
  });
  const { id } = useParams();
  const navigate=useNavigate();

  const token = localStorage.getItem("token"); // Get the token from localStorage
  useEffect(() => {
    async function getSpeaker() {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/speaker/get/${id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      const speakerData = res.data;
      const specialization = speakerData.specialization?.join(", ") || "";
      setSpeaker({
        name: speakerData.name,
        imageUrl: speakerData.imageUrl,
        description: speakerData.description,
        specialization,
      });
      setPrevImage(speakerData.imageUrl);
    }
    getSpeaker();
  }, []);
  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const imageUr = URL.createObjectURL(file);
      setSpeaker({ ...speaker, imageUrl: imageUr });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Please log in first.");
      return;
    }

    try {
      let imageUrl = speaker.imageUrl;

      if (speaker.imageUrl !== prevImage) {
        const formData = new FormData();
        formData.append("image", image);

        const imageResponse = await axios.post(
          `${import.meta.env.VITE_API_URL}/user/image`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        imageUrl = imageResponse.data.result; // Update imageUrl with the uploaded image URL
      }
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/speaker/update/${id}`,
        { ...speaker, imageUrl },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 201) {
        setSpeaker({
          description: "",
          imageUrl: "",
          name: "",
          specialization: "",
        });
        toast.success(response.data.message);
        setTimeout(()=>{
          navigate("/admin/all-speakers");
        },1000)
      }
    } catch (error) {
      toast.error("Failed to update the speaker. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Update Speaker
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={speaker.name}
              onChange={(e) => setSpeaker({ ...speaker, name: e.target.value })}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter speaker name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Specialization</label>
            <input
              type="text"
              value={speaker.specialization}
              onChange={(e) =>
                setSpeaker({ ...speaker, specialization: e.target.value })
              }
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
              value={speaker.description}
              onChange={(e) =>
                setSpeaker({ ...speaker, description: e.target.value })
              }
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
            {speaker.imageUrl && (
              <div className="mt-4">
                <h3 className="text-gray-700">Image Preview</h3>
                <img
                  src={speaker.imageUrl}
                  alt="Preview"
                  className="w-full mt-2 rounded-lg"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Update Speaker
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default UpdateSpeaker;
