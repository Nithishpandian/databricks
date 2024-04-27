import React, { useState } from "react";
import Sidebar from "../common/Sidebar";
import Navbar from "../common/Navbar";
import { Route, Routes } from "react-router-dom";
import HomeSection from "./HomeSection";
import WorkspaceContainer from "../workspace/WorkspaceContainer";
import CatalogContainer from "../catalog/CatalogContainer";
import UsageContainer from "../usage/UsageContainer";

const HomeContainer = () => {
  const [mode, setMode] = useState("Expand");
  return (
    <div className=" flex flex-col h-screen">
      <Navbar />
      <div className=" flex gap-1 h-full relative">
        <Sidebar mode={mode} setMode={setMode} />
        <Routes>
          <Route index path="/" element={<HomeSection mode={mode} />} />
          <Route
            path="/workspaces"
            element={<WorkspaceContainer mode={mode} />}
          />
          <Route path="/catalog" element={<CatalogContainer mode={mode} />} />
          <Route path="/usage" element={<UsageContainer mode={mode} />} />
          <Route path="*" element={<HomeSection mode={mode} />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomeContainer;
