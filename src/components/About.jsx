import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center max-w-7xl mx-auto px-6 py-8">
        <h1 className="mb-12 text-center text-4xl font-semibold">
          About <span className="text-primary">Us</span>
        </h1>

        <div className="flex flex-col md:flex-row items-start justify-between gap-16 w-full">
          <div className="flex-1 w-full md:w-1/2">
            <img
              src={assets.about_image}
              alt="About Us"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex flex-col flex-1 w-full md:w-1/2 space-y-6 font-light">
            <p className="leading-relaxed">
              Welcome to <span className="font-medium">Prescripto</span>, your
              trusted partner in managing your healthcare needs conveniently and
              efficiently. At Prescripto, we understand the challenges
              individuals face when it comes to scheduling doctor appointments
              and managing their health records.
            </p>

            <p className="leading-relaxed">
              Prescripto is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, Prescripto is here to support you every
              step of the way.
            </p>

            <div className="pt-4">
              <h2 className="mb-4 text-2xl font-medium">Our Vision</h2>
              <p className="leading-relaxed">
                Our vision at Prescripto is to create a seamless healthcare
                experience for every user. We aim to bridge the gap between
                patients and healthcare providers, making it easier for you to
                access the care you need, when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg border-l-4 border-primary shadow-sm">
              <h3 className="text-xl font-medium mb-3">Efficiency</h3>
              <p className="text-gray-600">
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-primary shadow-sm">
              <h3 className="text-xl font-medium mb-3">Convenience</h3>
              <p className="text-gray-600">
                Access to a network of trusted healthcare professionals in your
                area.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-primary shadow-sm">
              <h3 className="text-xl font-medium mb-3">Personalization</h3>
              <p className="text-gray-600">
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
