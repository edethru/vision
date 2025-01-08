import React from "react";
import { Outlet } from "react-router-dom";
// import Dashboard from "../dashboard/Dashboard";
import Sidebar from "../sidebar/Sidebar";
import "./headerPreview.css";

const HeaderPreview = () => {
  return (
    <div className="container-header-preview">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default HeaderPreview;
