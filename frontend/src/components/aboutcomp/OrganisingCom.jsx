import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrganisingCom = () => {
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
  ];

  const [committeeMembers, setCommitteeMembers] = useState({
    [roles[0]]: [],
    [roles[1]]: [],
    [roles[2]]: [],
    [roles[3]]: [],
    [roles[4]]: [],
    [roles[5]]: [],
    [roles[6]]: [],
    [roles[7]]: [],
    [roles[8]]: [],
    [roles[9]]: [],
  });

  useEffect(() => {
    async function fetchAllCommitteeMembers() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/organisingcommitee/getAllMembers`);
        for (let member of res.data.members) {
          setCommitteeMembers((prev) => ({
            ...prev,
            [member.committee]: [...(prev[member.committee] || []), member],
          }));
        }
      } catch (error) {
        alert('Failed to load committee members data');
      }
    }
    fetchAllCommitteeMembers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <section className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-gray-700 mb-8 pb-4 text-center underline">
          Organizing Committee
        </h2>
        <div className="space-y-12">
          {roles.map((role, index) => (
            committeeMembers[role].length > 0 && (
              <div key={index} className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 pl-4">
                  {role}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {committeeMembers[role].map((member, idx) => (
                    member?.name && (
                      <div
                        key={idx}
                        className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
                      >
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-gray-100 object-cover"
                        />
                        <h4 className="text-xl font-semibold text-gray-900 text-center">
                          {member.name}
                        </h4>
                        <p className="text-sm text-gray-600 text-center mt-1">
                          {member.college}
                        </p>
                        <p className="text-xs text-gray-500 text-center mt-2 italic">
                          {Array.isArray(member.specialization)
                            ? member.specialization.join(', ')
                            : member.specialization}
                        </p>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section>
    </div>
  );
};

export default OrganisingCom;