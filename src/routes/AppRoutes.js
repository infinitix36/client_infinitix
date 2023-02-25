import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProjects from "../pages/AllProjects";
import Dashboard from "../pages/Dashboard";
import DashboardPM from "../pages/DashboardPM";
import Project from "../pages/Project";
import List from "../pages/List";
import Lboard from "../pages/Lboard";
import CreateProject from "../pages/CreateProject";
import FurtherProjectDetails from "../pages/FurtherProjectDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Project></Project>} />
        <Route exact path="/project" element={<Project></Project>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/dashboardpm" element={<DashboardPM/>} />
        <Route exact path="/stats" element={<List/>} />
        <Route exact path="/lboard" element={<Lboard/>} />
        <Route exact path="/allprojects" element={<AllProjects/>} />
        <Route exact path="/project/:projectId" element={<Project/>}/>
        <Route exact path="/project/createProject" element={<CreateProject/>}/>
        <Route exact path="/project/furtherProject" element={<FurtherProjectDetails/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
