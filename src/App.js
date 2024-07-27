import "./App.css";
import { Routes, Route } from "react-router-dom";
import { JobSeekerDashboard } from "./pages/JobSeeker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobSeekerDashboard />} />

      {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  );
}

export default App;
