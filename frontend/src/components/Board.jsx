import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PaperUpdates = () => {
  const [papers, setPapers] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const fetchPapersAndUpdates = async () => {
    setLoading(true);
    try {
      const papersResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/papers/all?skip=0&limit=15`
      );
      const updatesResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/recentupdate/all?skip=0&limit=15`
      );

      setPapers(papersResponse.data.data || papersResponse.data);
      setUpdates(updatesResponse.data.data || updatesResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPapersAndUpdates();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">

        {/* 📄 Papers Received */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex-1 border h-[60%] border-gray-200 overflow-hidden">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">📄 Highlights</h2>
          <ul className="space-y-3 max-h-[500px] overflow-y-auto">
            {papers.map((paper, index) => (
              <li key={index} className="bg-[#C9D8FF] p-4 rounded-md shadow-md flex justify-between items-center transition-transform duration-300">
                <div>
                  <strong className="text-gray-900">{paper.heading}</strong>
                  <p className="text-gray-600 text-sm font-bold">Authors: {paper.authors.join(", ")}</p>
                </div>
                {paper.link && (
                  <a href={paper.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                      View
                    </button>
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button onClick={()=>navigate("/allpapers")} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            View more
          </button>
        </div>

        {/* 🔥 Recent Updates */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex-1 border border-gray-200 overflow-hidden">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">🔥 Recent Updates</h2>
          <ul className="space-y-3 max-h-[500px] overflow-y-auto">
            {updates.map((update, index) => (
              <li key={index} className="bg-[#C9D8FF] gap-1 p-4 rounded-md shadow-md flex justify-between items-center transition-transform duration-300">
                <div>
                  <strong className="text-gray-900">{update.title}</strong>
                  <p className="text-gray-600 text-sm font-bold">{update.description}</p>
                </div>
                {update.link && (
                  <a href={update.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                      View
                    </button>
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button onClick={()=>navigate("/allupdates")} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            View more
          </button>
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
    </div>
  );
};

export default PaperUpdates;
