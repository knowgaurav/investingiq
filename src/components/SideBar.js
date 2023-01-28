import React from "react";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-10 w-60 p-8 bg-gray-50 h-screen text-gray-500">
      <div className="flex flex-col gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 cursor-pointer py-2 px-3 bg-blue-900 rounded-md text-white"
              : "flex items-center gap-2 cursor-pointer py-2 px-3"
          }
        >
          <Icon.Home size={20} />
          <div className="font-medium">Dashboard</div>
        </NavLink>
        <NavLink
          to="stocks"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 cursor-pointer py-2 px-3 bg-blue-900 rounded-md text-white"
              : "flex items-center gap-2 cursor-pointer py-2 px-3"
          }
        >
          <Icon.BarChart size={20} />
          <div className="font-medium">Stocks</div>
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 cursor-pointer py-2 px-3 bg-blue-900 rounded-md text-white"
              : "flex items-center gap-2 cursor-pointer py-2 px-3"
          }
        >
          <Icon.Tool size={20} />
          <div className="font-medium">Settings</div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
