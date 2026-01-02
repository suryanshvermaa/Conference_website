import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLoader from './AdminLoader';

const AllMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
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

        const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
          headers: {
            token,
          },
        });

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
        setMessages(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching messages:', error);
        toast.error('Failed to fetch messages. Please try again.');
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [token]);

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
      )}

      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AllMessages;
