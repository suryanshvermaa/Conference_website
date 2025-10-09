import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

const AllSpeakers = () => {
  const [speakers, setSpeakers] = useState([]);
  const [priorities, setPriorities] = useState({});
  const token = localStorage.getItem('token');
  const navigate=useNavigate();

  useEffect(() => {
    // Fetch all speakers when the component mounts
    const fetchSpeakers = async () => {
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
      const response = await axios.put(
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
    <div className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-3xl font-semibold text-center mb-8">All Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {speakers.map((speaker) => (
          <div key={speaker._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            {/* Image Section */}
            <div className="w-full h-40 bg-gray-200">
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
                <h3 className="font-semibold text-base mb-1 text-gray-900 truncate">{speaker.name}</h3>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                  {speaker.specialization.join(', ')}
                </p>
              </div>
              
              {/* Priority Section */}
              <div className="mb-3 p-2 bg-gray-50 rounded border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-700">Priority</span>
                  <span className="bg-gray-200 text-gray-800 text-xs px-2 py-0.5 rounded">
                    {speaker.priority || 0}
                  </span>
                </div>
                <div className="flex gap-1">
                  <input
                    type="number"
                    min="0"
                    value={priorities[speaker._id] || 0}
                    onChange={(e) => handlePriorityChange(speaker._id, e.target.value)}
                    className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
                    placeholder="0"
                  />
                  <button
                    onClick={() => handleSetPriority(speaker._id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600 transition-colors"
                  >
                    Set
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(speaker._id)}
                  className="flex-1 bg-red-500 text-white py-1.5 px-2 rounded hover:bg-red-600 transition-colors text-xs font-medium"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/admin/all-speakers/update/${speaker._id}`)}
                  className="flex-1 bg-green-500 text-white py-1.5 px-2 rounded hover:bg-green-600 transition-colors text-xs font-medium"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AllSpeakers;
