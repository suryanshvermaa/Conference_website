import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import AdminLoader from "./AdminLoader";

const UpdateSpeaker = () => {
  const [image, setImage] = useState(null);
  const [prevImage, setPrevImage] = useState(null);
  const [loading, setLoading] = useState(true);
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
      setLoading(true);
      try {
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
      } catch (error) {
        toast.error("Failed to load speaker details. Please try again.");
      } finally {
        setLoading(false);
      }
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
    <div className="mx-auto w-full max-w-3xl">
      <div className="admin-card">
        <div className="admin-card-inner">
          <div className="mb-6">
            <h2 className="admin-title">Update Speaker</h2>
            <p className="admin-muted mt-1">Edit speaker details and image.</p>
          </div>

        {loading ? (
          <AdminLoader label="Loading speaker..." />
        ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="admin-label">Name</label>
            <input
              type="text"
              value={speaker.name}
              onChange={(e) => setSpeaker({ ...speaker, name: e.target.value })}
              className="admin-input"
              placeholder="Enter speaker name"
              required
            />
          </div>

          <div>
            <label className="admin-label">Specialization</label>
            <input
              type="text"
              value={speaker.specialization}
              onChange={(e) =>
                setSpeaker({ ...speaker, specialization: e.target.value })
              }
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
              value={speaker.description}
              onChange={(e) =>
                setSpeaker({ ...speaker, description: e.target.value })
              }
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
            {speaker.imageUrl && (
              <div className="mt-4">
                <div className="admin-muted">Preview</div>
                <img
                  src={speaker.imageUrl}
                  alt="Preview"
                  className="mt-2 w-full rounded-xl border border-zinc-200"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="admin-button-primary w-full"
          >
            Update Speaker
          </button>
        </form>
		)}
      </div>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default UpdateSpeaker;
