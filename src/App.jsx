// App.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import MainLyout from "./pages/MainLyout";
import AllDoctors from "./components/AllDoctors";
import About from "./components/About";
import Appointment from "./components/Apoinment";
import AppointmentConfirmation from "./components/AppointmentConfirmation";
import Contact from "./components/Contact";

function App() {
  return (
    // Do not include another BrowserRouter here
    <div className="mx-4 sm:mx-[10%] mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<MainLyout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/AllDoctors" element={<AllDoctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment/:id" element={<Appointment />} />
          <Route
            path="AppointmentConfirmation/:id"
            element={<AppointmentConfirmation />}
          />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
