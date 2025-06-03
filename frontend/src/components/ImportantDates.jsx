import React from 'react';

const EventTimeline = () => {
    const dates = [
      {
        title: "Paper Submission Start Date",
        date: "June 16, 2025",
        description: "Start date to submit research papers for review.",
      },
        {
          title: "Paper Submission Deadline",
          date: "November 28, 2025",
          description: "Final date to submit research papers for review.",
        },
        {
          title: "Notification of Acceptance",
          date: "December 29, 2025",
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
    
      return (
        <div className="max-w-5xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Important Dates
          </h2>
          <div className="grid lg:grid-cols-1 gap-6">
            {dates.map((event, index) => (
              <div
                key={index}
                className="bg-[#C9D8FF] shadow-md rounded-lg p-6 border-4 border-blue-500"
              >
                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <p className="text-blue-600 font-bold text-md underline">{event.date}</p>
                <p className="text-gray-700 text-sm mt-2">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default EventTimeline;
