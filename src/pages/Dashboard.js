import NavBar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserData } from "../components/chart/Data";
import BarChart from "../components/chart/BarChart";
import ProjectDetails from "../data/Project.json";
import { Link } from "react-router-dom";
import SideBar from "../components/Sidebar";

import DashboardDEV from "./DashboardDEV";
import DashboardQA from "./DashboardQA";
import DashboardBA from "./DashboardBA";
import Admin from "./Admin";
import DashboardPM from "./DashboardPM";
import DashboardTL from "./DashboardTL";

import jwt_decode from "jwt-decode";


const Dashboard = () => {
  const [projectDetails, setprojectDetails] = useState([]);
  const [taken, setTaken] = useState([]);
  const data = jwt_decode(JSON.parse(localStorage.getItem("token")))?.userData;
  const userId = data._id;

  const userRoleName = jwt_decode(JSON.parse(localStorage.getItem("token")))
    ?.userData?.userRoleName;
  return !userRoleName ? (
    <p>Loading</p>
  ) : userRoleName === "Developer" ? (
    <DashboardDEV></DashboardDEV>
  ) : userRoleName === "QA" ? (
    <DashboardQA></DashboardQA>
  ) : userRoleName === "BA" ? (
    <DashboardBA></DashboardBA>
  ) : userRoleName === "Admin" ? (
    <Admin></Admin>
  ) : userRoleName === "ProjectManager" ? (
    <DashboardPM></DashboardPM>
  ) : userRoleName === "Techlead" ? (
    <DashboardTL />
  ) : null;
};

export default Dashboard;
