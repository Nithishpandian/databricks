import React from "react";
import { MdWorkspaces } from "react-icons/md";

const AccountCard = () => {
  return (
    <div className=" border border-stone-300 px-4 py-3 rounded flex flex-col gap-2">
      <div className=" flex items-center gap-2">
        <div className=" text-white bg-sky-700 p-1.5 rounded">
          <MdWorkspaces />
        </div>
        <p className=" text-stone-800 font-medium ">Workspaces</p>
      </div>
      <div>
        <p className=" text-stone-600 font-medium text-sm">
          Configure workspace settings. Workspaces contain notebooks, libraries,
          queries, and workflows
        </p>
      </div>
    </div>
  );
};

export default AccountCard;
