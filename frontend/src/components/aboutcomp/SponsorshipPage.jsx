import React from "react";

const SponsorshipPage = () => {
      
  return (
    <div className="bg-gray-50 text-gray-800 font-sans mt-12">
      <header className="bg-blue-900 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">SPONSORSHIP & EXHIBITIONS</h1>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Call For Sponsorship</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-bold text-xl">
            Submit Interest Form
          </button>
          <p className="mt-4 text-2xl">
            Department of Electrical Engineering, National Institute of Technology (NIT), Patna is happy to announce the{" "}
            <strong>
              International Conference on Next-Generation Adaptive Research and Innovations (ICNARI-2026)
            </strong>
            , scheduled during 6–8 March 2026 at NIT Patna.
          </p>
          <p className="mt-4 mb-2">
            <a href="#" className="text-blue-700 underline text-xl">
              For more sponsorship details click here.
            </a>
          </p>
          <p className="mt-2 text-2xl">
            We invite you to support this landmark event and contribute to a transformative experience,
            bringing together the most innovative minds to push the boundaries of research and innovation.
          </p>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mb-8">
          <div className="bg-gray-200 p-4 rounded shadow text-blue-700 font-bold text-2xl">Platinum Sponsor</div>
          <div className="bg-gray-200 p-4 rounded shadow text-orange-500 font-bold text-2xl">Bronze Sponsor</div>
          <div className="bg-gray-200 p-4 rounded shadow text-red-600 font-bold text-2xl">Other Sponsors</div>
        </section>

        <p className="mb-4 font-semibold">
          18% GST will be charged in addition to the basic amount.
        </p>

        <section className="overflow-x-auto mb-10">
          <table className="min-w-full table-auto border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Facilities</th>
                <th className="border px-4 py-2">Support (Rs)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "PLATINUM",
                  facilities:
                    "Exhibition Stand, Platform for Technical Presentation, Registration Fees Waived for Three Participants, Promotional Banner, Logo in Brochure and Banner, Full-Page A4 Ad in Abstract Book",
                  price: "₹ XXXX or above",
                },
                {
                  name: "GOLD ",
                  facilities:
                    "Exhibition Stand, Platform for Technical Presentation, Registration Fees Waived for Two Participants, Logo in Brochure and Banner, Full-Page A4 Ad in Abstract Book",
                  price: "₹ XXXX or above",
                },
                {
                  name: "SILVER",
                  facilities:
                    "Exhibition Stand, Complimentary Registration for Two, Logo in Brochure and Banner",
                  price: "₹ XXXX or above",
                },
                {
                  name: "BRONZE",
                  facilities:
                    "Complimentary Registration for Two, Logo on Banner",
                  price: "₹ XXXX or above",
                },
                {
                  name: "Academic/Industrial",
                  facilities:
                    "Exhibition stall with two tables and electrical connections",
                  price: "₹ XXXX",
                },
              ].map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-5"}>
                  <td className="border px-4 py-2 font-bold ">{item.name}</td>
                  <td className="border px-4 py-2">{item.facilities}</td>
                  <td className="border px-4 py-2">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4">
            Additional Sponsorship Opportunities
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {[
              "Delegate Kit",
              "Conference Lunch – XXXX INR/Day",
              "High Tea – XXXX INR/Day",
              "Conference Breakfast – XXXX INR/Day",
              "Tea Break – XXXX INR/Break",
              "Plenary Lecture – XXXX INR/Lecture",
              "Poster Sessions – XXXX INR/Lecture",
              "Abstract Book – XXXX INR",
              "Conference Proceedings – XXXX INR",
              "Banner – XXXX INR",
            ].map((item, i) => (
              <li key={i}>Sponsorship of {item}</li>
            ))}
          </ul>
          <p className="mt-4 italic">
            If the above options do not fit your marketing needs, the support
            opportunities can be customized for your requirements.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-2">Important Dates</h3>
          <p>
            Last date for receipt of advertisement materials:{" "}
            <strong>XXXX</strong>
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Bank Account Details</h3>
          <ul className="list-disc list-inside">
            <li>
              <strong>Account Name:</strong> xxxx
            </li>
            <li>
              <strong>Account No:</strong> xxxx
            </li>
            <li>
              <strong>Bank Name:</strong> xxxx
            </li>
            <li>
              <strong>IFSC Code:</strong> xxxx
            </li>
            <li>
              <strong>Branch Address:</strong> xxxx
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-blue-900 text-white text-center p-4 mt-8">
        &copy; 2026 NIT Patna. All rights reserved.
      </footer>
    </div>
  );
};

export default SponsorshipPage;