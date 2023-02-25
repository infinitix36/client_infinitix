import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProjects from "../pages/AllProjects";
import Dashboard from "../pages/Dashboard";
import Project from "../pages/Project";
import CreateProject from "../pages/CreateProject";
import FurtherProjectDetails from "../pages/FurtherProjectDetails";
import DashboardBA from "../pages/DashboardBA";
import DashboardQA from "../pages/DashboardQA";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Project></Project>} />
        <Route exact path="/project" element={<Project></Project>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/allprojects" element={<AllProjects/>} />
        <Route exact path="/project/:projectId" element={<Project/>}/>
        <Route exact path="/project/createProject" element={<CreateProject/>}/>
        <Route exact path="/project/furtherProject" element={<FurtherProjectDetails/>}/>
        <Route exact path="/DashboardBA" element={<DashboardBA />} />
        <Route exact path="/DashboardQA" element={<DashboardQA/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
