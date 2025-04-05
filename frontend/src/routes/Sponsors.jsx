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