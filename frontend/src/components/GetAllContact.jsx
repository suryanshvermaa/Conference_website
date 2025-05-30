import React, { useEffect, useState } from 'react';

const AllMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`); // Update this if your endpoint differs
        const data = await res.json();
        setMessages(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="px-8 py-16 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 border-b-4 border-blue-500 pb-2">
        All Contact Messages
      </h2>

      {loading ? (
        <p className="text-center text-gray-700 text-lg">Loading...</p>
      ) : messages.length === 0 ? (
        <p className="text-center text-gray-700 text-lg">No messages found.</p>
      ) : (
        <div className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{msg.name}</h3>
                <p className="text-gray-600 text-sm">{msg.email} | {msg.phone}</p>
                <p className="mt-2 text-gray-700">{msg.message}</p>
              </div>
              <span className="text-sm text-gray-500 mt-2 md:mt-0">
                {new Date(msg.createdAt).toLocaleString()}
              </span>
            </div>
          ))}
          
        </div>
      )}
    </div>
  );
};

export default AllMessages;
