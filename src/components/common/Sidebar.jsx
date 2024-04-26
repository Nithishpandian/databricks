import React from "react";
import { MdWorkspaces } from "react-icons/md";
import { GrCatalogOption } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { IoIosOptions } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" flex flex-col justify-between border-t border-stone-300 text-gray-300 font-medium bg-[#12252f] h-full min-w-56">
      <div className=" flex flex-col gap-4 py-5 pl-5 pr-10">
        <Link to={"/workspaces"} className=" flex items-center gap-2">
          <MdWorkspaces />
          <p>Workspaces</p>
        </Link>
        <Link to={"/catalog"} className=" flex items-center gap-2">
          <GrCatalogOption />
          <p>Catalog</p>
        </Link>
        <Link to={"/usage"} className=" flex items-center gap-2">
          <FaChartLine />
          <p>Usage</p>
        </Link>
        <Link to={"/user-management"} className=" flex items-center gap-2">
          <LuUsers />
          <p>User management</p>
        </Link>
        <Link to={"/cloud-resources"} className=" flex items-center gap-2">
          <IoIosOptions className=" rotate-90" />
          <p>Cloud resources</p>
        </Link>
        <Link to={"/settings"} className=" flex items-center gap-2">
          <IoSettingsOutline />
          <p>Settings</p>
        </Link>
      </div>
      <Link
        to={"/menu-options"}
        className=" border-t border-stone-500 flex items-center gap-2 py-2 pl-5 pr-10"
      >
        <BiFoodMenu />
        <p>Menu options</p>
      </Link>
    </div>
  );
};

export default Sidebar;
