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
import PieChartComponent from "../components/PieChartComponent";

const Dashboard = () => {
  const [projectDetails, setprojectDetails] = useState([]);
  const [taken, setTaken] = useState([]);
  const data = jwt_decode(JSON.parse(localStorage.getItem("token")))?.userData;
  const userId = data._id;
  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/leave/${userId}`)
      .then(function (response) {
        setTaken(response.data[0]);
      });
  }, []);
  console.log(taken.taken);
  const leaveTaken = parseFloat(taken.taken);
  const notLeaveTaken =  1-leaveTaken;

  const pieData = [
    { name: 'Taken', value: leaveTaken * 100 },
    { name: 'Not Taken', value: notLeaveTaken * 100 },
  ];
  useEffect(() => {
    axios
      .get("http://localhost:8000/projects/getProjectDetails")
      .then(function (response) {
        setprojectDetails(response.data);
      });
  }, []);
  console.log(projectDetails);


  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  const userRoleName = jwt_decode(JSON.parse(localStorage.getItem("token")))
    ?.userData?.userRoleName;
  return !userRoleName ? (
    <p>Loading</p>
  ) : userRoleName === "developer" ? (
    <DashboardDEV></DashboardDEV>
  ) : userRoleName === "QA" ? (
    <DashboardQA></DashboardQA>
  ) : userRoleName === "BA" ? (
    <DashboardBA></DashboardBA>
  ) : userRoleName === "Admin" ? (
    <Admin></Admin>
  ) : userRoleName === "Project Manager" ? (
    <DashboardPM></DashboardPM>
  ) : userRoleName === "Techlead" ? (
    <DashboardTL />
  ) 
  : null;

  

};

export default Dashboard;
