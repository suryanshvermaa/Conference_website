import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLoader from './AdminLoader';

const AllMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        if (!token) {
          setMessages([]);
          toast.error('Please log in first.');
          return;
        }

        const skip = (currentPage - 1) * pageSize;
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/contact?skip=${skip}&limit=${pageSize}`,
          {
            headers: {
              token,
            },
          }
        );

        if (!res.ok) {
          let errorPayload = null;
          try {
            errorPayload = await res.json();
          } catch {
            // ignore
          }
          const msg =
            errorPayload?.error ||
            errorPayload?.message ||
            `Failed to fetch messages (HTTP ${res.status}).`;
          toast.error(msg);
          setMessages([]);
          return;
        }

        const data = await res.json();
        setMessages(Array.isArray(data.data) ? data.data : []);
        setTotalCount(data.totalCount || 0);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error('Error fetching messages:', error);
        toast.error('Failed to fetch messages. Please try again.');
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [token, currentPage, pageSize]);

  const startIndex = (currentPage - 1) * pageSize + 1;
  const endIndex = Math.min(currentPage * pageSize, totalCount);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="admin-title">Contact Messages</h2>
        <p className="admin-muted mt-1">Messages submitted from the contact form.</p>
      </div>

      {loading ? (
        <div className="admin-card">
          <div className="admin-card-inner">
            <AdminLoader label="Loading messages..." />
          </div>
        </div>
      ) : messages.length === 0 ? (
        <p className="text-center text-zinc-600 text-sm">No messages found.</p>
      ) : (
        <>
          <div className="space-y-6">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className="admin-card"
              >
                <div className="admin-card-inner flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-zinc-900">{msg.name}</h3>
                    <p className="text-zinc-600 text-sm">{msg.email} | {msg.phone}</p>
                    <p className="mt-2 text-zinc-800 text-sm whitespace-pre-wrap">{msg.message}</p>
                  </div>
                  <span className="text-xs text-zinc-500 mt-1 md:mt-0 shrink-0">
                    {new Date(msg.createdAt).toLocaleString()}
                  </span>
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

export default AllMessages;
