import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

export default function Admin({ setfetch }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // Redirect to the appropriate page
  };

  return (
    <AdminLayout setfetch={setfetch}>
    <div className="admin-container flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="admin-header mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 uppercase border-b-4 border-blue-500 pb-3">
          Admin Dashboard
        </h1>
      </div>

      <div className="admin-content grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {/* Create New Admin */}
        <div
          className="card bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={() => handleNavigation('/admin/add-admin')}
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Create New Admin</h2>
          <button className="admin-btn bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600">
            Create
          </button>
        </div>

        {/* Add New Papers */}
        <div
          className="card bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={() => handleNavigation('/admin/add-papers')}
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Papers</h2>
          <button className="admin-btn bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600">
            Add Papers
          </button>
        </div>

        {/* Add New Speakers */}
        <div
          className="card bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={() => handleNavigation('/admin/add-speakers')}
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Speakers</h2>
          <button className="admin-btn bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600">
            Add Speakers
          </button>
        </div>

         {/* Add New Organising Committee Member */}
         <div
          className="card bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={() => handleNavigation('/admin/add-organising-member')}
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Committee Members</h2>
          <button className="admin-btn bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600">
          Add Members
          </button>
        </div>

        {/* Add New Updates */}
        <div
          className="card bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={() => handleNavigation('/admin/add-recent-updates')}
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Updates</h2>
          <button className="admin-btn bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600">
            Add Updates
          </button>
        </div>

        {/* All Papers */}
        <div
          className="card bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={() => handleNavigation('/admin/all-papers')}
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">All Papers</h2>
          <button className="admin-btn bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600">
            View Papers
          </button>
        </div>

        {/* All Speakers */}
        <div
          className="card bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={() => handleNavigation('/admin/all-speakers')}
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">All Speakers</h2>
          <button className="admin-btn bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600">
            View Speakers
          </button>
        </div>

        {/* All Updates */}
        <div
          className="card bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={() => handleNavigation('/admin/all-updates')}
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">All Updates</h2>
          <button className="admin-btn bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600">
            View Updates
          </button>
        </div>
        <div
          className="card bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={() => handleNavigation('/admin/photogalleryupload')}
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Photo Gallery</h2>
          <button className="admin-btn bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600">
            Upload Image
          </button>
        </div>
        <div
          className="card bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={() => handleNavigation('/admin/contact-messages')}
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Requests</h2>
          <button className="admin-btn bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600">
            See Requests 
          </button>
        </div>
        <div
          className="card bg-yellow-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={() => handleNavigation('/admin/deletephoto')}
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">PhotoGallery</h2>
          <button className="admin-btn bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600">
            delete photo
          </button>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
}
