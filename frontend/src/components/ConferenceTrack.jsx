import React from "react";
import { useNavigate } from "react-router-dom";
const ConferenceTrack = () => {
  const navigate=useNavigate();
  const tracks = [
    {
      title: "Biosensing and Neuromorphic Computing",
      description: "Explore advanced biosensing technologies and neuromorphic computing systems.",
      image: "http://res.cloudinary.com/dt35ytobp/image/upload/v1743770486/oej24zlcvw8rd5zdw4xx.png",
    },
    {
      title: "Electric Vehicles and Sustainable Energy",
      description: "Dive into energy storage, management, and integration for sustainable transportation.",
      image: "http://res.cloudinary.com/dt35ytobp/image/upload/v1743771444/nimr4k8hebifeapaecis.png",
    },
    {
      title: "Renewable Energy",
      description: "Discover advancements in solar, wind, and other renewable energy technologies.",
      image: "http://res.cloudinary.com/dt35ytobp/image/upload/v1743772019/xgkcoiwgsytre06kgvub.png",
    },
    {
      title: "Photovoltaic Cells",
      description: "Learn about thin-film photovoltaics, perovskite tandems, and integrated PV systems.",
      image: "http://res.cloudinary.com/dt35ytobp/image/upload/v1743772575/cyh5rv5cvyazbodfqzao.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Conference Tracks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform cursor-pointer duration-500"
            onClick={()=>navigate(`/authors/call-for-papers/${index}`)}
          >
            <img
              src={track.image}
              alt={track.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{track.title}</h2>
              <p className="text-gray-700">{track.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferenceTrack;

