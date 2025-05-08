import React, { useState } from 'react'
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';

const AboutNITHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const images=[{id:1,imageUrl:"/MainEntrance.jpg"},{id:2,imageUrl:"/MainBuilding.jpg"},{id:3,imageUrl:"/OIP.jpeg"}];
  
    const openModal = (imageUrl) => {
      setSelectedImage(imageUrl);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedImage(null);
    };
  return (
    <div className='flex w-full justify-center items-center flex-col mt-4'>
      <div className="py-16 bg-white rounded-xl shadow-lg max-w-5xl px-4 lg:px-16">
        <h2 className="w-full text-center border-b-4 border-blue-500 text-2xl lg:text-4xl md:text-3xl font-bold text-black mb-4">
          About NIT Patna (Bihta Campus)
        </h2>
        <p className="text-black text-base md:text-lg lg:text-2xl leading-relaxed">
          The <span className="font-bold">NIT Patna (Bihta Campus)</span>, situated about
          <span className="font-bold"> 25 km</span> from the old campus in the heart of Patna, is a
          <span className="font-bold"> modern expansion</span> of the institute aimed at enhancing its
          <span className="font-bold"> educational</span> and
          <span className="font-bold"> research capabilities</span>. While the old campus continues to offer a rich legacy of
          <span className="font-bold"> academic excellence</span>, the Bihta campus provides a more
          <span className="font-bold"> spacious and advanced environment</span> for both students and faculty.
        </p>

        <p className="text-black text-base md:text-lg lg:text-2xl leading-relaxed mt-4">
          Spanning over <span className="font-bold">125 acres</span>, the new campus is equipped with
          <span className="font-bold"> state-of-the-art infrastructure</span>, including
          <span className="font-bold"> spacious classrooms</span>,
          <span className="font-bold"> cutting-edge laboratories</span>, and
          <span className="font-bold"> improved hostel facilities</span>. This strategic shift aims to accommodate the
          <span className="font-bold"> growing academic community</span> and foster
          <span className="font-bold"> innovation</span> in a serene, green setting.
        </p>

        <p className="text-black text-base md:text-lg lg:text-2xl leading-relaxed mt-4">
          Together with the old campus, the Bihta campus strengthens
          <span className="font-bold"> NIT Patna's commitment</span> to providing
          <span className="font-bold"> high-quality education</span> and
          <span className="font-bold"> research opportunities</span>.
        </p>
        <div className="flex items-center justify-center ">
      <section className="mb-8 p-8 bg-white rounded-xl shadow-lg w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden cursor-pointer" onClick={() => openModal(image.imageUrl)}>
              <img
                src={image.imageUrl}
                alt="Gallery"
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-gray-900"
              onClick={closeModal}
            >
              <ImCross />
            </button>
            {/* Image in Modal with 50% width and height */}
            <img
              src={selectedImage}
              alt="Large View"
              className="w-1/2 h-1/2 object-contain mx-auto" // 50% width and height, keeping aspect ratio
            />
          </div>
        </div>
      )}
    </div>
      </div>
      
    </div>
  )
}

export default AboutNITHistory
