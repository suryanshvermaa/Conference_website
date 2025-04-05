import React from 'react';

export function BecomeSponsor() {
  const sponsorshipPackages = [
    { name: 'Platinum Sponsor', price: '₹5,00,000/-' },
    { name: 'Diamond Sponsor', price: '₹4,00,000/-' },
    { name: 'Gold Sponsor', price: '₹3,00,000/-' },
    { name: 'Silver Sponsor', price: '₹2,00,000/-' },
    { name: 'Bronze Sponsor', price: '₹1,00,000/-' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Become a Sponsor for ICNARI-2026</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ICNARI-2026 invites sponsors and exhibitors to showcase their products and services at our online and offline conference event. 
            With over 500 expected attendees, this is a fantastic opportunity to promote electronics, automation, and related products, 
            while increasing your organization's visibility.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Event Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600"><span className="font-medium">Date:</span> 7th & 8th of March, 2026</p>
              <p className="text-gray-600"><span className="font-medium">Organizer:</span> Department of Electrical Engineering, National Institute of Technology Patna, Bihar, India</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Sponsorship Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorshipPackages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold text-indigo-600">{pkg.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  
export function BenefitsOfBecomeSponser(){
  const benefits = [
    "Logo recognition on the conference website with a link to your website",
    "Logo recognition in the conference program",
    "Promotional video showcased during the online session"
  ];

  return (
    <div className=" bg-white rounded-2xl shadow-xl p-8 mb-12 border border-indigo-100 mt-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-2">Benefits of Sponsorship</h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Benefit {index + 1}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const tourSpots = [
  {
    title: "Mahabodhi Temple, Bodh Gaya",
    image: "Mahabodhi_Temple.png",
    description: `The Mahabodhi Temple Complex at Bodh Gaya is one of the four holy sites...`
  },
  {
    title: "Takhat Sri Harimandir Ji, Patna Sahib",
    image: "Takhat_Sri_Harimandir_Ji.png",
    description: `Takhat Sri Harimandir Ji, also known as Patna Sahib Gurudwara...`
  },
  {
    title: "Nalanda Mahavihara",
    image: "Nalanda_Mahavihara.png",
    description: `Nalanda was a renowned Mahavihara, a large Buddhist monastery...`
  },
  {
    title: "Vishwa Shanti Stupa",
    image: "Vishwa_Shanti_Stupa.png",
    description: `The Vishwa Shanti Stupa (World Peace Pagoda) is a white stupa...`
  },
  {
    title: "Valmiki National Park",
    image: "Valmiki_National_Park.png",
    description: `Valmiki National Park is located in the West Champaran district...`
  },
  {
    title: "Vikramshila University",
    image: "Ruins_of_Vikramshila.png",
    description: `Vikramshila was one of the two most important centers of Buddhist learning...`
  },
  {
    title: "Vikramshila Gangetic Dolphin Sanctuary",
    image: "Vikramshila_Gangetic_Dolphin_Sanctuary.png",
    description: `The Vikramshila Gangetic Dolphin Sanctuary is located in the Bhagalpur district...`
  },
  {
    title: "Pawapuri",
    image: "Pawapuri.png",
    description: `Pawapuri is a sacred Jain pilgrimage site in Nalanda district...`
  },
  {
    title: "Lauriya Nandangarh",
    image: "Lauriya_Nandangarh.png",
    description: `Lauriya Nandangarh, in the West Champaran district, is famous for its Ashokan Pillar...`
  },
  {
    title: "Tomb of Sher Shah Suri",
    image: "Tomb_of_Sher_Shah_Suri.png",
    description: `The Tomb of Sher Shah Suri is located in Sasaram, Bihar...`
  },
  {
    title: "Navlakha Palace",
    image: "Navlakha_Palace.png",
    description: `Navlakha Palace, also known as Rajnagar Palace, is located near Madhubani...`
  }
];

export function TourImages() {
  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">Bihar Tourism Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tourSpots.map((spot, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="relative group">
              <img
                src={`/tour/${spot.image}`}
                alt={spot.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold text-center px-4">{spot.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}