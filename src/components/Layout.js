import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-full w-full flex">
      <SideBar />
      <div className="grow py-5 px-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
