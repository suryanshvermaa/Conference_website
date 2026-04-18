import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLoader from './AdminLoader';

const AllUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUpdates = async () => {
      setLoading(true);
      try {
        const skip = (currentPage - 1) * pageSize;
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/recentupdate/all?skip=${skip}&limit=${pageSize}`,
          {
            headers: { token: token },
          }
        );
        setUpdates(response.data.data);
        setTotalCount(response.data.totalCount);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching updates:', error);
        toast.error('Failed to fetch updates. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchUpdates();
  }, [currentPage, pageSize, token]);

  const handleDelete = async (id) => {
    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/recentupdate/delete/${id}`,
        {
          headers: { token: token },
        }
      );
      toast.success(response.data.message);
      setUpdates(updates.filter((update) => update._id !== id));

      if (updates.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (error) {
      console.error('Error deleting update:', error);
      toast.error('Failed to delete update. Please try again.');
    }
  };

  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, totalCount);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="admin-title">All Updates</h2>
        <p className="admin-muted mt-1">Manage announcements and event updates.</p>
      </div>

      {loading ? (
        <div className="admin-card">
          <div className="admin-card-inner">
            <AdminLoader label="Loading updates..." />
          </div>
        </div>
      ) : updates.length === 0 ? (
        <p className="text-center text-zinc-600 text-sm">No updates found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {updates.map((update) => (
              <div key={update._id} className="admin-card flex flex-col">
                <div className="admin-card-inner flex flex-col flex-1">
                  <div className="flex-grow">
                  <h3 className="text-base font-semibold text-zinc-900 mb-2 line-clamp-2">{update.title}</h3>
                  <p className="text-zinc-700 text-sm mb-4 line-clamp-4">{update.description.slice(0, 150)}...</p>
                  {update.link && (
                    <a href={update.link} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:text-indigo-800 text-sm mb-4 inline-block">
                      View Update Link
                    </a>
                  )}
                  <p className="text-zinc-600 text-sm mb-4">Event Date: {new Date(update.eventDate).toLocaleString()}</p>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => handleDelete(update._id)}
                    className="admin-button-danger w-full"
                  >
                    Delete
                  </button>
                </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6 p-4 bg-zinc-50 rounded-lg">
            <span className="text-sm text-zinc-600">
              Showing {startIndex}–{endIndex} of {totalCount} total
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium rounded border border-zinc-300 text-zinc-700 hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Prev
              </button>
              <span className="px-4 py-2 text-sm font-medium text-zinc-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium rounded border border-zinc-300 text-zinc-700 hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AllUpdates;
