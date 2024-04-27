import React, { useEffect, useState } from "react";
import { MdWorkspaces } from "react-icons/md";
import { GrCatalogOption } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { IoIosOptions } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <div className=" flex flex-col justify-between border-t border-stone-300 text-gray-300 font-medium bg-[#12252f] h-full w-fit lg:min-w-52 xl:min-w-60">
      <div className=" flex flex-col gap-3 py-4 px-2">
        <Link
          to={"/workspaces"}
          className={` ${
            pathname === "/workspaces" ? " bg-gray-700 text-gray-100" : ""
          } rounded py-1 px-1.5 sm:px-2 md:pl-2 lg:pl-3 xl:pl-4 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10 flex items-center gap-2`}
        >
          <MdWorkspaces
            className={`${pathname === "/workspaces" ? " text-[#df3824]" : ""}`}
          />
          <p className=" hidden md:flex">Workspaces</p>
        </Link>
        <Link
          to={"/catalog"}
          className={` ${
            pathname === "/catalog" ? " bg-gray-700 text-gray-100" : ""
          } rounded py-1 px-1.5 sm:px-2 md:pl-2 lg:pl-3 xl:pl-4 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10 flex items-center gap-2`}
        >
          <GrCatalogOption
            className={`${pathname === "/catalog" ? " text-[#df3824]" : ""}`}
          />
          <p className=" hidden md:flex">Catalog</p>
        </Link>
        <Link
          to={"/usage"}
          className={` ${
            pathname === "/usage" ? " bg-gray-700 text-gray-100" : ""
          } rounded py-1 px-1.5 sm:px-2 md:pl-2 lg:pl-3 xl:pl-4 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10 flex items-center gap-2`}
        >
          <FaChartLine
            className={`${pathname === "/usage" ? " text-[#df3824]" : ""}`}
          />
          <p className=" hidden md:flex">Usage</p>
        </Link>
        <Link
          to={"/user-management"}
          className={` ${
            pathname === "/user-management" ? " bg-gray-700 text-gray-100" : ""
          } rounded py-1 px-1.5 sm:px-2 md:pl-2 lg:pl-3 xl:pl-4 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10 flex items-center gap-2`}
        >
          <LuUsers
            className={`${
              pathname === "/user-management" ? " text-[#df3824]" : ""
            }`}
          />
          <p className=" hidden md:flex">User management</p>
        </Link>
        <Link
          to={"/cloud-resources"}
          className={` ${
            pathname === "/cloud-resources" ? " bg-gray-700 text-gray-100" : ""
          } rounded py-1 px-1.5 sm:px-2 md:pl-2 lg:pl-3 xl:pl-4 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10 flex items-center gap-2`}
        >
          <IoIosOptions
            className={`${
              pathname === "/cloud-resources" ? " text-[#df3824]" : ""
            } rotate-90`}
          />
          <p className=" hidden md:flex">Cloud resources</p>
        </Link>
        <Link
          to={"/settings"}
          className={` ${
            pathname === "/settings" ? " bg-gray-700 text-gray-100" : ""
          } rounded py-1 px-1.5 sm:px-2 md:pl-2 lg:pl-3 xl:pl-4 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10 flex items-center gap-2`}
        >
          <IoSettingsOutline
            className={`${
              pathname === "/settings" ? " text-[#df3824]" : ""
            } rotate-90`}
          />
          <p className=" hidden md:flex">Settings</p>
        </Link>
      </div>
      <Link
        to={"/menu-options"}
        className=" border-t border-stone-500 flex items-center gap-2 py-2 px-1.5 sm:px-2 md:pl-2 lg:pl-3 xl:pl-4 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10"
      >
        <BiFoodMenu />
        <p className=" hidden md:flex">Menu options</p>
      </Link>
    </div>
  );
};

export default Sidebar;
