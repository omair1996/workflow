import React from "react";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink, Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader
          prefix={
            <img
              style={{ height: "65px" }}
              src="	https://eul.netlify.app/static/media/fulllogo.865179eb.svg"
              alt="logo"
            />
          }
        ></CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
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
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <div style={{ paddingTop: "50px" }}>
              <NavLink exact to="/Notification" activeClassName="activeClicked">
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
      </CDBSidebar>
    </div>
  );
};

export default SideNav;
