import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import AdminLoader from './AdminLoader';

const AllSpeakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [priorities, setPriorities] = useState({});
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const navigate=useNavigate();

  useEffect(() => {
    // Fetch all speakers when the component mounts
    const fetchSpeakers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/speaker/all`
        );
        console.log(response.data)
        setSpeakers(response.data);
        // Initialize priorities state with current speaker priorities
        const initialPriorities = {};
        response.data.forEach(speaker => {
          initialPriorities[speaker._id] = speaker.priority || 0;
        });
        setPriorities(initialPriorities);
      } catch (error) {
        console.error('Error fetching speakers:', error);
        toast.error('Failed to fetch speakers. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchSpeakers();
  }, []);

  // Handle priority change
  const handlePriorityChange = (speakerId, newPriority) => {
    setPriorities(prev => ({
      ...prev,
      [speakerId]: parseInt(newPriority) || 0
    }));
  };

  // Handle set priority
  const handleSetPriority = async (id) => {
    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    try {
      const priority = priorities[id];
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/speaker/setPriority/${id}`,
        { priority },
        {
          headers: { token: token },
        }
      );
      toast.success('Priority updated successfully!');
      // Update the speaker in the state
      setSpeakers(speakers.map(speaker => 
        speaker._id === id ? { ...speaker, priority } : speaker
      ));
    } catch (error) {
      console.error('Error setting priority:', error);
      toast.error('Failed to set priority. Please try again.');
    }
  };

  // Handle delete speaker
  const handleDelete = async (id) => {
    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/speaker/delete/${id}`,
        {
          headers: { token: token },
        }
      );
      toast.success(response.data.message);
      // Remove the deleted speaker from the state
      setSpeakers(speakers.filter((speaker) => speaker._id !== id));
    } catch (error) {
      console.error('Error deleting speaker:', error);
      toast.error('Failed to delete speaker. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="admin-title">All Speakers</h2>
        <p className="admin-muted mt-1">Manage speaker profiles and priority.</p>
      </div>
      {loading ? (
        <div className="admin-card">
          <div className="admin-card-inner">
            <AdminLoader label="Loading speakers..." />
          </div>
        </div>
      ) : speakers.length === 0 ? (
        <p className="text-center text-zinc-600 text-sm">No speakers found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {speakers.map((speaker) => (
            <div key={speaker._id} className="admin-card overflow-hidden">
              {/* Image Section */}
              <div className="w-full h-44 bg-zinc-100">
                <img
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-4">
                {/* Speaker Info */}
                <div className="mb-3">
                  <h3 className="font-semibold text-base mb-1 text-zinc-900 truncate">{speaker.name}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed line-clamp-2">
                    {speaker.specialization.join(', ')}
                  </p>
                </div>

                {/* Priority Section */}
                <div className="mb-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-zinc-700">Priority</span>
                    <span className="rounded bg-zinc-100 text-zinc-800 text-xs px-2 py-0.5">
                      {speaker.priority || 0}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <input
                      type="number"
                      min="0"
                      value={priorities[speaker._id] || 0}
                      onChange={(e) => handlePriorityChange(speaker._id, e.target.value)}
                      className="admin-input py-1.5 text-xs"
                      placeholder="0"
                    />
                    <button
                      onClick={() => handleSetPriority(speaker._id)}
                      className="admin-button-primary px-3 py-1.5 text-xs"
                    >
                      Set
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDelete(speaker._id)}
                    className="admin-button-danger flex-1 py-2 text-xs"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => navigate(`/admin/all-speakers/update/${speaker._id}`)}
                    className="admin-button-primary flex-1 py-2 text-xs"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AllSpeakers;
