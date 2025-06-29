import React, { useEffect, useState } from "react";
import axios from "axios";

export const InternationalAdvisoryCommitteeLoader = () => {
  const cards = [1, 2, 3, 4];
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <section className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="h-10 bg-gray-200 rounded-lg w-64 mx-auto mb-8 animate-pulse"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cards.map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center animate-pulse"
              role="region"
              aria-label="Loading committee member"
            >
              <div className="w-28 h-28 rounded-full bg-gray-200 mb-4"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* --- Main Card Improvements --- */
const InternationalAdvisoryCommittee = () => {
  const [loading, setLoading] = useState(false);
  const [committeeMembers, setCommitteeMembers] = useState(null);

  useEffect(() => {
    async function fetchAllCommitteeMembers() {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/organisingcommitee/getAllMembers`
        );
        setCommitteeMembers(res.data.members);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("Failed to load international advisory committee members data");
      }
    }
    fetchAllCommitteeMembers();
  }, []);
  if (loading) {
    return <InternationalAdvisoryCommitteeLoader />;
  } else {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <section className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center underline underline-offset-8 decoration-blue-400">
            International Advisory Committee
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {committeeMembers &&
              committeeMembers.map(
                (member, idx) =>
                  member?.name && (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                      role="region"
                      aria-label={`Committee member: ${member.name}`}
                    >
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-28 h-28 rounded-full mb-4 border-4 border-blue-100 object-cover shadow"
                      />
                      <h4 className="text-lg font-semibold text-gray-900 text-center">
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-600 text-center mt-1">
                        {member.college}
                      </p>
                      <p className="text-xs text-gray-500 text-center mt-2 italic">
                        {Array.isArray(member.specialization)
                          ? member.specialization.join(", ")
                          : member.specialization}
                      </p>
                      {member.role && (
                        <span className="mt-3 inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
                          {member.role}
                        </span>
                      )}
                    </div>
                  )
              )}
          </div>
        </section>
      </div>
    );
  }
};

export default InternationalAdvisoryCommittee;
