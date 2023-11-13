import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

export const SideNav = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
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
            <NavLink path to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Application" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Applications</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/WokFlow" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                workflow configurations
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/UseManagement" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">
                Use Management
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <div style={{ paddingTop: "50px" }}>
              <NavLink exact to="/Notification" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="info">
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
