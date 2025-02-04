import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets";

const jobListings = [
  {
    title: "Frontend Developer",
    location: "Washington, USA",
    description:
      "Work with React.js, JavaScript, and modern UI frameworks to build user interfaces.",
  },
  {
    title: "Backend Developer",
    location: "Remote",
    description:
      "Develop scalable backend services using Node.js, Express, and MongoDB.",
  },
  {
    title: "Product Manager",
    location: "New York, USA",
    description:
      "Oversee product development and coordinate between design, engineering, and marketing teams.",
  },
  {
    title: "Doctor",
    location: "Los Angeles, USA",
    description:
      "Provide medical care, diagnose, and treat patients in various healthcare settings.",
  },
  {
    title: "Nurse",
    location: "San Francisco, USA",
    description:
      "Assist doctors and provide essential healthcare support in hospitals and clinics.",
  },
  {
    title: "Medical Helper",
    location: "Chicago, USA",
    description:
      "Support medical staff in patient care, prepare medical equipment, and assist in daily operations.",
  },
];

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-background") {
      closeModal();
    }
  };

  useEffect(() => {
    // Close modal on ESC key
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-10 py-10 gap-12 bg-white  w-full max-w-5xl mx-auto">
      {/* Contact Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src={assets.contact_image}
          alt="Contact Us"
          className="w-full max-w-md object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Contact Information */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Our Office</h3>
          <p className="mt-2 text-lg text-gray-600">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
        </div>

        <div>
          <p className="text-lg text-gray-600">Tel: (415) 555‑0132</p>
          <p className="text-lg text-gray-600">
            Email: greatstackdev@gmail.com
          </p>
        </div>

        <div className="w-full">
          <h3 className="text-xl font-semibold text-gray-800">
            Careers at PRESCRIPTO
          </h3>
          <p className="mt-2 text-gray-600">
            Learn more about our teams and job openings.
          </p>
          <button
            className="mt-4 bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
            onClick={openModal}
          >
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Job Modal */}
      {isModalOpen && (
        <div
          id="modal-background"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl mx-4 md:mx-auto max-h-[90vh] overflow-y-auto p-6 relative">
            {/* Scrollable content */}
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Job Openings
            </h3>
            <div className="flex flex-col gap-4">
              {jobListings.map((job, index) => (
                <div key={index} className="p-4 border-b border-gray-300">
                  <h4 className="text-lg font-semibold text-gray-700">
                    {job.title}
                  </h4>
                  <p className="text-sm text-gray-500">{job.location}</p>
                  <p className="text-gray-600">{job.description}</p>
                  <button className="mt-3 bg-green-500 text-white font-semibold py-1 px-4 rounded-lg hover:bg-green-600">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
            <button
              className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 w-full md:w-auto mx-auto block"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
