// src/components/Dashboard.js

import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaChartBar,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const Sidebar = ({ isOpen, setIsSidebarOpen }) => (
  <div
    onMouseEnter={() => setIsSidebarOpen(true)}
    onMouseLeave={() => setIsSidebarOpen(false)}
    className={`fixed inset-0 top-0 h-full overflow-x-hidden  bg-gray-700 z-30 p-5 pt-[70px]  flex flex-col items-center transition-width duration-300 ${
      isOpen ? "w-64" : "w-16"
    }`}
  >
    <Link to="/" className="w-full text-white flex items-center my-2">
      <FaHome className="text-2xl" />
      {isOpen && <span className="ml-4">Home</span>}
    </Link>
    <Link to="/profile" className="w-full text-white flex items-center my-2">
      <FaUser className="text-2xl" />
      {isOpen && <span className="ml-4">Profile</span>}
    </Link>
    <Link to="/charts" className="w-full text-white flex items-center my-2">
      <FaChartBar className="text-2xl" />
      {isOpen && <span className="ml-4">Charts</span>}
    </Link>
    <Link to="/logout" className="w-full text-white flex items-center my-2">
      <FaSignOutAlt className="text-2xl" />
      {isOpen && <span className="ml-4">Logout</span>}
    </Link>
  </div>
);

const PortalWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-white text-white  ">
      <nav className="bg-gray-900 p-4 fixed w-full top-0 z-50 flex justify-between items-center">
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none md:hidden"
        >
          <FaBars className="text-2xl" />
        </button>
        <div className="text-white text-xl font-bold">Agency Portal</div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div
        className={`flex-grow ml-1 transition-margin duration-300 bg-white pl-16 mt-[70px]`}
      >
        {children}
      </div>
      <footer className="bg-gray-900 text-white p-4 mt-auto text-center ">
        &copy; 2024 Tula Gbolaga. All rights reserved.
      </footer>
    </div>
  );
};

export { PortalWrapper };
