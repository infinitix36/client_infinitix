import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProjects from "../pages/AllProjects";
import Dashboard from "../pages/Dashboard";
import DashboardPM from "../pages/DashboardPM";
import Project from "../pages/Project";
import CreateProject from "../pages/CreateProject";
import FurtherProjectDetails from "../pages/FurtherProjectDetails";
import DashboardBA from "../pages/DashboardBA";
import DashboardQA from "../pages/DashboardQA";
import DashboardDEV from "../pages/DashboardDEV";
import Profile from "../pages/Profile";
import TodoList from "../pages/TodoList";
import FurtherAddProjects from "../pages/FurtherAddProjects";
import LeadBoard from "../pages/LeadBoard";
import Login from "../pages/logincard";
import Register from "../pages/registercard";
import Home from "../pages/Home";
import RequireAuth from "../utils/RequireAuth";
import AllMembers from "../pages/AllMembers";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Project></Project>} /> */}
        <Route exact path="/project" element={<Project></Project>} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/Dashboardpm" element={<DashboardPM />} />
        <Route exact path="/lboard" element={<LeadBoard/>} />

        <Route exact path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>} />
        <Route exact path="/dashboardpm" element={<DashboardPM />} />
        <Route exact path="/lboard" element={<LeadBoard />} />

        <Route exact path="/allprojects" element={<AllProjects />} />
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

        {/* <Route exact path="/projectpm" element={<ProjectPM/>} /> */}

        
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />

         <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allmembers" element={<AllMembers />} />
          {/* <Route path="/home" element={<RequireAuth><Home/></RequireAuth>} /> */}


      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
