import "./App.css";
import { Routes, Route } from "react-router-dom";
import { JobSeekerDashboard } from "./pages/JobSeeker";
import { AgencyDashboard } from "./pages/Agency";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobSeekerDashboard />} />
      <Route path="/Agency" element={<AgencyDashboard />} />

      {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  );
}

export default App;
