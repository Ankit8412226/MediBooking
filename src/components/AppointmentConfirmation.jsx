import React, { useState } from "react";
import {
  Calendar,
  Clock,
  CreditCard,
  Trash2,
  Edit2,
  MoreVertical,
  CheckCircle2,
  Star,
  DollarSign,
  X,
  MapPin,
  Phone,
  Mail,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { doctors } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-xl w-full max-w-md mx-4 shadow-xl"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="text-gray-500" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </motion.div>
    </motion.div>
  );
};

const AppointmentCard = ({ onCancel, onReschedule }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isHoveringStars, setIsHoveringStars] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [appointment] = useState({
    id: "app1",
    doctorId: "doc1",
    date: "2024-03-15",
    time: "02:00 PM",
    status: "pending",
    location: "123 Medical Center, Suite 4B",
    price: 150,
    review: null,
  });
  const navigate = useNavigate();
  const handleReschedule = () => {
    // You can pass appointment data through state
    navigate(`/appointment/${doctor._id}`);
  };

  const doctor = {
    _id: "doc1",
    name: "Dr. Sarah Wilson",
    speciality: "Cardiologist",
    image: doctors[0].image,
    phone: "+1 (555) 123-4567",
    email: "dr.wilson@medical.com",
    rating: 4.8,
    experience: "15+ years",
  };

  const handlePayment = () => {
    setTimeout(() => {
      alert("Payment processed successfully!");
      setShowPaymentModal(false);
    }, 1000);
  };

  const handleSubmitReview = () => {
    if (!rating || !review.trim()) {
      alert("Please provide both rating and review");
      return;
    }
    appointment.review = {
      rating,
      comment: review,
      date: new Date().toISOString(),
    };
    setShowReviewModal(false);
    setRating(0);
    setReview("");
  };

  const PaymentModal = () => (
    <Modal
      isOpen={showPaymentModal}
      onClose={() => setShowPaymentModal(false)}
      title="Complete Payment"
    >
      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Appointment Summary</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-blue-500" />{" "}
              {appointment.date}
            </p>
            <p className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />{" "}
              {appointment.time}
            </p>
            <p className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-blue-500" />{" "}
              {appointment.location}
            </p>
          </div>
          <div className="mt-4 pt-4 border-t">
            <p className="flex justify-between items-center text-lg font-bold">
              <span>Total Amount:</span>
              <span className="text-blue-600">${appointment.price}</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="CVV"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Pay ${appointment.price}
        </button>
      </div>
    </Modal>
  );

  const ReviewModal = () => (
    <Modal
      isOpen={showReviewModal}
      onClose={() => setShowReviewModal(false)}
      title="Write a Review"
    >
      <div className="space-y-6">
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Star
                className={`w-8 h-8 cursor-pointer ${
                  star <= (isHoveringStars || rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
                onMouseEnter={() => setIsHoveringStars(star)}
                onMouseLeave={() => setIsHoveringStars(0)}
                onClick={() => setRating(star)}
              />
            </motion.div>
          ))}
        </div>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Share your experience with Dr. Wilson..."
          className="w-full p-4 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmitReview}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Submit Review
        </button>
      </div>
    </Modal>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative p-6">
        {/* Doctor Info Section */}
        <div className="flex items-start">
          <div className="relative">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-20 h-20 rounded-xl object-cover"
            />
            <CheckCircle2 className="absolute -bottom-1 -right-1 text-green-500 bg-white rounded-full" />
          </div>
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {doctor.name}
                </h3>
                <p className="text-gray-600">{doctor.speciality}</p>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(doctor.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {doctor.rating}
                  </span>
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() => setIsOptionsOpen(!isOptionsOpen)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <MoreVertical className="text-gray-600" />
                </button>

                <AnimatePresence>
                  {isOptionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-xl py-2 z-10"
                    >
                      {[
                        {
                          icon: Edit2,
                          label: "Reschedule",
                          color: "blue",
                          onClick: handleReschedule,
                        },
                        {
                          icon: Trash2,
                          label: "Cancel",
                          color: "red",
                          onClick: onCancel,
                        },
                        {
                          icon: DollarSign,
                          label: "Pay Now",
                          color: "green",
                          onClick: () => setShowPaymentModal(true),
                        },
                        {
                          icon: Star,
                          label: "Write Review",
                          color: "yellow",
                          onClick: () => setShowReviewModal(true),
                        },
                      ].map((option, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            option.onClick();
                            setIsOptionsOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center transition-colors"
                        >
                          <option.icon
                            className={`mr-2 text-${option.color}-500`}
                            size={18}
                          />
                          {option.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Details */}
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <Calendar className="text-blue-500" />
              <span className="ml-2 font-medium">{appointment.date}</span>
            </div>
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <Clock className="text-green-500" />
              <span className="ml-2 font-medium">{appointment.time}</span>
            </div>
          </div>

          <motion.div
            animate={{
              height: showDetails ? "auto" : 0,
              opacity: showDetails ? 1 : 0,
            }}
            className="overflow-hidden mt-4"
          >
            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" /> {appointment.location}
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" /> {doctor.phone}
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" /> {doctor.email}
              </p>
            </div>
          </motion.div>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mt-4 text-blue-600 text-sm hover:underline focus:outline-none"
          >
            {showDetails ? "Show less" : "Show more details"}
          </button>
        </div>

        {/* Payment Status */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <span
              className={`px-3 py-1 rounded-full text-sm flex items-center ${
                appointment.status === "paid"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {appointment.status === "paid" ? "Paid" : "Payment Pending"}
            </span>
          </div>
          {appointment.status !== "paid" && (
            <button
              onClick={() => setShowPaymentModal(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Pay ${appointment.price}
            </button>
          )}
        </div>
      </div>

      {/* Modals */}
      <PaymentModal />
      <ReviewModal />
    </motion.div>
  );
};

export default AppointmentCard;
