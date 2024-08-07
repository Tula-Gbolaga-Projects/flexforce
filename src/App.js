import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  JobSeekerDashboard,
  Register as JobSeekerRegistration,
  Profile as JobSeekerProfile,
} from "./pages/JobSeeker";
import { Login } from "./pages";
import { AgencyDashboard, AgencyRegistration } from "./pages/Agency";

function App() {
  return (
    <Routes>
      {/* Login pages */}
      {/* default login route assigned to Job seeker login */}
      <Route path="/Login" element={<Login />}>
        <Route path="Agency" element={<Login />} />
        <Route path="Admin" element={<Login />} />
      </Route>

      {/* Job seeker pages */}
      <Route path="/Jobseeker">
        <Route index element={<JobSeekerDashboard />} />
        <Route path="Registration" element={<JobSeekerRegistration />} />
        <Route path="Profile" element={<JobSeekerProfile />} />
      </Route>

      {/* Agency pages */}
      <Route path="/Agency">
        <Route index element={<AgencyDashboard />} />
        <Route path="registration" element={<AgencyRegistration />} />
      </Route>
    </Routes>
  );
}

export default App;
