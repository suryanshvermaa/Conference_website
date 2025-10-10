import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useCookies} from 'react-cookie';

export const OrganisingComSkeleton = () => {
  const cards=[];
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <section className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="h-10 bg-gray-200 rounded-lg w-64 mx-auto mb-8 animate-pulse"></div>
        <div className="space-y-12">
          {[1, 2, 3].map((section) => (
            <div key={section} className="space-y-6">
              <div className="h-8 bg-gray-200 rounded-lg w-48 animate-pulse"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cards.push(1)&&
                cards.map((item) => (
                  <div key={item} className="bg-white rounded-lg shadow-lg p-4">
                    <div className="w-40 h-40 rounded-full mx-auto mb-4 bg-gray-200 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const OrganisingCom = () => {
  const [loading,setLoading]=useState(false);
  const [cookies, setCookie] = useCookies(['organisingCommitteeCache']);
  const roles = [
    'Patron & General Chair',
    'Honorary Chairs (Chairman)',
    'Organizing Chair',
    'Program Chair',
    'Program Co-Chair',
    'Program Secretary',
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
    [roles[10]]: [],
    [roles[11]]: [],
    [roles[12]]: [],
    [roles[13]]: [],
    [roles[14]]: [],
  });

  useEffect(() => {
    async function fetchAllCommitteeMembers() {
      setLoading(true);
      try {
        if (cookies.organisingCommitteeCache) {
          setCommitteeMembers(cookies.organisingCommitteeCache);
          setLoading(false);
          return;
        }
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/organisingcommitee/getAllMembers`);
        const updatedCommitteeMembers = { ...committeeMembers };
        
        for (let member of res.data.members) {
          if (!updatedCommitteeMembers[member.committee]) {
            updatedCommitteeMembers[member.committee] = [];
          }
          updatedCommitteeMembers[member.committee].push(member);
        }
        
        // Sort members by priority within each committee
        Object.keys(updatedCommitteeMembers).forEach(committee => {
          updatedCommitteeMembers[committee].sort((a, b) => {
            // Sort by priority (ascending order), members without priority go to the end
            const priorityA = a.priority || Number.MAX_SAFE_INTEGER;
            const priorityB = b.priority || Number.MAX_SAFE_INTEGER;
            return priorityA - priorityB;
          });
        });
        setCookie('organisingCommitteeCache', updatedCommitteeMembers, { path: '/', maxAge: 86400 }); // Cache for 24 hours
        setCommitteeMembers(updatedCommitteeMembers);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert('Failed to load committee members data');
      }
    }
    fetchAllCommitteeMembers();
  }, []);
  if(loading) {return (<OrganisingComSkeleton/>)}
  else {
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
                    {role=="Honorary Chairs (Chairman)"?"Chairs (Chairmen)":role}
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
      </div>)
  }
};

export default OrganisingCom;
