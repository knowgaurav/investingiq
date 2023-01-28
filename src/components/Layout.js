import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-full w-full flex">
      <SideBar />
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
