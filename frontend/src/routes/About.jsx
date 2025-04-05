import React, { useState } from "react";

const About = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    if (visibleSection === section) {
      setVisibleSection(null); // If the section is already visible, hide it
    } else {
      setVisibleSection(section); // Show the clicked section
    }
  };

  return (
    <div className="container mx-auto px-2 py-16 md:py-24">
      {/* Section Buttons */}
      <div className="flex flex-col space-y-4 mb-8">
        <button
          className="text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          onClick={() => toggleSection("section1")}
        >
          About NIT Patna
        </button>
        {visibleSection === "section1" && (
          <section className="mt-4 p-8 bg-gradient-to-r from-blue-100 to-gray-200 rounded-lg shadow-2xl border-l-8 border-blue-500">
            <h2 className="text-4xl font-extrabold text-blue-800 mb-4 border-b-4 border-blue-600 pb-2">About</h2>
            <p className="text-gray-900 text-lg leading-relaxed">
              <strong className="text-blue-700">
                The immersion of ashes of the Father of the Nation, Mahatma Gandhi
              </strong>
              , in the river Ganges is a significant historical event. The campus has a picturesque river view with historic buildings, presenting a spectacle of architectural delight and natural beauty.
            </p>
            <p className="text-gray-900 text-lg mt-4 leading-relaxed">
              <strong className="text-blue-700">National Institute of Technology Patna</strong> has been declared as an Institute of National Importance and has been granted fully Autonomous Status by MHRD, Government of India. The Institute has also been declared as a Centre of Excellence, imparting high-level education, training, research, and development in science, engineering technology, and humanities.
            </p>
            <p className="text-gray-900 text-lg mt-4 leading-relaxed">
              It is imparting high-quality education & values at UG (B. Tech), PG (M. Tech) & Ph. D programmes through its experienced faculty well-versed in their respective fields of engineering and technology with well-equipped laboratories. At present, the Institute has seven disciplines viz. Architecture, Civil Engineering, Computer Science & Engg., Electrical Engg., Electronics & Communication Engg., Information Technology and Mechanical Engg., and well-established departments of Physics, Mathematics, and Humanities and Social Science.
            </p>
            <p className="text-gray-900 text-lg mt-4 leading-relaxed">
              With a mission to set high standards in education and research, NIT Patna is actively involved in research and development (R&D), pushing the boundaries of innovation across various fields. It holds a distinguished reputation for its long record of academic excellence.
            </p>
          </section>
        )}

        <button
          className="text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          onClick={() => toggleSection("section2")}
        >
          Organising Committee
        </button>
        {visibleSection === "section2" && (
          <section className="mt-4 p-8 bg-gradient-to-r from-blue-100 to-gray-200 rounded-lg shadow-2xl border-l-8 border-blue-500">
            <h2 className="text-4xl font-extrabold text-blue-800 mb-4 border-b-4 border-blue-600 pb-2">Organising Committee</h2>
            <p className="text-gray-900 italic text-lg">Content coming soon...</p>
          </section>
        )}

        <button
          className="text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          onClick={() => toggleSection("section3")}
        >
          Venue & Travels
        </button>
        {visibleSection === "section3" && (
          <section className="mt-4 p-8 bg-gradient-to-r from-blue-100 to-gray-200 rounded-lg shadow-2xl border-l-8 border-blue-500">
            <h2 className="text-4xl font-extrabold text-blue-800 mb-4 border-b-4 border-blue-600 pb-2">Venue & Travels</h2>
            <p className="text-gray-900 text-lg leading-relaxed">
              <strong className="text-blue-700">The ICNARI-2026</strong> will be held at NIT Patna, Bihar, India. The institute’s campus is beautifully situated on the south bank of the River Ganges, behind Gandhi Ghat, one of the most important and sacred places in Patna.
            </p>
            <p className="text-gray-900 text-lg mt-4 leading-relaxed">
              Historically known as Patliputra, Patna has long been a hub of knowledge and culture, attracting scholars and visitors from across the globe. Some of Patna’s best-known attractions include the Mahabodhi Temple, the ruins of Ancient Nalanda University, the Vaishali Ashokan Pillar, and the Patna Sahib Gurudwara.
            </p>
            <p className="text-gray-900 text-lg mt-4 leading-relaxed">
              The main entrance of NIT Patna is located on Ashok Rajpath, and it is approximately 3 km from Patna's Gandhi Maidan. The campus is conveniently connected to key parts of the city:
            </p>
            <ul className="list-disc pl-8 text-gray-900 text-lg mt-4 leading-relaxed">
              <li>12 km from the Jai Prakash Narayan International Airport.</li>
              <li>8 km from the Patna Junction Railway Station.</li>
              <li>Well-served by buses, making it easily accessible from various parts of the city.</li>
            </ul>
          </section>
        )}

        <button
          className="text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          onClick={() => toggleSection("section4")}
        >
          About NIT Patna (History)
        </button>
        {visibleSection === "section4" && (
          <section className="mt-4 p-8 bg-gradient-to-r from-blue-100 to-gray-200 rounded-lg shadow-2xl border-l-8 border-blue-500">
            <h2 className="text-4xl font-extrabold text-blue-800 mb-4 border-b-4 border-blue-600 pb-2">About NIT Patna</h2>
            <p className="text-gray-900 text-lg leading-relaxed">
              <strong className="text-blue-700">National Institute of Technology (NIT) Patna</strong> is the 18th National Institute of Technology created by the Ministry of H.R.D., Government of India, after rechristening the erstwhile Bihar College of Engineering Patna on January 28, 2004.
            </p>
            <p className="text-gray-900 text-lg mt-4 leading-relaxed">
              NIT Patna marked its humble beginning in 1886 with the establishment of Pleaders Survey Training School, which was subsequently promoted to Bihar College of Engineering Patna in 1924. This made this institute the 6th oldest engineering institute of India. The graduate-level curriculum was later elevated to the postgraduate level in 1978.
            </p>
            <p className="text-gray-900 text-lg mt-4 leading-relaxed">
              The institute is situated on the south bank of the holy river Ganges behind Gandhi Ghat, one of the most important and reverential places of Patna. The Gandhi Ghat is associated with the immersion of ashes of the Father of the Nation, Mahatma Gandhi, in the river Ganges. The campus has a picturesque river view with historic buildings, presenting a spectacle of architectural delight and natural beauty.
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default About;
