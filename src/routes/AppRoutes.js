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
import DashboardBA from "../pages/DashboardBA";
import DashboardQA from "../pages/DashboardQA";
import DashboardDEV from "../pages/DashboardDEV";
import Profile from "../pages/Profile";
import TodoList from "../pages/TodoList";
import FurtherAddProjects from "../pages/FurtherAddProjects";
import ProjectPM from "../pages/ProjectPM";
import Login from "../pages/logincard";
import Register from "../pages/registercard";
import Home from "../pages/Home";
import RequireAuth from "../utils/RequireAuth";

import Admin from "../pages/Admin";
import VerifyUser from "../pages/VerifyUser";
import Announcement from "../pages/Announcement";
import AssignProjectManager from "../pages/AssignProjectManager";

import AllMembers from "../pages/AllMembers";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Project></Project>} /> */}
        <Route exact path="/project" element={<Project></Project>} />
        <Route exact path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>} />
        <Route exact path="/dashboardpm" element={<DashboardPM />} />
        <Route exact path="/stats" element={<List />} />
        <Route exact path="/lboard" element={<Lboard />} />
        <Route exact path="/allprojects" element={<AllProjects />} />
        <Route exact path="/profile" element={<Profile />} />

        <Route
          exact
          path="/furtheraddprojects"
          element={<FurtherAddProjects />}
        />
        <Route exact path="/project/:projectId/:projectName" element={<Project />} />
        <Route exact path="/project/furtherproject/:_id" element={<FurtherProjectDetails />} />
        <Route
          exact
          path="/project/createproject"
          element={<CreateProject />}
        />
        <Route
          exact
          path="/project/furtherproject"
          element={<FurtherProjectDetails />}
        />

        <Route exact path="/DashboardBA" element={<DashboardBA />} />
        <Route exact path="/DashboardQA" element={<DashboardQA/>} />
        <Route exact path="/DashboardDEV" element={<DashboardDEV />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/Todolist" element={<TodoList/>} />
        <Route exact path="/DashboardQA" element={<DashboardQA />} />
        <Route exact path="/projectpm" element={<ProjectPM/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />

         <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/home" element={<RequireAuth><Home/></RequireAuth>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/verifyuser" element={<VerifyUser/>} />
          <Route path="/announcement" element={<Announcement/>} />
          <Route path="/assignprojectmanager" element={<AssignProjectManager/>} />

          <Route path="/allmembers" element={<AllMembers />} />
          {/* <Route path="/home" element={<RequireAuth><Home/></RequireAuth>} /> */}


      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
