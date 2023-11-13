import { Application } from "./component/Application";
import { Dashboard } from "./component/Dashboard";
import { Notification } from "./component/Notification";
import { Profile } from "./component/Profile";
import { UserManagement } from "./component/UserManagement";
import { WorkFlow } from "./component/WorkFlow";
import { SideNav } from "./component/sideNav";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <SideNav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="Application" element={<Application />} />
        <Route path="/UserManagemrnt" element={<UserManagement />} />
        <Route path="/WorkFlow" element={<WorkFlow />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
