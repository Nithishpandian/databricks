import React from "react";
import AccountCard from "./common/AccountCard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";
import { MdWorkspaces } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeSection = () => {
  return (
    <div className=" p-4 xl:pr-44">
      <h1 className=" text-stone-800 font-bold text-2xl">Account console</h1>
      <p className=" text-stone-500 text-sm font-medium">
        Manage your Databricks account at scale
      </p>
      <div className=" grid grid-cols-3 gap-4 py-3">
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </div>
      <div className=" flex flex-col gap-1.5">
        <h1 className=" text-stone-800 font-bold text-2xl">Account console</h1>
        <p className=" text-stone-500 text-sm font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          beatae ad quisquam non minus sunt, dolores, sapiente iusto quidem
          eveniet ipsam. Maxime incidunt ex similique, id, laudantium deleniti
          possimus{" "}
          <span className=" text-[#2c77b6]">assumenda fuga inventore</span>{" "}
          explicabo natus voluptatibus hic vel perferendis, saepe delectus?
        </p>
        <p className=" text-stone-500 text-sm font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          unde voluptatum, at porro tempora reprehenderit{" "}
          <span className=" text-[#2c77b6]">assumenda fuga inventore</span>
        </p>
        <div className=" flex flex-col ">
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<IoIosArrowDown />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className=" flex items-center justify-between w-full">
                <div className=" flex items-center gap-2">
                  <div className=" text-white bg-teal-700 p-1.5 rounded">
                    <MdWorkspaces />
                  </div>
                  <p className=" text-stone-800 font-medium ">
                    Create a workspace with a prepackaged AWS
                  </p>
                </div>
                <div>
                  <p className=" text-sm font-medium text-stone-800 pr-4">
                    Not started
                  </p>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails className=" flex flex-col gap-2">
              <div className=" flex items-center justify-between border border-stone-300 rounded py-1.5 px-3 ">
                <div className=" flex items-center gap-2">
                  <FaRegCheckCircle />
                  <p className=" text-sm font-medium text-stone-800 pr-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, ab.
                  </p>
                </div>
                <div>
                  <FaArrowRightLong />
                </div>
              </div>
              <div className=" flex items-center justify-between border border-stone-300 rounded py-1.5 px-3 ">
                <div className=" flex items-center gap-2">
                  <FaRegCheckCircle />
                  <p className=" text-sm font-medium text-stone-800 pr-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, ab.
                  </p>
                </div>
                <div>
                  <FaArrowRightLong />
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<IoIosArrowDown />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className=" flex items-center justify-between w-full">
                <div className=" flex items-center gap-2">
                  <div className=" text-white bg-teal-700 p-1.5 rounded">
                    <MdWorkspaces />
                  </div>
                  <p className=" text-stone-800 font-medium ">
                    Create a workspace with a prepackaged AWS
                  </p>
                </div>
                <div>
                  <p className=" text-sm font-medium text-stone-800 pr-4">
                    Not started
                  </p>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails className=" flex flex-col gap-2">
              <div className=" flex items-center justify-between border border-stone-300 rounded py-1.5 px-3 ">
                <div className=" flex items-center gap-2">
                  <FaRegCheckCircle />
                  <p className=" text-sm font-medium text-stone-800 pr-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, ab.
                  </p>
                </div>
                <div>
                  <FaArrowRightLong />
                </div>
              </div>
              <div className=" flex items-center justify-between border border-stone-300 rounded py-1.5 px-3 ">
                <div className=" flex items-center gap-2">
                  <FaRegCheckCircle />
                  <p className=" text-sm font-medium text-stone-800 pr-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, ab.
                  </p>
                </div>
                <div>
                  <FaArrowRightLong />
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
