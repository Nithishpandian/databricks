import React, { useEffect, useState } from "react";
import { MdWorkspaces } from "react-icons/md";
import { GrCatalogOption } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { IoIosOptions } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ mode, setMode }) => {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  const handleMode = () => {
    if (mode === "Expand") {
      setMode("Collapse");

      setTimeout(() => {
        const sidebar = document.querySelector(".sidebar-container");
        sidebar.classList.add("group");
      }, 1000);
    } else {
      setMode("Expand");
      setTimeout(() => {
        const sidebar = document.querySelector(".sidebar-container");
        sidebar.classList.remove("group");
      }, 1000);
    }
  };

  return (
    <div className="sidebar-container">
      <div
        className={` z-50 flex flex-col justify-between border-t border-stone-300 text-gray-300 font-medium bg-[#12252f] h-full duration-300  ${
          mode === "Collapse"
            ? " absolute top-0 bottom-0 left-0 w-12 duration-500 transition-all ease-out group-hover:lg:w-52 group-hover:xl:w-60 "
            : " lg:min-w-52 xl:min-w-60 duration-300"
        }`}
      >
        <div className=" flex flex-col gap-3 py-4 px-2">
          <Link
            to={"/workspaces"}
            className={` ${
              pathname === "/workspaces" ? " bg-gray-700 text-gray-100" : ""
            } hover:bg-gray-700 hover:text-gray-100 duration-300 rounded py-1 px-1.5 ${
              mode === "Collapse"
                ? " px-2 "
                : "sm:px-2 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10"
            } flex items-center gap-2 min-h-8`}
          >
            <MdWorkspaces
              className={`${
                pathname === "/workspaces" ? " text-[#df3824]" : ""
              }`}
            />
            <p
              className={` ${
                mode === "Collapse"
                  ? " opacity-0 absolute md:group-hover:opacity-100 md:group-hover:static group-hover:duration-[2000ms] whitespace-nowrap"
                  : "hidden md:flex"
              } `}
            >
              Workspaces
            </p>
          </Link>
          <Link
            to={"/catalog"}
            className={` ${
              pathname === "/catalog" ? " bg-gray-700 text-gray-100" : ""
            } hover:bg-gray-700 hover:text-gray-100 duration-300 rounded py-1 px-1.5 ${
              mode === "Collapse"
                ? " px-2 "
                : "sm:px-2 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10"
            } flex items-center gap-2 min-h-8`}
          >
            <GrCatalogOption
              className={`${pathname === "/catalog" ? " text-[#df3824]" : ""}`}
            />
            <p
              className={` ${
                mode === "Collapse"
                  ? " opacity-0 absolute md:group-hover:opacity-100 md:group-hover:static group-hover:duration-[2000ms] whitespace-nowrap"
                  : "hidden md:flex"
              } `}
            >
              Catalog
            </p>
          </Link>
          <Link
            to={"/usage"}
            className={` ${
              pathname === "/usage" ? " bg-gray-700 text-gray-100" : ""
            } hover:bg-gray-700 hover:text-gray-100 duration-300 rounded py-1 px-1.5 ${
              mode === "Collapse"
                ? " px-2 "
                : "sm:px-2 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10"
            } flex items-center gap-2 min-h-8`}
          >
            <FaChartLine
              className={`${pathname === "/usage" ? " text-[#df3824]" : ""}`}
            />
            <p
              className={` ${
                mode === "Collapse"
                  ? " opacity-0 absolute md:group-hover:opacity-100 md:group-hover:static group-hover:duration-[2000ms] whitespace-nowrap"
                  : "hidden md:flex"
              } `}
            >
              Usage
            </p>
          </Link>
          <Link
            to={"/user-management"}
            className={` ${
              pathname === "/user-management"
                ? " bg-gray-700 text-gray-100"
                : ""
            } hover:bg-gray-700 hover:text-gray-100 duration-300 rounded py-1 px-1.5 ${
              mode === "Collapse"
                ? " px-2 "
                : "sm:px-2 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10"
            } flex items-center gap-2 min-h-8`}
          >
            <LuUsers
              className={`${
                pathname === "/user-management" ? " text-[#df3824]" : ""
              }`}
            />
            <p
              className={` ${
                mode === "Collapse"
                  ? " opacity-0 absolute md:group-hover:opacity-100 md:group-hover:static group-hover:duration-[2000ms] whitespace-nowrap"
                  : "hidden md:flex"
              } `}
            >
              User management
            </p>
          </Link>
          <Link
            to={"/cloud-resources"}
            className={` ${
              pathname === "/cloud-resources"
                ? " bg-gray-700 text-gray-100"
                : ""
            } hover:bg-gray-700 hover:text-gray-100 duration-300 rounded py-1 px-1.5 ${
              mode === "Collapse"
                ? " px-2 "
                : "sm:px-2 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10"
            } flex items-center gap-2 min-h-8`}
          >
            <IoIosOptions
              className={`${
                pathname === "/cloud-resources" ? " text-[#df3824]" : ""
              } rotate-90`}
            />
            <p
              className={` ${
                mode === "Collapse"
                  ? " opacity-0 absolute md:group-hover:opacity-100 md:group-hover:static group-hover:duration-[2000ms] whitespace-nowrap"
                  : "hidden md:flex"
              } `}
            >
              Cloud resources
            </p>
          </Link>
          <Link
            to={"/settings"}
            className={` ${
              pathname === "/settings" ? " bg-gray-700 text-gray-100" : ""
            } hover:bg-gray-700 hover:text-gray-100 duration-300 rounded py-1 px-1.5 ${
              mode === "Collapse"
                ? " px-2 "
                : "sm:px-2 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10"
            } flex items-center gap-2 min-h-8`}
          >
            <IoSettingsOutline
              className={`${
                pathname === "/settings" ? " text-[#df3824]" : ""
              } rotate-90`}
            />
            <p
              className={` ${
                mode === "Collapse"
                  ? " opacity-0 absolute md:group-hover:opacity-100 md:group-hover:static group-hover:duration-[2000ms] whitespace-nowrap"
                  : "hidden md:flex"
              } `}
            >
              Settings
            </p>
          </Link>
        </div>
        <button
          onClick={handleMode}
          className={` border-t border-stone-500 flex items-center gap-2 py-1 px-1.5 ${
            mode === "Collapse"
              ? " px-2 "
              : "sm:px-2 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10"
          } hover:bg-gray-700 hover:text-gray-100 duration-300 min-h-12`}
        >
          <BiFoodMenu />
          <p
            className={` ${
              mode === "Collapse"
                ? " opacity-0 absolute md:group-hover:opacity-100 md:group-hover:static group-hover:duration-[2000ms] whitespace-nowrap"
                : "hidden md:flex"
            } `}
          >
            {mode === "Expand" ? "Collapse" : "Expand"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
