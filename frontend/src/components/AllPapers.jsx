import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLoader from './AdminLoader';

const AllPapers = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchPapers = async () => {
      setLoading(true);
      try {
        const skip = (currentPage - 1) * pageSize;
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/papers/all?skip=${skip}&limit=${pageSize}`
        );
        setPapers(response.data.data);
        setTotalCount(response.data.totalCount);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching papers:', error);
        toast.error('Failed to fetch papers. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchPapers();
  }, [currentPage, pageSize]);

  const handleDelete = async (id) => {
    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/papers/delete/${id}`,
        {
          headers: { token: token },
        }
      );
      toast.success(response.data.message);
      setPapers(papers.filter((paper) => paper._id !== id));

      if (papers.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (error) {
      console.error('Error deleting paper:', error);
      toast.error('Failed to delete paper. Please try again.');
    }
  };

  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, totalCount);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="admin-title">All Papers</h2>
        <p className="admin-muted mt-1">Review and remove published papers.</p>
      </div>

      {loading ? (
        <div className="admin-card">
          <div className="admin-card-inner">
            <AdminLoader label="Loading papers..." />
          </div>
        </div>
      ) : papers.length === 0 ? (
        <p className="text-center text-zinc-600 text-sm">No papers found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {papers.map((paper) => (
              <div key={paper._id} className="admin-card flex flex-col">
                <div className="admin-card-inner flex flex-col flex-1">
                <div className="flex-grow">
                  <h3 className="text-base font-semibold text-zinc-900 mb-2 line-clamp-2">{paper.heading}</h3>
                  <p className="text-zinc-700 text-sm mb-4 line-clamp-4">{paper.content.slice(0, 150)}...</p>
                  {paper.link && (
                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:text-indigo-800 text-sm mb-4 inline-block">
                      View Paper Link
                    </a>
                  )}
                  <p className="text-zinc-600 text-sm mb-4">
                    Authors: {paper.authors.join(', ')}
                  </p>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => handleDelete(paper._id)}
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

export default AllPapers;
