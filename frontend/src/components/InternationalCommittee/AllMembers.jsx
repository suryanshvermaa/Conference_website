import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import AdminLoader from '../AdminLoader';
const AllInternationalAdvisoryCommitteeMembers = () => {
  const [organisingMembers, setOrganisingMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const navigate=useNavigate();

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/internationalcommitee/getAllMembers`,
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
      } finally {
        setLoading(false);
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
        `${import.meta.env.VITE_API_URL}/internationalcommitee/deleteMember/${id}`,
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
    <div className="mx-auto w-full max-w-6xl">
      <div className="mb-6">
        <h2 className="admin-title">All International Advisory Committee Members</h2>
        <p className="admin-muted mt-1">Manage existing members and update details.</p>
      </div>

      {loading ? (
        <div className="admin-card">
          <div className="admin-card-inner">
            <AdminLoader label="Loading members..." />
          </div>
        </div>
      ) : organisingMembers.length === 0 ? (
        <p className="text-center text-zinc-600 text-sm">No members found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {organisingMembers.map((member) => (
            <div key={member._id} className="admin-card overflow-hidden">
              <div className="h-44 w-full bg-zinc-100">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

                <div className="admin-card-inner">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-zinc-900">{member.name}</h3>
                    <div className="admin-muted mt-1 line-clamp-2">
                      {member.specialization.join(', ')}
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-sm text-zinc-700">
                  <span className="font-semibold">{member.college}</span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => handleDelete(member._id)}
                    className="admin-button-danger w-full"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => navigate(`/admin/all-international-members/${member._id}`)}
                    className="admin-button-primary w-full"
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

export default AllInternationalAdvisoryCommitteeMembers;
