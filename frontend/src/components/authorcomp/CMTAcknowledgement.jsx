import React from 'react'

const CMTAcknowledgement = () => {
  return (
    <div className='mt-20'>
        <h3 className="sm:text-3xl lg:text-4xl text-2xl font-semibold text-gray-800 mt-6 underline text-center p-5">CMT Acknowledgement</h3> {/* No underline here */}
        <p className='list-disc lg:px-20 sm:px-10 px-6 text-gray-700 space-y-2 text-xl'>The <span className='text-blue-600'>Microsoft CMT service</span> was used for the managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
    </div>
  )
}

export default CMTAcknowledgement;