import React from "react";

const AccountCard = ({ icon, title, description }) => {
  return (
    <div className=" border border-stone-300 px-4 py-3 rounded flex flex-col gap-2">
      <div className=" flex items-center gap-2">
        <div className=" text-white bg-sky-700 p-1.5 rounded">{icon}</div>
        <p className=" text-stone-800 font-medium ">{title}</p>
      </div>
      <div>
        <p className=" text-stone-600 font-medium text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AccountCard;
