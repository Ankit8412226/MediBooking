import React, { useState } from "react";
import { Mail } from "lucide-react"; // Assuming lucide-react for icons

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending a password reset request
    console.log("Password reset email sent to:", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border border-blue-200 rounded-xl shadow-xl">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Forgot Password
          </h2>
          <p className="text-gray-500 text-sm">
            Enter your email address to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border bg-white border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Reset Link
          </button>

          <div className="text-center text-gray-600">
            Remember your password?
            <a href="/Login" className="text-blue-500 ml-2 hover:underline">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
