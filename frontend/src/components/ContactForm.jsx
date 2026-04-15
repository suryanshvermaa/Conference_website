import React, { useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-().]{7,15}$/;

const validate = ({ email, subject, phone, message }) => {
  const errs = {};
  if (!EMAIL_RE.test(email)) errs.email = 'Enter a valid email address.';
  if (subject.trim().length < 5) errs.subject = 'Subject must be at least 5 characters.';
  if (subject.trim().length > 100) errs.subject = 'Subject must be 100 characters or fewer.';
  if (phone && !PHONE_RE.test(phone)) errs.phone = 'Enter a valid phone number (7–15 digits).';
  if (message.trim().length < 20) errs.message = 'Message must be at least 20 characters.';
  if (message.trim().length > 1000) errs.message = 'Message must be 1000 characters or fewer.';
  return errs;
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
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
        {errors.email && <p className="text-red-500 text-sm -mt-2">{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {errors.subject && <p className="text-red-500 text-sm -mt-2">{errors.subject}</p>}
        <input
          type="tel"
          name="phone"
          placeholder="Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {errors.phone && <p className="text-red-500 text-sm -mt-2">{errors.phone}</p>}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {errors.message && <p className="text-red-500 text-sm -mt-2">{errors.message}</p>}
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
