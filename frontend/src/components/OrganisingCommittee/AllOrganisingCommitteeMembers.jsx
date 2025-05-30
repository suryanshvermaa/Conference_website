import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllOrganisingCommitteeMembers = () => {
  const [organisingMembers, setOrganisingMembers] = useState([]);
  const token = localStorage.getItem('token');

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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-3xl font-semibold text-center mb-8">All Organising Committee Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {organisingMembers.map((member) => (
          <div key={member._id} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-full h-48 bg-gray-200 mb-4">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">{member.name}</h3>
              <p className="text-gray-700 mb-4">
                {member.specialization.join(', ')}
              </p>
              <p className="text-gray-700 mb-4">
                    <b>{member.college}</b>
                </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleDelete(member._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
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
