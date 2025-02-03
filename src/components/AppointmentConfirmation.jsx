import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../assets/assets_frontend/assets";
import {
  Calendar,
  Clock,
  CreditCard,
  Trash2,
  Edit2,
  MoreVertical,
  CheckCircle2,
} from "lucide-react";

const AppointmentCard = ({ appointment, onCancel, onReschedule }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const doctor = doctors.find((doc) => doc._id === appointment.doctorId);

  if (!doctor) return null;

  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Options Dropdown */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <MoreVertical className="text-gray-600" />
        </button>

        {isOptionsOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-lg py-2">
            <button
              onClick={() => {
                onReschedule(appointment);
                setIsOptionsOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
            >
              <Edit2 className="mr-2 text-blue-500" size={18} /> Reschedule
            </button>
            <button
              onClick={() => {
                onCancel(appointment);
                setIsOptionsOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
            >
              <Trash2 className="mr-2 text-red-500" size={18} /> Cancel
            </button>
          </div>
        )}
      </div>

      {/* Appointment Content */}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              {doctor.name}
              <CheckCircle2 className="ml-2 text-green-500" size={20} />
            </h3>
            <p className="text-gray-600">{doctor.speciality}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Calendar className="mr-2 text-blue-500" />
            <span className="font-medium">{appointment.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 text-green-500" />
            <span className="font-medium">{appointment.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppointmentsManagement = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([
    {
      id: "app1",
      doctorId: doctors[0]._id,
      date: "2024-03-15",
      time: "02:00 PM",
      status: "confirmed",
    },
    {
      id: "app2",
      doctorId: doctors[1]._id,
      date: "2024-03-22",
      time: "11:30 AM",
      status: "confirmed",
    },
  ]);

  const handleCancelAppointment = (appointmentToCancel) => {
    // Confirm cancellation
    const confirmCancel = window.confirm(
      `Are you sure you want to cancel the appointment with ${
        doctors.find((doc) => doc._id === appointmentToCancel.doctorId).name
      }?`
    );

    if (confirmCancel) {
      setAppointments((prevAppointments) =>
        prevAppointments.filter((app) => app.id !== appointmentToCancel.id)
      );
    }
  };

  const handleReschedule = (appointment) => {
    // Navigate to doctor details with existing appointment info
    navigate(`/appointment/${appointment.doctorId}`, {
      state: { existingAppointment: appointment },
    });
  };

  const handleNewAppointment = () => {
    navigate("/AllDoctors");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
          <button
            onClick={handleNewAppointment}
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center"
          >
            <CreditCard className="mr-2" /> Book New Appointment
          </button>
        </div>

        {appointments.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-md">
            <p className="text-xl text-gray-600 mb-4">
              You have no upcoming appointments
            </p>
            <button
              onClick={handleNewAppointment}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Book Your First Appointment
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {appointments.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                onCancel={handleCancelAppointment}
                onReschedule={handleReschedule}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentsManagement;
