import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiMenuAddLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";

const CatalogContainer = () => {
  return (
    <div className=" flex flex-col gap-4 p-4 w-full">
      <div className=" flex items-center justify-between w-full border-b-2 border-stone-300 pb-1.5">
        <h1 className=" text-stone-800 font-bold text-2xl">Catalog</h1>
      </div>
      <div className=" flex flex-col gap-2">
        <h1 className=" text-stone-800 font-bold text-lg">Catalog</h1>
        <p className=" text-sm font-medium text-stone-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          inventore nesciunt obcaecati non veniam tempora in corrupti ratione
          fugiat itaque excepturi rerum, eius aut ab exercitationem quibusdam
          nobis perspiciatis suscipit omnis fuga doloribus. Laboriosam tempore
          ducimus enim magnam commodi repellendus!
        </p>
      </div>
      <div className=" flex items-center justify-between w-full">
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
        <button className=" text-white font-medium bg-sky-800 text-sm px-4 py-1 rounded">
          Create metastore
        </button>
      </div>
      <table className="">
        <tr className=" text-stone-700 text-sm border-b border-stone-300">
          <th>Name</th>
          <th>Region</th>
          <th>Path</th>
          <th></th>
          <th className=" flex items-center gap-0.5">
            <span>Created at</span>
            <RiMenuAddLine />
          </th>
          <th>Updated at</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className=" py-4 flex flex-col items-center justify-center">
            <TfiMenuAlt className=" text-7xl text-slate-400" />
            <p className=" text-slate-400 text-sm font-medium">No metastores</p>
          </td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default CatalogContainer;
