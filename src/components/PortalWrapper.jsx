// src/components/Dashboard.js

import React, { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaBriefcase,
  FaFileAlt,
  FaUserFriends,
} from "react-icons/fa";
import Logo from "../assets/logo.png";
import { GrOrganization, GrUserAdd, GrUserWorker } from "react-icons/gr";
import { MdSchedule } from "react-icons/md";
import { PrivateRoute } from "./PrivateRoute";
import { useLogout } from "../hooks";

const MenuItem = ({ isOpen, name, to, isLogout, children }) => {
  const { logout } = useLogout();
  const navigate = useNavigate();
  if (!isLogout) {
    return (
      <Link to={to} className="w-full text-white flex items-center my-2">
        {children}
        {isOpen && <span className="ml-4">{name}</span>}
      </Link>
    );
  } else {
    return (
      <div
        className="w-full text-white flex items-center my-2"
        onClick={() => {
          logout();
          navigate(to);
        }}
      >
        {children}
        {isOpen && <span className="ml-4">{name}</span>}
      </div>
    );
  }
};

const AdminMenuItems = ({ isOpen }) => {
  return (
    <>
      <MenuItem isOpen={isOpen} name="Agencies" to="/admin">
        <FaHome className="text-2xl" />
      </MenuItem>
      <MenuItem isOpen={isOpen} name="Logout" to="/login/admin">
        <FaSignOutAlt className="text-2xl" />
      </MenuItem>
    </>
  );
};

const AgencyMenuItems = ({ isOpen }) => {
  return (
    <>
      <MenuItem isOpen={isOpen} name="Home" to="/agency">
        <FaHome className="text-2xl" />
      </MenuItem>
      <MenuItem isOpen={isOpen} name="Jobs" to="/agency/jobs">
        <FaBriefcase className="text-2xl" />
      </MenuItem>

      <MenuItem isOpen={isOpen} name="Booked Jobs" to="/agency/bookedjobs">
        <MdSchedule className="text-2xl" />
      </MenuItem>
      <MenuItem isOpen={isOpen} name="Job Seekers" to="/agency/contractors">
        <GrUserWorker className="text-2xl" />
      </MenuItem>

      <MenuItem isOpen={isOpen} name="Staff" to="/agency/staff">
        <FaUserFriends className="text-2xl" />
      </MenuItem>
      <MenuItem isOpen={isOpen} name="Profile" to="/agency/profile">
        <FaUser className="text-2xl" />
      </MenuItem>
      <MenuItem isOpen={isOpen} name="Logout" to="/login/agency">
        <FaSignOutAlt className="text-2xl" />
      </MenuItem>
    </>
  );
};

const JobseekerMenuItems = ({ isOpen }) => {
  return (
    <>
      <MenuItem isOpen={isOpen} name="Home" to="/jobseeker">
        <FaHome className="text-2xl" />
      </MenuItem>

      <MenuItem isOpen={isOpen} name="Jobs" to="/jobseeker/jobs">
        <FaBriefcase className="text-2xl" />
      </MenuItem>
      <MenuItem
        isOpen={isOpen}
        name="Applications"
        to="/jobseeker/applications"
      >
        <FaFileAlt className="text-2xl" />
      </MenuItem>
      <MenuItem isOpen={isOpen} name="Shifts" to="/jobseeker/shifts">
        <MdSchedule className="text-2xl" />
      </MenuItem>
      <MenuItem isOpen={isOpen} name="Invites" to="/jobseeker/invites">
        <GrUserAdd className="text-2xl" />
      </MenuItem>
      <MenuItem isOpen={isOpen} name="Profile" to="/jobseeker/profile">
        <FaUser className="text-2xl" />
      </MenuItem>
      <MenuItem isOpen={isOpen} name="Agencies" to="/jobseeker/agencies">
        <GrOrganization className="text-2xl" />
      </MenuItem>
      <MenuItem isOpen={isOpen} name="Logout" to="/login">
        <FaSignOutAlt className="text-2xl" />
      </MenuItem>
    </>
  );
};

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  const { pathname } = useLocation();
  const isAdmin = pathname.includes("admin");
  const isAgency = pathname.includes("agency");
  const isJobSeeker = pathname.includes("jobseeker");
  return (
    <div
      onMouseEnter={() => setIsSidebarOpen(true)}
      onMouseLeave={() => setIsSidebarOpen(false)}
      className={`fixed inset-0 top-0 h-full overflow-x-hidden  bg-gray-700 z-30 p-5 pt-[70px]  flex flex-col items-center transition-width duration-300 ${
        isOpen ? "w-64" : "md:w-16 hidden md:block  "
      }`}
    >
      {isAdmin && <AdminMenuItems isOpen={isOpen} />}
      {isAgency && <AgencyMenuItems isOpen={isOpen} />}
      {isJobSeeker && <JobseekerMenuItems isOpen={isOpen} />}
    </div>
  );
};

const PortalWrapper = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <PrivateRoute>
      <div className="relative flex flex-col min-h-screen bg-white text-white  ">
        <nav className="bg-gray-900 px-4 py-1 fixed w-full top-0 z-50 flex justify-between items-center">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none md:hidden"
          >
            <FaBars className="text-2xl" />
          </button>
          <div className=" flex justify-center mb-2 w-[100px] h-[40px] ">
            <img src={Logo} alt="cardimg" />
          </div>
        </nav>
        <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div
          className={`flex-grow ml-1 transition-margin duration-300 bg-white md:pl-16 mt-[70px]`}
        >
          {children}
        </div>
        <footer className="bg-gray-900 text-white p-4 mt-auto text-center ">
          &copy; 2024 Tula Gbolaga. All rights reserved.
        </footer>
      </div>
    </PrivateRoute>
  );
};

export { PortalWrapper };
