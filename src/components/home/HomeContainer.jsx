import React from "react";
import Sidebar from "../common/Sidebar";
import Navbar from "../common/Navbar";
import { Route, Routes } from "react-router-dom";
import HomeSection from "./HomeSection";
import WorkspaceContainer from "../workspace/WorkspaceContainer";

const HomeContainer = () => {
  return (
    <div className=" flex flex-col h-screen">
      <Navbar />
      <div className=" flex gap-1 h-full">
        <Sidebar />
        <Routes>
          <Route index path="/" element={<HomeSection />} />
          <Route path="/workspaces" element={<WorkspaceContainer />} />
          <Route path="*" element={<HomeSection />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomeContainer;
