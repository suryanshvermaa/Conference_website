const dates = [
  {
    title: "Paper Submission Start Date",
    date: "June 16, 2025",
    description: "Start date to submit research papers for review.",
  },
    {
      title: "Paper Submission Deadline",
      date: "December 18, 2025 (extended)",
      description: "Final date to submit research papers for review.",
    },
    {
      title: "Notification of Acceptance",
      date: "January 10, 2026",
      description: "Authors will receive acceptance or rejection notifications.",
    },
    {
      title: "Early Bird Registration",
      date: "January 25, 2026",
      description: "Deadline for early bird registration for the conference.",
    },
    {
      title: "Camera-Ready Submission",
      date: "February 16, 2026",
      description: "Final versions of accepted papers must be submitted.",
    },
    {
      title: "Last Date of Registration",
      date: "February 23, 2026",
      description: "Final date for all participants to register for the conference.",
    },
    {
      title: "Conference Start Date",
      date: "March 6, 2026",
      description: "The official start of the International Conference.",
    },
    {
      title: "Conference End Date",
      date: "March 8, 2026",
      description: "The final day of the conference.",
    },
  ];

const EventTimeline = () => {  
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Important Dates
      </h2>
      <div className="bg-[#C9D8FF] shadow-md rounded-lg p-6 border-4 border-blue-500">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left p-2 border-b-2 border-blue-400">Event</th>
              <th className="text-left p-2 border-b-2 border-blue-400">Date</th>
              <th className="text-left p-2 border-b-2 border-blue-400">Description</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((event, index) => (
              <tr key={index} className="hover:bg-blue-100">
                {
                  event.title === "Paper Submission Deadline" ?
                     <>
                     <td className="p-2 border-b border-blue-200 font-extrabold underline">{event.title}</td>
                      <td className="p-2 border-b border-blue-200 text-gray-800 font-extrabold underline">{event.date}</td>
                      <td className="p-2 border-b border-blue-200 text-gray-700 font-extrabold underline">{event.description}</td>
                     </>:
                      <>
                       <td className="p-2 border-b border-blue-200 font-semibold">{event.title}</td>
                      <td className="p-2 border-b border-blue-200 text-blue-600 font-bold">{event.date}</td>
                      <td className="p-2 border-b border-blue-200 text-gray-700">{event.description}</td></>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventTimeline;
