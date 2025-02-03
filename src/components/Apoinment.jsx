import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doctors } from "../assets/assets_frontend/assets";
import { format, addDays, startOfToday } from "date-fns";

const DoctorDetails = () => {
  const { id } = useParams();
  const [relatedDoctors, setRelatedDoctors] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableSlots, setAvailableSlots] = useState({});

  // Find the doctor by id
  const doctor = doctors.find((doc) => doc._id === id);

  const navigate = useNavigate();

  // Generate current week dates
  const generateWeekDates = () => {
    const today = startOfToday();
    return Array.from({ length: 7 }, (_, i) => {
      const date = addDays(today, i);
      return {
        date,
        day: format(date, "EEE"),
        dayNum: format(date, "d"),
        fullDate: format(date, "yyyy-MM-dd"),
      };
    });
  };

  // Predefined time slots
  const timeSlots = [
    "10:00 am",
    "10:30 am",
    "11:00 am",
    "11:30 am",
    "12:00 pm",
    "12:30 pm",
    "01:30 pm",
    "02:00 pm",
    "02:30 pm",
    "03:00 pm",
    "03:30 pm",
    "04:00 pm",
    "04:30 pm",
    "05:00 pm",
    "05:30 pm",
    "06:00 pm",
  ];

  // Mock availability (in a real app, this would come from backend)
  const generateAvailableSlots = () => {
    const slots = {};
    generateWeekDates().forEach((dateObj) => {
      slots[dateObj.fullDate] = timeSlots.reduce((acc, time) => {
        // Randomly mark some slots as booked (simulating real-world scenario)
        acc[time] = Math.random() > 0.3;
        return acc;
      }, {});
    });
    return slots;
  };

  // Initialize related doctors and available slots
  useEffect(() => {
    if (doctor) {
      // Set related doctors
      setRelatedDoctors(
        doctors.filter(
          (doc) =>
            doc.speciality === doctor.speciality && doc._id !== doctor._id
        )
      );

      // Generate available slots
      setAvailableSlots(generateAvailableSlots());
    }
  }, [doctor]);

  // Handle date selection
  const handleDateSelect = (dateObj) => {
    setSelectedDate(dateObj);
    setSelectedTime(null);
  };

  // Handle time slot selection
  const handleTimeSelect = (time) => {
    if (!availableSlots[selectedDate.fullDate][time]) {
      setSelectedTime(time);
    }
  };

  // Handle booking appointment
  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      alert(
        `Booking appointment with Dr. ${doctor.name} on ${selectedDate.fullDate} at ${selectedTime}`
      );
      // In a real app, you would integrate with a booking backend
    } else {
      alert("Please select both date and time");
    }
  };

  if (!doctor) {
    return <p>Doctor not found</p>;
  }

  const handleNavigate = (id) => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    navigate(`/appointment/${id}`);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Doctor Image */}
        <div className="w-full md:w-1/3 bg-blue-50 p-6 rounded-2xl flex justify-center items-center shadow-md">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full max-w-[300px] h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Doctor Details */}
        <div className="w-full md:w-2/3 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {doctor.name} <span className="text-blue-500">✔</span>
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              {doctor.degree} - {doctor.speciality} ({doctor.experience} )
            </p>
            <p className="text-md text-gray-600">{doctor.about}</p>
          </div>

          <div>
            <p className="text-lg font-semibold text-gray-700">
              Appointment fee:{" "}
              <span className="text-gray-900 font-bold">${doctor.fees}</span>
            </p>
          </div>

          {/* Booking Dates */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Select a Date</h3>
            <div className="flex overflow-x-auto space-x-3 pb-3 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
              {generateWeekDates().map((dateObj) => (
                <button
                  key={dateObj.fullDate}
                  onClick={() => handleDateSelect(dateObj)}
                  className={`flex-shrink-0 w-20 py-3 rounded-xl border-2 text-center transition duration-300 
                    ${
                      selectedDate?.fullDate === dateObj.fullDate
                        ? "bg-blue-500 text-white border-blue-600"
                        : "border-gray-300 text-gray-700 hover:bg-blue-100 hover:border-blue-300"
                    }`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium">{dateObj.day}</span>
                    <span className="text-lg font-bold">{dateObj.dayNum}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Slots */}
          {selectedDate && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Select a Time Slot</h3>
              <div className="flex overflow-x-auto space-x-3 pb-3 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
                {timeSlots.map((time, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTimeSelect(time)}
                    disabled={availableSlots[selectedDate.fullDate]?.[time]}
                    className={`flex-shrink-0 w-24 py-3 rounded-xl border-2 text-center transition duration-300
                      ${
                        selectedTime === time
                          ? "bg-primary text-white border-blue-600"
                          : availableSlots[selectedDate.fullDate]?.[time]
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300"
                          : "border-gray-300 text-gray-700 hover:bg-blue-100 hover:border-blue-300"
                      }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Book Appointment Button */}
          <div className="flex items-start justify-center w-full">
            <button
              onClick={handleBookAppointment}
              disabled={!selectedDate || !selectedTime}
              className={`w-full py-4 rounded-full font-semibold text-lg transition duration-300 
                ${
                  selectedDate && selectedTime
                    ? "bg-primary text-white hover:bg-blue-600 shadow-md"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Related Doctors */}
      {relatedDoctors.length > 0 && (
        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-8 text-gray-800">
            Related Doctors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedDoctors.map((item) => (
              <div
                key={item._id}
                className="flex flex-col border border-blue-200 rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                onClick={() => handleNavigate(item._id)}
              >
                <div className="w-full bg-[#EAEFFF] rounded-t-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Doctor ${item.name}`}
                    className="w-full object-cover"
                  />
                </div>
                <p className="text-green-500 px-4 text-left w-full flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full border-4 border-green-500" />
                  Available
                </p>
                <p className="text-sm font-medium text-left text-gray-800 px-4">
                  {item.name}
                </p>
                <p className="text-sm text-left text-gray-600 px-4 mb-4">
                  {item.speciality}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDetails;
