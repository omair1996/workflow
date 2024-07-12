import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";

const SideNav = ({ onToggleSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    onToggleSidebar(!isSidebarOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [isMobile]);

  return (
    <div
      style={{
        height: "100vh",
        position: "fixed",
        width: isSidebarOpen ? "250px" : "0px",
        transition: "width 0.3s",
        fontFamily: "sans-serif",
      }}
    >
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader
          prefix={
            <img
              onClick={toggleSidebar}
              style={{ height: "65px" }}
              src="https://eul.netlify.app/static/media/fulllogo.865179eb.svg"
              alt="logo"
            />
          }
        ></CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              className="hover-container"
            >
              <CDBSidebarMenuItem icon="signal">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <Link exact to="/Application">
              <CDBSidebarMenuItem icon="table">Applications</CDBSidebarMenuItem>
            </Link>

            <Link exact to="/WorkFlow">
              <CDBSidebarMenuItem icon="chart-line">
                workflow configurations
              </CDBSidebarMenuItem>
            </Link>

            <Link exact to="/UserManagement" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">
                Use Management
              </CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <div>
                <NavLink
                  exact
                  to="/Notification"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="bell">
                    Notifications
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="profile" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                </NavLink>
              </div>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideNav;
