import React from "react";
import AccountCard from "./common/AccountCard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdWorkspaces } from "react-icons/md";
import { GrCatalogOption } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { IoIosOptions } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const HomeSection = () => {
  return (
    <div className=" p-4 xl:pr-44">
      <h1 className=" text-stone-800 font-bold text-2xl">Account console</h1>
      <p className=" text-stone-500 text-sm font-medium">
        Manage your Databricks account at scale
      </p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-3">
        <AccountCard
          icon={<MdWorkspaces />}
          title={"Workspaces"}
          description={
            "Configure workspace settings. Workspaces contain notebooks, libraries, queries, and workflows"
          }
        />
        <AccountCard
          icon={<GrCatalogOption />}
          title={"Catalog"}
          description={
            "Manage metastores as your top-level container for catalogs, schemas (also called databases), views and tables"
          }
        />
        <AccountCard
          icon={<FaChartLine />}
          title={"Usage"}
          description={
            "View usage details and graphs for your account in Databricks Units (DBU) or estimated costs (in $USD)"
          }
        />
        <AccountCard
          icon={<LuUsers />}
          title={"Users & groups"}
          description={
            "Manage identities for use with jobs, automated tools and systems"
          }
        />
        <AccountCard
          icon={<IoIosOptions />}
          title={"Cloud resources"}
          description={
            "Manage IAM credentials, VPC configurations and S3 bucket permissions for your AWS services Settings"
          }
        />
        <AccountCard
          icon={<IoSettingsOutline />}
          title={"settings"}
          description={
            "Configure your Databricks account single sign-on, user provisioning, subscription, and billing"
          }
        />
      </div>
      <div className=" flex flex-col gap-1.5">
        <h1 className=" text-stone-800 font-bold text-2xl">
          Create a workspace
        </h1>
        <p className=" text-stone-500 text-xs sm:text-sm font-medium">
          Your workspace is the environment for doing work in Databricks. To
          create your first Databricks workspace, you need an existing AWS
          account. If you don't have an AWS account, you can sign up for an AWS
          Free Tier account at{" "}
          <span className=" text-[#2c77b6]">https://aws.amazon.com/free/.</span>{" "}
          We highly recommend creating a workspace via Quick Start which
          automates most of the process for you.
        </p>
        <p className=" text-stone-500 text-xs sm:text-sm font-medium">
          If you want help setting up your account, please reach out to us at
          <span className=" text-[#2c77b6]">
            {" "}
            onboarding-help@databricks.com.
          </span>
        </p>
        <div className=" flex flex-col gap-1 py-1">
          <Accordion className=" border border-stone-300" defaultExpanded>
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
                  <p className=" text-stone-800 font-medium text-xs sm:text-sm md:text-base ">
                    Create a workspace with a prepackaged AWS Quick Start
                    (Recommended)
                  </p>
                </div>
                <div>
                  <p className=" text-xs sm:text-sm font-medium text-stone-800 pr-4">
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
                    Learn how Quick Start works
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
                    Start Quick Start
                  </p>
                </div>
                <div>
                  <FaArrowRightLong />
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className=" border border-stone-300">
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
                  <p className=" text-stone-800 font-medium text-xs sm:text-sm md:text-base ">
                    Explore other workspace creation options
                  </p>
                </div>
                <div>
                  <p className=" text-xs sm:text-sm font-medium text-stone-800 pr-4">
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
                    Learn how Quick Start works
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
                    Start Quick Start
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
