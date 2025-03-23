import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PaperUpdates = () => {
  const [papers, setPapers] = useState([]);    // Store all fetched papers
  const [updates, setUpdates] = useState([]);   // Store all fetched updates
  const [visiblePapers, setVisiblePapers] = useState([]); // Store only 15 visible papers
  const [visibleUpdates, setVisibleUpdates] = useState([]); // Store only 15 visible updates
  const [page, setPage] = useState(1);          // Track the current page (for pagination)
  const [loading, setLoading] = useState(false); // Loading state
    const navigate=useNavigate();
  // Fetch all papers and updates from API
  const fetchPapersAndUpdates = async () => {
    setLoading(true);
    try {
      // Fetch all papers
      const papersResponse = await axios.get(`${import.meta.env.VITE_API_URL}/papers/all`);
      // Fetch all updates
      const updatesResponse = await axios.get(`${import.meta.env.VITE_API_URL}/recentupdate/all`);
      
      // Store all papers and updates
      setPapers(papersResponse.data);
      setUpdates(updatesResponse.data);
      
      // Set the first 15 items to be visible
      setVisiblePapers(papersResponse.data.slice(0, 15));
      setVisibleUpdates(updatesResponse.data.slice(0, 15));

    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPapersAndUpdates();
  }, []);

  // Load More function to show next 15 items
  const loadMorePapers = () => {
    const newVisiblePapers = papers.slice(visiblePapers.length, visiblePapers.length + 15);
    setVisiblePapers((prev) => [...prev, ...newVisiblePapers]);
  };

  const loadMoreUpdates = () => {
    const newVisibleUpdates = updates.slice(visibleUpdates.length, visibleUpdates.length + 15);
    setVisibleUpdates((prev) => [...prev, ...newVisibleUpdates]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">

        {/* 📄 Papers Received */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex-1 border h-[60%] border-gray-200 overflow-hidden">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">📄 Papers Received</h2>
          <ul className="space-y-3 max-h-[500px] overflow-y-auto">
            {visiblePapers.map((paper, index) => (
              <li key={index} className="bg-yellow-100 p-4 rounded-md shadow-md flex justify-between items-center transition-transform duration-300">
                <div>
                  <strong className="text-gray-900">{paper.heading}</strong>
                  <p className="text-gray-600 text-sm">Authors: {paper.authors.join(", ")}</p>
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
          {papers.length > visiblePapers.length && (
            <button onClick={()=>navigate("/allpapers")} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              View more
            </button>
          )}
        </div>

        {/* 🔥 Recent Updates */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex-1 border border-gray-200 overflow-hidden">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">🔥 Recent Updates</h2>
          <ul className="space-y-3 max-h-[500px] overflow-y-auto">
            {visibleUpdates.map((update, index) => (
              <li key={index} className="bg-yellow-100 p-4 rounded-md shadow-md flex justify-between items-center transition-transform duration-300">
                <div>
                  <strong className="text-gray-900">{update.title}</strong>
                  <p className="text-gray-600 text-sm">{update.description}</p>
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
          {updates.length > visibleUpdates.length && (
            <button onClick={()=>navigate("/allupdates")} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            View more
          </button>
          )}
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
    </div>
  );
};

export default PaperUpdates;
