import React from 'react';
import { Link } from 'react-router-dom';

const Guidelines = () => {
  return (
    <div className="px-6 py-12">
      <section className="bg-white shadow-xl rounded-lg w-full p-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 border-b-2 border-blue-600 pb-3">Guidelines to Authors</h2> {/* Blue underline here */}
        <p className="text-lg text-gray-700 mb-6">
           All papers must be submitted electronically thorough Microsoft CMT.
           We invite researchers, academicians, and industry professionals to submit papers presenting original, innovative, and high-quality research in line with the conference tracks. Submissions should reflect substantial contributions, including novel methodologies, experimental findings, case studies, or groundbreaking theoretical advancements.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Submission Guidelines:</h3> {/* No underline here */}
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
          <li>The manuscripts must strictly adhere to the Springer template and page limits as follows: Regular Paper: 5 - 7 pages, and must concisely present the research problem, methodology, key findings, and conclusions.</li>
          <li>All submissions must align with the conference tracks and should demonstrate technical rigor and clarity.</li>
          <li>Manuscripts should be formatted as per the prescribed submission template and submitted via the submission link only.</li>
          <li>The manuscript must include sufficient technical details to facilitate a thorough review while maintaining a clear and concise narrative.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6">Evaluation & Selection:</h3> {/* No underline here */}
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
          <li>All submissions will undergo a peer-review process to ensure technical excellence, originality, and contribution to the field.</li>
          <li>Selected papers will be invited for presentation at the conference, with an opportunity for full paper submission in reputed journals or conference proceedings.</li>
        </ul>

        <p className="text-lg text-gray-700 mt-6">Please refer to the author templates given below:</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
          <li><strong>MS Word template:</strong> <Link target='blank' to="https://drive.google.com/drive/folders/17kJUd9-buu3O-etJV6EGUJjWq_48f7Tl?usp=sharing" className="text-blue-600 underline hover:text-blue-800">Doc Template</Link></li>
          <li><strong>LaTex Formatting Macros:</strong> <Link target='blank' to="https://www.overleaf.com/latex/templates/springer-conference-proceedings-template-updated-2022-01-12/wcvbtmwtykqj" className="text-blue-600 underline hover:text-blue-800">Tex Template</Link></li>
        </ul>
      </section>
    </div>
  );
}

export default Guidelines;
