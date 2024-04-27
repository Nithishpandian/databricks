import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import workspaceImg from "../../assets/workspace/workspace-img.png";
import WorkspacePopup from "./common/WorkspacePopup";

const WorkspaceContainer = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className=" flex flex-col gap-4 p-4 w-full">
      <div className=" flex flex-col sm:flex-row gap-2 sm:items-center justify-between w-full">
        <h1 className=" text-stone-800 font-bold text-2xl">Workspaces</h1>
        <button
          onClick={handleClickOpen}
          className=" text-white font-medium bg-sky-800 text-sm px-4 py-1 rounded w-fit"
        >
          Create workspace
        </button>
      </div>
      <div className=" flex">
        <input
          className=" border border-stone-300 py-1 px-2 rounded-l-md text-sm placeholder:text-stone-400"
          placeholder="Filter workspaces"
          type="text"
        />
        <div className=" border border-stone-300 pt-1.5 px-2 rounded-r-md">
          <CiSearch />
        </div>
      </div>
      <table className="">
        <tr className=" text-stone-700 text-xs sm:text-base border-b border-stone-300">
          <th>Name</th>
          <th>Status</th>
          <th>Pricing tier</th>
          <th>Region</th>
          <th>Bucket name</th>
          <th>Credential name</th>
          <th>Created</th>
          <th>Metastore</th>
        </tr>
      </table>
      <div className=" bg-sky-50 py-4 px-4 my-5 flex items-center justify-center w-full">
        <div className=" bg-white px-5 pb-4 w-96 flex flex-col gap-3">
          <div className=" flex flex-col items-center">
            <img src={workspaceImg} alt="" />
            <h1 className=" text-stone-800 font-semibold">Workspaces</h1>
          </div>
          <p className=" text-sm text-stone-600 font-medium text-center">
            Your workspace is the environment for doing work in Databricks.
            Create one to get started.
          </p>
          <div className=" flex items-center justify-center">
            <button
              onClick={handleClickOpen}
              className=" text-white font-medium bg-sky-800 text-sm px-4 py-1 rounded"
            >
              Create workspace
            </button>
          </div>
        </div>
      </div>
      <WorkspacePopup
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default WorkspaceContainer;
