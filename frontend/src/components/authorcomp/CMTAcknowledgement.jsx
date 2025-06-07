import React from 'react'

const CMTAcknowledgement = () => {
  return (
    <section className='mt-20 px-20'>
      <h1 className='text-center lg:text-4xl sm:text-3xl text-2xl p-5 italic'>CMT Acknowledgement</h1>
      <p className='italic text-lg font-extralight'>
        "The Microsoft CMT service was used for managing the peer-reviewing process for this conference.
        This service was provided for free by Microsoft and they bore all expenses, including costs for
        Azure cloud services as well as for software development and support."
      </p >
      <p className='italic text-lg font-extralight'>
        "This conference uses Microsoft’s Conference Management Toolkit (CMT) for paper submissions."
      </p>
    </section>
  )
}

export default CMTAcknowledgement;