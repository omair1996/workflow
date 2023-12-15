import { Dashboard } from "./component/Dashboard";

import UserManagement from "./component/UserManagement";
import SideNav from "./component/sideNav";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Application from "./component/Application";
import WorkFlow from "./component/WorkFlow";
import CreateWorkFlow from "./component/CreateWorkFlow";
import AddStage from "./component/AddStage";
import { useState } from "react";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <SideNav onToggleSidebar={handleToggleSidebar} />

        <Routes>
          <Route
            path="/"
            element={<Dashboard isSidebarOpen={isSidebarOpen} />}
          />
          <Route
            path="Application"
            element={<Application isSidebarOpen={isSidebarOpen} />}
          />
          <Route
            path="/UserManagement"
            element={<UserManagement isSidebarOpen={isSidebarOpen} />}
          />
          <Route
            path="/WorkFlow"
            element={<WorkFlow isSidebarOpen={isSidebarOpen} />}
          />

          <Route
            path="/CreateWorkFlow"
            element={<CreateWorkFlow isSidebarOpen={isSidebarOpen} />}
          />
          <Route
            path="/AddStage"
            element={<AddStage isSidebarOpen={isSidebarOpen} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
