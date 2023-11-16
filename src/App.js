import { Dashboard } from "./component/Dashboard";
import { Notification } from "./component/Notification";
import { Profile } from "./component/Profile";
import UserManagement from "./component/UserManagement";
import SideNav from "./component/sideNav";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Application from "./component/Application";
import WorkFlow from "./component/WorkFlow";
function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <SideNav />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Application" element={<Application />} />
          <Route path="/UserManagement" element={<UserManagement />} />
          <Route path="/WorkFlow" element={<WorkFlow />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
