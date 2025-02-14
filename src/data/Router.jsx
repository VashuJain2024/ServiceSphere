import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import TopRatedServices from "../components/TopRatedServices";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import About from "../components/Aboutus";
import Services from "../components/Services";
import Profile from "../components/Profile";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import SubscriptionPlans from "../components/SubscriptionPlans";
import TaskForm from "../components/TaskForm";
import TaskerList from "../components/TaskerList";
import TaskScheduler from "../components/TaskScheduler";
import LoginSignUp from "../components/Login-SignUp";
import TermsAndConditions from "../components/TermsAndConditions";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <div style={{ marginTop: "69px" }}>
              <Slider />
              <TopRatedServices />
              <WhyChooseUs />
              <Testimonials />
              <HowItWorks />
              <SubscriptionPlans />
              <Footer />
            </div>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login-signup" element={<LoginSignUp />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/task-form" element={<TaskForm />} />
        <Route path="/services/task-form/taskers" element={<TaskerList />} />
        <Route
          path="/services/task-form/taskers/taskSchedule"
          element={<TaskScheduler />}
        />
        <Route
          path="/services/task-form/taskers/taskSchedule/terms"
          element={<TermsAndConditions />}
        />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
