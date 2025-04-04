import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConferenceTrack from "../components/ConferenceTrack";

const Authors = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col gap-4 items-start">
        <button
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg w-full text-left font-semibold hover:bg-gray-300"
          onClick={() => toggleSection("guidelines")}
        >
          Guidelines to Authors
        </button>
        {visibleSection === "guidelines" && (
          <section className="p-6 bg-white shadow-md rounded-lg w-full">
            <h2 className="text-2xl font-bold mb-3">Guidelines to Authors</h2>
            <p className="text-gray-700">We invite researchers, academicians, and industry professionals to submit papers presenting original, innovative, and high-quality research in line with the conference tracks. Submissions should reflect substantial contributions, including novel methodologies, experimental findings, case studies, or groundbreaking theoretical advancements.</p>

            <h3 className="text-xl font-semibold mt-4">Submission Guidelines:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>The manuscripts must strictly adhere to the Springer template and page limits as follows: Regular Paper: 5 - 7 pages, and must concisely present the research problem, methodology, key findings, and conclusions.</li>
              <li>All submissions must align with the conference tracks and should demonstrate technical rigor and clarity.</li>
              <li>Manuscripts should be formatted as per the prescribed submission template and submitted via the submission link only.</li>
              <li>The manuscript must include sufficient technical details to facilitate a thorough review while maintaining a clear and concise narrative.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Evaluation & Selection:</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>All submissions will undergo a peer-review process to ensure technical excellence, originality, and contribution to the field.</li>
              <li>Selected papers will be invited for presentation at the conference, with an opportunity for full paper submission in reputed journals or conference proceedings.</li>
            </ul>

            <p className="text-gray-700 mt-4">Please refer to the author templates given below:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>MS Word template:</strong> <Link to="#" className="text-blue-600 underline">Doc Template</Link></li>
              <li><strong>LaTex Formatting Macros:</strong> <Link to="#" className="text-blue-600 underline">Tex Template</Link></li>
            </ul>
          </section>
        )}

        <button
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg w-full text-left font-semibold hover:bg-gray-300"
          onClick={() => toggleSection("tracks")}
        >
          Conference Tracks
        </button>
        {visibleSection === "tracks" && (
          <section className="p-6 bg-white shadow-md rounded-lg w-full">
            <ConferenceTrack/>
          </section>
        )}

        <button
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg w-full text-left font-semibold hover:bg-gray-300"
          onClick={() => toggleSection("submission")}
        >
          Paper Submission
        </button>
        {visibleSection === "submission" && (
          <section className="p-6 bg-white shadow-md rounded-lg w-full">
            <h2 className="text-2xl font-bold mb-3">Paper Submission</h2>
            <p className="text-gray-700">How and where to submit your research paper.</p>
            <ul className="list-disc pl-6 text-gray-700 mt-4">
              <li><strong>Submission of Full-Length Paper:</strong> xxxx</li>
              <li><strong>Notification of Acceptance:</strong> xxxx</li>
              <li><strong>Revised Paper Submission Deadline:</strong> xxxx</li>
              <li><strong>Final Notification Acceptance:</strong> xxxx</li>
              <li><strong>Date of Conference:</strong> xxxx</li>
              <li><strong>Submission link:</strong> <Link to="#" className="text-blue-600 underline">Click here</Link></li>
            </ul>
          </section>
        )}

        <button
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg w-full text-left font-semibold hover:bg-gray-300"
          onClick={() => toggleSection("registration")}
        >
          Registration
        </button>
        {visibleSection === "registration" && (
          <section className="p-6 bg-white shadow-md rounded-lg w-full">
            <h2 className="text-2xl font-bold mb-3">Registration</h2>
            <p className="text-gray-700">To ensure inclusion in the final conference program for presentation and publication, authors must adhere to the following registration requirements:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>✔ Mandatory Registration:</strong> At least one author (Main Author) of each accepted paper must complete the registration on or before the final registration deadline.</li>
              <li><strong>✔ Paper Limit per Registration:</strong> Each full registration allows for the presentation and publication of one (1) manuscript only. The manuscript must be between 5 to 7 pages in length.</li>
              <li><strong>✔ Payment Confirmation:</strong> Authors must retain a copy of their Transaction ID/UTR number generated by the payment gateway or bank. This will be required for payment verification and tracking.</li>
              <li><strong>✔ Non-Refundable Fee:</strong> The registration fee is non-refundable under any circumstances.</li>
            </ul>
            <p className="text-gray-700 mt-4">For any queries regarding the registration process, please contact the conference secretariat or refer to the official conference website.</p>
            <h3 className="text-xl font-semibold mt-4">Note: (Optional for Co-presenter registration)</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>✔ Joint Presentation:</strong> Accepted paper authors may opt for a joint presentation. Both the main author and co-presenter must register separately to receive a presentation certificate.</li>
              <li><strong>✔ Attendee Registration (Non-Author):</strong> Includes access to keynote sessions, panel discussions, and technical sessions. Papers will not be included in conference proceedings. A participation certificate will be provided upon successful registration.</li>
            </ul>
            <div className="container mx-auto px-4 py-8 w-full overflow-scroll">
              <h2 className="text-3xl font-bold mb-6">REGISTRATION FEE DETAILS (including tax)</h2>
              <table className="table-auto w-full border-collapse overflow-scroll">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-6 py-3 border border-gray-300">Category</th>
                    <th className="px-6 py-3 border border-gray-300">Early Registration<br />Before Date</th>
                    <th className="px-6 py-3 border border-gray-300">Late Registration<br />After Date</th>
                    <th className="px-6 py-3 border border-gray-300">Additional paper from same author</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-3 border border-gray-300">Students/Research Scholar</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border border-gray-300">Academicians</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border border-gray-300">Industry Participants</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border border-gray-300">Foreign Authors</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border border-gray-300">Accompanying Person</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                    <td className="px-6 py-3 border border-gray-300">xxxx</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Account Details</h3>
              <div className="space-y-4">
                <div>
                  <strong>Bank Name:</strong> XYZ Bank
                </div>
                <div>
                  <strong>Branch:</strong> ABC Branch
                </div>
                <div>
                  <strong>IFSC Code:</strong> ABCD1234
                </div>
                <div>
                  <strong>MICR Code:</strong> 123456789
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Authors;
