import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://conference-website-dnqi.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      alert(result.message);

      // Clear the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white shadow-xl rounded-lg p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Keep in touch</h2>
      <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4 rounded" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
