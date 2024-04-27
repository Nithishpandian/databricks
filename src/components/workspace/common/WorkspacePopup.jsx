import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { IoClose } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const WorkspacePopup = ({ open, handleClickOpen, handleClose }) => {
  const [awsRegion, setAWSRegion] = useState("");

  const handleChange = (e) => {
    setAWSRegion(e.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWorkspace, setSelectedWorkspace] = useState(0);

  const handleNextPage = () => {
    setCurrentPage(2);
  };
  const handlePreviousPage = () => {
    setCurrentPage(1);
  };

  const handleWorkspaceChange = (index) => {
    setSelectedWorkspace(index);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className=" py-4 px-5 min-w-[500px] flex flex-col gap-4">
          {currentPage === 2 ? (
            <>
              <div className=" flex items-center w-full justify-between">
                <h1 className=" text-stone-800 font-bold text-2xl">
                  Let's set up your workspace
                </h1>
                <IoClose
                  className=" text-stone-700 text-2xl cursor-pointer"
                  onClick={handleClose}
                />
              </div>
              <p className=" text-stone-700 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className=" text-stone-700 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                magnam omnis perferendis quia blanditiis numquam!
              </p>
              <p className=" text-stone-700 text-sm">
                Lorem ipsum dolor sit amet consectetur
                <span className=" text-[#2c77b6]"> adipisicing elit</span>{" "}
                Minima quae inventore nostrum quis?
              </p>
              <div className=" py-4 flex flex-col gap-4">
                <div className=" flex flex-col gap-2">
                  <h1 className=" text-stone-600 font-semibold ">
                    Workspace Name
                  </h1>
                  <div className=" flex flex-col gap-1">
                    <input
                      className=" py-1.5 px-4 text-sm font-medium border-2 border-stone-300 focus:outline-none focus:border-[#2273b4] text-stone-600 placeholder:text-stone-500 w-full rounded"
                      placeholder="Blackshore"
                      type="text"
                    />
                    <p className=" text-xs text-green-700">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consectetur, inventore.
                    </p>
                  </div>
                </div>
                <div className=" flex flex-col gap-2">
                  <h1 className=" text-stone-600 font-semibold ">
                    AWS Region of the Databricks workspace
                  </h1>
                  <div className=" flex flex-col gap-1">
                    <FormControl sx={{ minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small-label">AWS</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={awsRegion}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={"us-west-2"}>us-west-2</MenuItem>
                        <MenuItem value={"us-east-2"}>us-east-2</MenuItem>
                        <MenuItem value={"us-north-2"}>us-north-2</MenuItem>
                      </Select>
                    </FormControl>

                    <p className=" text-xs text-green-700">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consectetur, inventore.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center gap-2">
                <button
                  onClick={handlePreviousPage}
                  className="border border-stone-300 py-1 px-3 text-stone-700 font-medium text-sm rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClose}
                  className=" flex items-center gap-2 border border-[#2273b4] bg-[#2273b4] py-1 px-3 text-stone-50 font-medium text-sm rounded"
                >
                  <p>Start Quickstart</p>
                  <FaExternalLinkAlt />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className=" flex items-center w-full justify-between">
                <h1 className=" text-stone-800 font-bold text-2xl">
                  Workspaces
                </h1>
                <IoClose
                  className=" text-stone-700 text-2xl cursor-pointer"
                  onClick={handleClose}
                />
              </div>
              <p className=" text-sm text-stone-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                quod doloribus voluptates quae ad amet,
                <span className=" text-[#2c77b6]"> Learn more.</span>
              </p>
              <p className=" text-sm text-stone-700">
                How would you like to create your workspace
              </p>
              <div className=" grid grid-cols-2 gap-2">
                {["Quickstart (Recommended)", "Another Option"].map(
                  (option, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-2 py-3 px-3 border-2 rounded-md cursor-pointer ${
                        selectedWorkspace === index
                          ? "border-[#2273b4]"
                          : "border-stone-300"
                      }`}
                      onClick={() => handleWorkspaceChange(index)}
                    >
                      <input
                        className="mt-1"
                        type="radio"
                        name="workspace"
                        id={`workspace-${index}`}
                        checked={selectedWorkspace === index}
                        onChange={() => handleWorkspaceChange(index)}
                      />
                      <div className="flex flex-col gap-1 text-sm">
                        <h1 className="text-stone-700 font-semibold">
                          {option}
                        </h1>
                        <p className="text-xs text-stone-600 font-medium">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aspernatur, aperiam?
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="flex justify-end items-center gap-2">
                <button
                  onClick={handlePreviousPage}
                  className="border border-stone-300 py-1 px-3 text-stone-700 font-medium text-sm rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleNextPage}
                  className="border border-[#2273b4] bg-[#2273b4] py-1 px-3 text-stone-50 font-medium text-sm rounded"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default WorkspacePopup;
