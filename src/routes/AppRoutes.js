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
import App from "../App";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Project></Project>} /> */}
        <Route exact path="/project" element={<RequireAuth><Project></Project></RequireAuth>} />
        <Route exact path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route exact path="/dashboardpm" element={<RequireAuth><DashboardPM /></RequireAuth>} />
        <Route exact path="/stats" element={<RequireAuth><List /></RequireAuth>} />
        <Route exact path="/lboard" element={<RequireAuth><Lboard /></RequireAuth>} />
        <Route exact path="/allprojects" element={<RequireAuth><AllProjects /></RequireAuth>} />
        <Route
          exact
          path="/furtheraddprojects"
          element={<FurtherAddProjects />}
        />
        <Route exact path="/project/:projectId/:projectName" element={<RequireAuth><Project /></RequireAuth>} />
        <Route exact path="/project/furtherproject/:_id" element={<RequireAuth><FurtherProjectDetails /></RequireAuth>} />
        <Route
          exact
          path="/project/createproject"
          element={<RequireAuth><CreateProject /></RequireAuth>}
        />
        <Route
          exact
          path="/project/furtherproject"
          element={<RequireAuth><FurtherProjectDetails /></RequireAuth>}
        />

        <Route exact path="/DashboardBA" element={<RequireAuth><DashboardBA /></RequireAuth>} />
        <Route exact path="/DashboardQA" element={<RequireAuth><DashboardQA/></RequireAuth>} />
        <Route exact path="/DashboardDEV" element={<RequireAuth><DashboardDEV /></RequireAuth>} />
        <Route exact path="/profile/:fname" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route exact path="/Todolist" element={<RequireAuth><TodoList/></RequireAuth>} />
        <Route exact path="/DashboardQA" element={<RequireAuth><DashboardQA /></RequireAuth>} />
        <Route exact path="/projectpm" element={<RequireAuth><ProjectPM/></RequireAuth>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />

         <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<RequireAuth><Home/></RequireAuth>} />
          <Route path="/admin" element={<RequireAuth><Admin/></RequireAuth> }/>
          <Route path="/verifyuser" element={<RequireAuth><VerifyUser/> </RequireAuth>} />
          <Route path="/announcement" element={<RequireAuth><Announcement/> </RequireAuth>} />
          <Route path="/assignprojectmanager" element={<RequireAuth><AssignProjectManager/></RequireAuth>} />
     



      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
