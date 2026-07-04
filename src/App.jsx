import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import JoinQueue from "./pages/JoinQueue";
import CheckStatus from "./pages/CheckStatus";
import StaffLogin from "./pages/StaffLogin";
import VolunteerDashboard from "./pages/VolunteeDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinQueue />} />
        <Route path="/status" element={<CheckStatus />} />
        <Route path="/staff" element={<StaffLogin />} />
        <Route path="/volunteer" element={<VolunteerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;