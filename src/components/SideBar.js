import React from "react";
import * as Icon from "react-feather";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-10 w-64 p-5 bg-gray-100 h-screen text-gray-500 shrink-0">
      <div className="text-center text-lg font-medium text-gray-400">
        Investing IQ
      </div>
      <div className="flex flex-col gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 cursor-pointer py-2 px-3 bg-white rounded-md text-black border"
              : "flex items-center gap-2 cursor-pointer py-2 px-3 border border-transparent"
          }
        >
          <Icon.Home size={20} />
          <div className="font-medium">Dashboard</div>
        </NavLink>
        <NavLink
          to="stocks"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 cursor-pointer py-2 px-3 bg-white rounded-md text-black border"
              : "flex items-center gap-2 cursor-pointer py-2 px-3 border border-transparent"
          }
        >
          <Icon.BarChart size={20} />
          <div className="font-medium">Stocks</div>
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 cursor-pointer py-2 px-3 bg-white rounded-md text-black border"
              : "flex items-center gap-2 cursor-pointer py-2 px-3 border border-transparent"
          }
        >
          <Icon.User size={20} />
          <div className="font-medium">Profile</div>
        </NavLink>
        <div className="flex items-center gap-2 cursor-pointer py-2 px-3">
          <Icon.Power size={20} />
          <div className="font-medium">Sign out</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
