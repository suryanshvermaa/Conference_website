import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateInternationalMember = () => {
  const [image, setImage] = useState(null);
  const {id}=useParams();
  const navigate=useNavigate();
  const [organisingMemberData,setOrganisingMemberData]=useState({
    name:"",
    specialization:"",
    college:"",
    imageUrl:"",
    committee:"",
    description:""
  })
  useEffect(()=>{
    async function getData(){
        const res=await axios.get(`${import.meta.env.VITE_API_URL}/internationalcommitee/getMember/${id}`,{
            headers:{token:localStorage.getItem("token")}
        });
        const member=res.data.member;
        console.log(member);
        setOrganisingMemberData({
            college:member.college,
            committee:member.committee,
            description:member.description,
            imageUrl:member.imageUrl,
            name:member.name,
            specialization:member.specialization.join(", ")
        })
    }
    getData();
  },[]);
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
        const response = await axios.put(
          `${import.meta.env.VITE_API_URL}/internationalcommitee/updateMember/${id}`,
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
          setTimeout(()=>{
            navigate("/admin/all-international-members");
          },1000)
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to update the new committee member. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8 mt-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center mb-6">Update International Advisory Committee Member </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={organisingMemberData.name}
              onChange={(e) => setOrganisingMemberData({...organisingMemberData,name:e.target.value})}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Member name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Specialization</label>
            <input
              type="text"
              value={organisingMemberData.specialization}
              onChange={(e) => setOrganisingMemberData({...organisingMemberData,specialization:e.target.value})}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter member's specialization separated by commas"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">College</label>
            <input
              type="text"
              value={organisingMemberData.college}
              onChange={(e) => setOrganisingMemberData({...organisingMemberData,college:e.target.value})}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter member's specialization separated by commas"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Committee</label>
            <input
              type="text"
              value={organisingMemberData.committee}
              onChange={(e) => setOrganisingMemberData({...organisingMemberData,committee:e.target.value})}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Description about organising member"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <input
              type="text"
              value={organisingMemberData.description}
              onChange={(e) => setOrganisingMemberData({...organisingMemberData,description:e.target.value})}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Description about organising member"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full mt-2"
            />
            {organisingMemberData.imageUrl && (
              <div className="mt-4">
                <h3 className="text-gray-700">Image Preview</h3>
                <img src={organisingMemberData.imageUrl} alt="Preview" className="w-full mt-2 rounded-lg" />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Update International Advisory Committee Member 
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default UpdateInternationalMember;
