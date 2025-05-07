import React from 'react'

const BestStuden = () => {
  return (
    <div className="flex  justify-center min-h-screen bg-gray-50 p-6 mt-12 border shadow-2xl">
    <div className="max-w-3xl ">
      <h1 className="text-3xl font-bold mb-4 border-b-4 border-blue-500 inline-block pb-1 text-center w-full">
        Best Student Paper Award
      </h1>

      <p className="mt-6 text-lg">
        <span className="font-semibold">Best Student Paper Award:</span> A Best Student Paper Award will be presented for each conference track, recognizing outstanding contributions from student authors.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-blue-700">Award Details</h2>

      <h3 className="mt-4 text-lg font-semibold">Purpose:</h3>
      <p className="text-base mb-4">
        To acknowledge exceptional research and contributions from students in each track.
      </p>

      <h3 className="mt-4 text-lg font-semibold">Eligibility:</h3>
      <ul className="list-disc list-inside text-base mb-4 text-left inline-block">
        <li><span className="font-semibold">Primary author(s)</span> must be students at the time of submission.</li>
        <li><span className="font-semibold">Nominations</span> require endorsement from the student's major advisor/mentor.</li>
        <li><span className="font-semibold">Each advisor</span> can nominate one paper per track.</li>
      </ul>

      <h3 className="mt-4 text-lg font-semibold">Nomination Process:</h3>
      <ul className="list-disc list-inside text-base mb-4 text-left inline-block">
        <li><span className="font-semibold">Submit nominations</span> via the online portal (link forthcoming).</li>
        <li><span className="font-semibold">Adhere</span> to the specified deadline.</li>
      </ul>

      <h3 className="mt-4 text-lg font-semibold">Inquiries:</h3>
      <p className="text-base mb-4">
        Contact the <span className="font-semibold">Best Student Paper Award Chairs</span> for questions or clarifications.
      </p>
    </div>
  </div>
  )
}

export default BestStuden
