import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      {/* About the Conference */}
      <section className="mb-10 p-6 bg-white shadow-lg rounded-lg border-l-8 border-blue-500">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">📢 About the Conference</h2>
        <p className="text-gray-700 leading-relaxed">
          The <span className="font-bold text-blue-600">International Conference on Next-Generation Adaptive Research and Innovations (ICNARI-2026)</span>, 
          organized by the <span className="font-semibold text-gray-900">Department of Electrical Engineering at NIT Patna</span>, 
          will take place in <span className="text-red-600 font-bold">hybrid mode</span> on 
          <span className="text-purple-700 font-extrabold"> March 7-8, 2026</span>.
        </p>
        <p className="text-gray-700 mt-4">
          This conference aims to bring together experts in <span className="text-green-600 font-semibold">biosensing, neuromorphic computing, electric vehicles, sustainable energy, and photovoltaic cells</span>.
        </p>
      </section>
      {/* Organizing Committee (Empty for Now) */}
      <section className="mb-10 p-6 bg-white shadow-lg rounded-lg border-l-8 border-red-500">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">👥 Organizing Committee</h2>
        <p className="text-gray-600 italic">Details coming soon...</p>
      </section>
      {/* Venue & Travel */}
      <section className="mb-10 p-6 bg-white shadow-lg rounded-lg border-l-8 border-green-500">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">📍 Venue & Travel</h2>
        <p className="text-gray-700">
          <span className="font-bold text-blue-600">ICNARI-2026</span> will be hosted at <span className="text-gray-900 font-semibold">NIT Patna, Bihar, India</span>, located on the south bank of the 
          <span className="text-yellow-600 font-bold"> River Ganges</span> near <span className="font-bold">Gandhi Ghat</span>.
        </p>
        <p className="text-gray-700 mt-4">
          <span className="font-bold text-red-600">Patna</span>, formerly known as <span className="italic text-blue-700">Patliputra</span>, has a rich heritage with attractions such as 
          <span className="text-green-600 font-semibold"> Mahabodhi Temple, Ancient Nalanda University, Vaishali Ashokan Pillar, and Patna Sahib Gurudwara</span>.
        </p>
        <p className="text-gray-700 mt-4">
          <span className="font-bold text-purple-700">🛫 Airport:</span> 12 km from <span className="text-blue-600 font-semibold">Jai Prakash Narayan International Airport</span>  
          <br />
          <span className="font-bold text-red-600">🚉 Railway Station:</span> 8 km from <span className="text-blue-600 font-semibold">Patna Junction</span>  
          <br />
          <span className="font-bold text-green-600">🚌 Bus Connectivity:</span> Available from all major locations.
        </p>
      </section>

      {/* About NIT Patna */}
      <section className="p-6 bg-white shadow-lg rounded-lg border-l-8 border-yellow-500">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">🎓 About NIT Patna</h2>
        <p className="text-gray-700">
          <span className="text-gray-900 font-bold">National Institute of Technology Patna</span> is the 
          <span className="text-blue-600 font-bold"> 6th oldest engineering institute in India</span>, dating back to 
          <span className="text-purple-700 font-bold"> 1886</span> when it started as a <span className="text-green-600 font-semibold">Survey Training School</span>.
        </p>
        <p className="text-gray-700 mt-4">
          Recognized as an <span className="font-bold text-red-600">Institute of National Importance</span>, NIT Patna offers 
          <span className="text-blue-600 font-bold"> B.Tech, M.Tech, and Ph.D. programs</span> in seven engineering disciplines.
        </p>
        <p className="text-gray-700 mt-4">
          With a <span className="text-yellow-600 font-bold">scenic riverside campus</span> and a commitment to excellence, 
          NIT Patna continues to <span className="text-green-600 font-semibold">push the boundaries of engineering and technology</span>.
        </p>
      </section>
    </div>
  );
};

export default About;
