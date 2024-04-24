import React, { useState } from "react";
import logo from "../../../assets/common/databricks_logo.png";
import { IoMdInformationCircle } from "react-icons/io";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email == "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <div className=" min-h-screen flex flex-col items-center justify-center bg-[#f7f7f7]">
        <form
          onSubmit={onSubmit}
          className=" flex flex-col gap-3 bg-white shadow-md rounded-md py-6 px-6 sm:p-9 mb-4"
        >
          <div className=" flex items-center justify-center">
            <img className=" w-52 sm:w-64" src={logo} alt="" />
          </div>
          <h3 className=" text-stone-800 text-center">
            Sign in to continue to databricks
          </h3>
          <div className=" flex flex-col gap-1.5 py-4">
            <input
              className={` border ${
                error ? " border-red-500 " : " border-stone-300 "
              } rounded py-1.5 px-3 text-stone-600 placeholder:text-stone-400 w-72 sm:min-w-[400px] focus:outline-none`}
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {error && (
              <div className=" text-red-600 flex items-center gap-1">
                <IoMdInformationCircle className=" rotate-180" />
                <p className=" text-sm">Required</p>
              </div>
            )}
          </div>
          <button
            type="submit"
            className=" border border-[#2273b4] bg-[#2273b4] py-1.5 px-2 rounded text-white"
          >
            Continue
          </button>
        </form>
        <div className=" text-center text-stone-600">
          Don't have an account?{" "}
          <span className=" text-[#2c77b6]">Sign Up</span>
        </div>
      </div>
      <div className=" h-full flex items-end justify-center gap-5 sm:gap-20 text-xs sm:text-base text-[#2c77b6] -mt-10">
        <div>Sign in to Community Edition</div>
        <div className=" flex items-center gap-2 sm:gap-6">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </>
  );
};

export default LoginContainer;
