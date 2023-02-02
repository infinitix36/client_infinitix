import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProjects from "../pages/AllProjects";
import Dashboard from "../pages/Dashboard";
import Project from "../pages/Project";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Project></Project>} />
        <Route exact path="/project" element={<Project></Project>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/allprojects" element={<AllProjects/>} />
        <Route exact path="/project/:projectId" element={<Project/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
