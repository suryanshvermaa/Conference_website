import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddOrganisingCommitteeMember = () => {
  const [image, setImage] = useState(null);
  const roles = [
    'Patron & General Chair',
    'Honorary Chairs (Chairman)',
    'Organizing Chair',
    'Program Chair',
    'Program Secretary',
    'Program Co-Chair',
    'Program Coordinators',
    'Advisory Committee',
    'Program Steering Committee',
    'Publication Chairs',
    'Publicity and Media Chair(s)',
    'Workshop and Tutorial Chair(s)',
    'Hospitality Chair(s)',
    'Women in Engineering Chairs',
    'Venue and Stage Chairs',
  ];
  const [organisingMemberData,setOrganisingMemberData]=useState({
    name:"",
    specialization:"",
    college:"",
    imageUrl:"",
    committee:"",
    description:""
  })

  const token = localStorage.getItem('token');  // Get the token from localStorage

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      setOrganisingMemberData({...organisingMemberData,imageUrl});
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error('Please log in first.');
      return;
    }

    // Upload image to Cloudinary
    const formData = new FormData();
    formData.append('image', image);

    try {
      // Replace with your Cloudinary upload API
      const imageResponse = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        }
      );

      if (imageResponse.data.result) {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/organisingcommitee/createMember`,
          {...organisingMemberData,imageUrl:imageResponse.data.result},
          {
            headers: {
              token:localStorage.getItem('token'),
            },
          }
        );
        console.log(response);
        if (response.status === 201) {
          toast.success(response.data.msg);
          setImage(null);
          setOrganisingMemberData({name:"",desription:"",imageUrl:"",specialization:"",college:"",committee:""})
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to add the new committee member. Please try again.');
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="admin-card">
        <div className="admin-card-inner">
          <div className="mb-6">
            <h2 className="admin-title">Add Organising Committee Member</h2>
            <p className="admin-muted mt-1">Create a new organising committee profile.</p>
          </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="admin-label">Name</label>
            <input
              type="text"
              value={organisingMemberData.name}
              onChange={(e) => setOrganisingMemberData({...organisingMemberData,name:e.target.value})}
              className="admin-input"
              placeholder="Enter Member name"
              required
            />
          </div>

          <div>
            <label className="admin-label">Specialization</label>
            <input
              type="text"
              value={organisingMemberData.specialization}
              onChange={(e) => setOrganisingMemberData({...organisingMemberData,specialization:e.target.value})}
              className="admin-input"
              placeholder="Enter member's specialization separated by commas"
              required
            />
          </div>

          <div>
            <label className="admin-label">College</label>
            <input
              type="text"
              value={organisingMemberData.college}
              onChange={(e) => setOrganisingMemberData({...organisingMemberData,college:e.target.value})}
              className="admin-input"
              placeholder="Enter member's college"
              required
            />
          </div>

          <div>
            <label className="admin-label">Committee</label>
            <select
              value={organisingMemberData.committee}
              onChange={(e) => setOrganisingMemberData({...organisingMemberData,committee:e.target.value})}
              className="admin-select"
              required
            >
              <option value="" disabled>Select Committee</option>
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="admin-label">Description</label>
            <input
              type="text"
              value={organisingMemberData.description}
              onChange={(e) => setOrganisingMemberData({...organisingMemberData,description:e.target.value})}
              className="admin-input"
              placeholder="Description about organising member"
              required
            />
          </div>

          <div>
            <label className="admin-label">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 block w-full text-sm text-zinc-700 file:mr-3 file:rounded-lg file:border-0 file:bg-zinc-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-zinc-700 hover:file:bg-zinc-200"
            />
            {organisingMemberData.imageUrl && (
              <div className="mt-4">
                <div className="admin-muted">Preview</div>
                <img src={organisingMemberData.imageUrl} alt="Preview" className="mt-2 w-full rounded-xl border border-zinc-200" />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="admin-button-primary w-full"
          >
            Add Committee Member 
          </button>
        </form>
      </div>
    </div>
    <ToastContainer position="bottom-center" />
    </div>
  );
};

export default AddOrganisingCommitteeMember;
