import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLayout = ({ children ,setfetch}) => {
  const navigate = useNavigate();

  // Get user photo and name from localStorage
  const userPhoto = localStorage.getItem('photo');
  const userName = localStorage.getItem('name') || 'Admin'; // Fallback to 'Admin' if no username is found

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    localStorage.removeItem('photo'); // Remove the photo
    localStorage.removeItem('name'); // Remove the username (optional)
    navigate('/login'); // Redirect to login page
    setfetch(true);
  };

  return (
    <div className="admin-layout flex flex-col mt-14">
      <div className="header  text-black flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img
            src={userPhoto || 'https://via.placeholder.com/40'}
            alt="User"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-xl font-semibold uppercase">{userName}</span>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="content flex-1 p-8">
        {children} {/* Render the children passed to this layout */}
      </div>
    </div>
  );
};

export default AdminLayout;
