import React, { useEffect, useState } from 'react'
import axios from "axios"

const OrganisingCom = () => {
  const [committeeMembers,setCommitteeMembers]=useState(null);
  useEffect(()=>{
    async function fetchAllCommitteeMembers() {
      try {
        const res=await axios.get(`${import.meta.env.VITE_API_URL}/organisingcommitee/getAllMembers`)
        setCommitteeMembers(res.data.members);
      } catch (error) {
        alert("failed to load committee members data")
      }
    }
    fetchAllCommitteeMembers();
  },[])

  return (
    <div className="flex w-full justify-center items-center flex-col">
      <section className="mt-8 py-16 bg-white rounded-xl shadow-lg max-w-7xl px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-indigo-700 mb-6 border-b-4 border-indigo-500 pb-3 text-center">
          Organising Committee
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {committeeMembers&&committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 text-center">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">{member.college}</p>
              <span className="block bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full px-3 py-1 mt-2 text-center">
                {member.committee}
              </span>
              <span className="block text-xs text-gray-500 italic mt-2 text-center">
                {Array(member.specialization).join(",")}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OrganisingCom
