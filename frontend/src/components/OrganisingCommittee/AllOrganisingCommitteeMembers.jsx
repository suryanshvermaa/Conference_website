import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
const AllOrganisingCommitteeMembers = () => {
  const [organisingMembers, setOrganisingMembers] = useState([]);
  const [priorityValues, setPriorityValues] = useState({});
  const token = localStorage.getItem('token');
  const navigate=useNavigate();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/organisingcommitee/getAllMembers`,
          {
            headers:{
                token:token
            }
          }
        );
        setOrganisingMembers(response.data.members);
      } catch (error) {
        console.error('Error fetching members:', error);
        toast.error('Failed to fetch members. Please try again.');
      }
    };
    fetchMembers();
  }, []);

  // Handle delete speaker
  const handleDelete = async (id) => {
    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/organisingcommitee/deleteMember/${id}`,
        {
          headers: { token: token },
        }
      );
      toast.success(response.data.message);
      // Remove the deleted speaker from the state
      setOrganisingMembers(orgMembers=>orgMembers.filter((member) => member._id !== id));
    } catch (error) {
      console.error('Error deleting member:', error);
      toast.error('Failed to delete member. Please try again.');
    }
  };

  // Handle set priority
  const handleSetPriority = async (id) => {
    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    const priority = priorityValues[id];
    
    // Check if priority value is provided
    if (!priority || priority.trim() === '') {
      toast.error('Please enter a priority value.');
      return;
    }

    // Validate that it's a number
    const priorityNum = parseInt(priority, 10);
    if (isNaN(priorityNum)) {
      toast.error('Please enter a valid number for priority.');
      return;
    }

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/organisingcommitee/setPriority/${id}`,
        { priority: priorityNum },
        {
          headers: { token: token },
        }
      );
      toast.success(response.data.message || 'Priority updated successfully');
      
      // Clear the input field after successful update
      setPriorityValues(prev => ({ ...prev, [id]: '' }));
      
      // Optionally refresh the members list to reflect any changes
      const updatedResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/organisingcommitee/getAllMembers`,
        {
          headers: { token: token }
        }
      );
      setOrganisingMembers(updatedResponse.data.members);
    } catch (error) {
      console.error('Error setting priority:', error);
      toast.error('Failed to set priority. Please try again.');
    }
  };

  // Handle priority input change
  const handlePriorityInputChange = (id, value) => {
    setPriorityValues(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-3xl font-semibold text-center mb-8">All Organising Committee Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {organisingMembers.map((member) => (
          <div key={member._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="w-full h-48 bg-gray-200 flex-shrink-0">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">{member.name}</h3>
              <p className="text-gray-600 mb-2 text-sm line-clamp-2">
                {member.specialization.join(', ')}
              </p>
              <p className="text-gray-700 mb-3 font-medium text-sm line-clamp-2">
                {member.college}
              </p>
              
              {/* Priority Section */}
              <div className="mb-3 p-2 bg-gray-50 rounded-lg flex-shrink-0">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-medium text-gray-700">
                    Set Priority
                  </label>
                  {member.priority && (
                    <span className="text-xs text-blue-600 font-medium">
                      Current: {member.priority}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Priority"
                    value={priorityValues[member._id] || ''}
                    onChange={(e) => handlePriorityInputChange(member._id, e.target.value)}
                    className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => handleSetPriority(member._id)}
                    className="bg-blue-500 text-white py-1 px-2 text-xs rounded hover:bg-blue-600 transition-colors duration-200 font-medium"
                  >
                    Set
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-auto">
                <button
                  onClick={() => navigate(`/admin/all-organising-members/${member._id}`)}
                  className="flex-1 bg-green-500 text-white py-2 px-2 text-xs rounded hover:bg-green-600 transition-colors duration-200 font-medium"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(member._id)}
                  className="flex-1 bg-red-500 text-white py-2 px-2 text-xs rounded hover:bg-red-600 transition-colors duration-200 font-medium"
                >
                  Delete
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

export default AllOrganisingCommitteeMembers;
