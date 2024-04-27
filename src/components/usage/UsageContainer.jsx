import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdDownload } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";

const UsageContainer = ({ mode }) => {
  const [usageCurrency, setUsageCurrency] = useState(0);
  return (
    <div
      className={` ${
        mode === "Collapse" && " ml-12"
      } flex flex-col gap-3 p-4 w-full`}
    >
      <div className=" flex items-center justify-between w-full border-b-2 border-stone-300 pb-1.5">
        <h1 className=" text-stone-700 font-bold text-2xl">Usage</h1>
      </div>
      <p className=" w-96 text-sm text-stone-700">
        View a graph of account usage in DBUS or estimated cost in $USD. You can
        aggregate data by workspace, by SKU (compute type) or by tags.
        <span className=" text-[#2c77b6]"> Learn more.</span>
      </p>
      <div className=" flex items-center justify-between w-full">
        <div className=" flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
          <div className=" text-sm">
            <span
              onClick={() => setUsageCurrency(0)}
              className={`border ${
                usageCurrency == 0
                  ? " border-blue-500 bg-sky-50 "
                  : " border-stone-300"
              } px-4 py-1 rounded-l cursor-pointer`}
            >
              $ USD
            </span>
            <span
              onClick={() => setUsageCurrency(1)}
              className={`border ${
                usageCurrency == 1
                  ? " border-blue-500 bg-sky-50 "
                  : " border-stone-300"
              } px-4 py-1 rounded-r cursor-pointer`}
            >
              DBU
            </span>
          </div>
          <div className=" flex items-center gap-1 rounded border border-stone-300 py-1 px-8 text-stone-500 font-medium text-sm">
            <span>Total usage</span>{" "}
            <span>
              <IoIosArrowDown />
            </span>
          </div>
          <div className=" rounded border border-stone-300 py-1 px-4 text-stone-500 font-medium text-sm">
            March 20 2024 - April 19 2024 UTC
          </div>
        </div>
        <div className=" flex items-center gap-2 text-lg text-stone-800">
          <MdDownload className=" text-xl" />
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className=" flex items-center gap-2 border border-stone-300 bg-slate-50 py-1 px-3 rounded text-stone-700 font-medium w-fit">
        <IoMdInformationCircle />
        <p className=" text-sm">Usage last updated: 04-19-2024 00:59:59 UTC</p>
        <IoClose className=" text-lg" />
      </div>
      <div className=" flex items-center justify-center text-sm sm:text-base py-20 px-10 text-stone-700 font-medium">
        <p>No usage date found in the given time range</p>
      </div>
      <h1 className=" text-stone-700 font-bold text-2xl">Usage details</h1>
      <p className=" w-96 text-sm text-stone-700">
        View a table of account usage in DBUS or estimated cost in $USD. All
        usage is aggregated by workspace.
        <span className=" text-[#2c77b6]"> Learn more.</span>
      </p>
      <div className=" flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
        <div className=" text-sm">
          <span
            onClick={() => setUsageCurrency(0)}
            className={`border ${
              usageCurrency == 0
                ? " border-blue-500 bg-sky-50 "
                : " border-stone-300"
            } px-4 py-1 rounded-l cursor-pointer`}
          >
            $ USD
          </span>
          <span
            onClick={() => setUsageCurrency(1)}
            className={`border ${
              usageCurrency == 1
                ? " border-blue-500 bg-sky-50 "
                : " border-stone-300"
            } px-4 py-1 rounded-r cursor-pointer`}
          >
            DBU
          </span>
        </div>
        <div className=" flex">
          <div className=" border-l border-y border-stone-300 pt-1.5 px-2 rounded-l-md">
            <CiSearch />
          </div>
          <input
            className=" border-r border-y border-stone-300 py-1 px-2 rounded-r-md text-sm placeholder:text-stone-400"
            placeholder="Filter workspaces"
            type="text"
          />
        </div>
        <div className=" rounded border border-stone-300 py-1 px-4 text-stone-500 font-medium text-sm w-fit">
          March 19 2024 - April 18 2024 UTC
        </div>
      </div>
      <div className=" flex items-center gap-2 border border-stone-300 bg-slate-50 py-1 px-3 rounded text-stone-700 font-medium w-fit">
        <IoMdInformationCircle />
        <p className=" text-sm">Usage last updated: 04-17-2024 00:59:59 UTC</p>
        <IoClose className=" text-lg" />
      </div>
      <table className="">
        <tr className=" text-stone-700 text-xs sm:text-sm border-b border-stone-300 pb-2">
          <th>Name</th>
          <th>Total dollars spent</th>
          <th>Jobs</th>
          <th>All purpose</th>
          <th>SQL compute</th>
          <th>Serverless SQL compute</th>
          <th>Delta live tables</th>
        </tr>
      </table>
      <div className=" flex items-center justify-center w-full py-1">
        <TfiMenuAlt className=" text-7xl text-slate-400" />
      </div>
    </div>
  );
};

export default UsageContainer;
