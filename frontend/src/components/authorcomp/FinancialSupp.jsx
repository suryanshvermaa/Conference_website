import React from 'react'

const FinancialSupp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6 mt-12 border shadow-2xl">
      <div className="max-w-3xl ">
        <h1 className="text-3xl font-bold mb-4 border-b-4 border-blue-500 inline-block pb-1 w-full text-center">
          Financial Support
        </h1>

        <p className="mt-6 text-lg">
          The ICNARI offers financial support to eligible students and faculty members from non-centrally funded technical institutes (CFTIs) in India.
        </p>

        <h2 className="mt-6 text-xl font-semibold text-blue-700">Eligibility Criteria</h2>
        <ul className="list-disc list-inside text-base mb-4 text-left inline-block">
          <li><span className="font-semibold">Students</span> who are authors of papers submitted to ICNARI.</li>
          <li><span className="font-semibold">Students</span> enrolled in Ph.D., M.S. (by research), M.Tech, M.E., B.Tech, or B.E. programs in Indian institutions.</li>
          <li><span className="font-semibold">Applicants</span> must remain students until at least December 31, 2025.</li>
          <li><span className="font-semibold">Faculty members</span> from non-CFTIs working in systems and control.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold text-blue-700">Support Provided</h2>
        <ul className="list-disc list-inside text-base mb-4 text-left inline-block">
          <li>Registration fees</li>
          <li>Accommodation fees</li>
          <li>Partial travel support (if applicable)</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold text-blue-700">Application Process</h2>
        <ul className="list-disc list-inside text-base mb-4 text-left inline-block">
          <li>Submit online applications through the form (link forthcoming).</li>
          <li>Deadline for application (will be announced).</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold text-blue-700">Reimbursement Process</h2>
        <ul className="list-disc list-inside text-base mb-4 text-left inline-block">
          <li>Selected applicants must register for ICNARI.</li>
          <li>Reimbursement for registration, accommodation, and travel charges after conference participation.</li>
          <li>Full attendance during the conference is mandatory.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold text-blue-700">Notification</h2>
        <p className="text-base mb-4">
          Selected applicants will be informed via email. Ensure accurate email address entry.
        </p>
      </div>
    </div>
  )
}

export default FinancialSupp
