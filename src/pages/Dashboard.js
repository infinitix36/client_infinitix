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
import jwt_decode from "jwt-decode";

const Dashboard = () => {
  const [projectDetails, setprojectDetails] = useState([]);
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
  ) : userRoleName === "Developer" ? (
    <DashboardDEV></DashboardDEV>
  ) : userRoleName === "QA" ? (
    <DashboardQA></DashboardQA>
  ) : userRoleName === "BA" ? (
    <DashboardBA></DashboardBA>
  ) : userRoleName === "Admin" ? (
    <Admin></Admin>
  ) : userRoleName === "Project Manager" ? (
    <DashboardPM></DashboardPM>
  ) : null;

  // <div>
  //   <NavBar />

  //   <div className="container">
  //     <div
  //       className="side-bar"
  //       style={{ position: "fixed", left: "0", top: "64px", bottom: "0" }}
  //     >
  //       <SideBar />
  //     </div>
  //     <div className="row mt-5">
  //       <div className="col-md-10 overflow-auto">
  //         <div className="container-fluid">
  //           <div
  //             className="row flex-row flex-nowrap mt-4 pb-4 pt-2"
  //             style={{ overflowX: "auto" }}
  //           >
  //             {projectDetails.map((e) => {
  //               return (
  //                 <div className="col-md-3">
  //                   <div
  //                     className="card"
  //                     style={{ backgroundColor: "rgb(223,255,213)" }}
  //                   >
  //                     <div className="card-header">
  //                       <h5 className="card-title">{e.projectName}</h5>
  //                     </div>
  //                     <div className="card-body">
  //                       <img
  //                         src={e.projectLogo}
  //                         className="rounded-circle"
  //                         style={{ width: "40px" }}
  //                       ></img>
  //                       <p>{}</p>
  //                     </div>
  //                     <div className="card-footer">
  //                       <Link
  //                         to={"/project/" + e._id + "/" + e.projectName}
  //                         className="btn btn-outline-primary form-control"
  //                       >
  //                         Open
  //                       </Link>
  //                     </div>
  //                   </div>
  //                 </div>
  //               );
  //             })}
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col-md-2">
  //         <div className="mt-5">
  //           <Link
  //             to="/furtheraddprojects"
  //             className="btn btn-outline-primary form-control"
  //           >
  //             Incomplete project details
  //           </Link>
  //         </div>
  //         <div className="mt-5">
  //           <Link
  //             to="/project/createproject"
  //             className="btn btn-outline-primary form-control"
  //           >
  //             Create project
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="row mt-5">
  //       <div className="col-md-10">
  //         <div class="table-responsive-sm">
  //           <table className="table align-middle mb-0  ">
  //             <thead className="text-light text-center">
  //               <tr>
  //                 <th>Name</th>
  //                 <th>Title</th>
  //                 <th>Status</th>
  //                 <th>Position</th>
  //                 <th>Actions</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               <tr>
  //                 <td>
  //                   <div className="d-flex align-items-center">
  //                     <img
  //                       src="https://mdbootstrap.com/img/new/avatars/8.jpg"
  //                       alt=""
  //                       style={{ width: "45px", height: "45px" }}
  //                       className="rounded-circle"
  //                     />
  //                     <div className="ms-3">
  //                       <p className="fw-bold mb-1">John Doe</p>
  //                       <p className="text-muted mb-0">john.doe@gmail.com</p>
  //                     </div>
  //                   </div>
  //                 </td>
  //                 <td>
  //                   <p className="fw-normal mb-1">Software engineer</p>
  //                   <p className="text-muted mb-0">IT department</p>
  //                 </td>
  //                 <td>
  //                   <span className="badge badge-success rounded-pill d-inline">
  //                     Active
  //                   </span>
  //                 </td>
  //                 <td>Senior</td>
  //                 <td>
  //                   <button
  //                     type="button"
  //                     className="btn btn-link btn-sm btn-rounded"
  //                   >
  //                     Edit
  //                   </button>
  //                 </td>
  //               </tr>
  //               <tr>
  //                 <td>
  //                   <div className="d-flex align-items-center">
  //                     <img
  //                       src="https://mdbootstrap.com/img/new/avatars/6.jpg"
  //                       className="rounded-circle"
  //                       alt=""
  //                       style={{ width: "45px", height: "45px" }}
  //                     />
  //                     <div className="ms-3">
  //                       <p className="fw-bold mb-1">Alex Ray</p>
  //                       <p className="text-muted mb-0">alex.ray@gmail.com</p>
  //                     </div>
  //                   </div>
  //                 </td>
  //                 <td>
  //                   <p className="fw-normal mb-1">Consultant</p>
  //                   <p className="text-muted mb-0">Finance</p>
  //                 </td>
  //                 <td>
  //                   <span className="badge badge-primary rounded-pill d-inline">
  //                     Onboarding
  //                   </span>
  //                 </td>
  //                 <td>Junior</td>
  //                 <td>
  //                   <button
  //                     type="button"
  //                     className="btn btn-link btn-rounded btn-sm fw-bold"
  //                     data-mdb-ripple-color="dark"
  //                   >
  //                     Edit
  //                   </button>
  //                 </td>
  //               </tr>
  //               <tr>
  //                 <td>
  //                   <div className="d-flex align-items-center">
  //                     <img
  //                       src="https://mdbootstrap.com/img/new/avatars/7.jpg"
  //                       className="rounded-circle"
  //                       alt=""
  //                       style={{ width: "45px", height: "45px" }}
  //                     />
  //                     <div className="ms-3">
  //                       <p className="fw-bold mb-1">Kate Hunington</p>
  //                       <p className="text-muted mb-0">
  //                         kate.hunington@gmail.com
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </td>
  //                 <td>
  //                   <p className="fw-normal mb-1">Designer</p>
  //                   <p className="text-muted mb-0">UI/UX</p>
  //                 </td>
  //                 <td>
  //                   <span className="badge badge-warning rounded-pill d-inline">
  //                     Awaiting
  //                   </span>
  //                 </td>
  //                 <td>Senior</td>
  //                 <td>
  //                   <button
  //                     type="button"
  //                     className="btn btn-link btn-rounded btn-sm fw-bold"
  //                     data-mdb-ripple-color="dark"
  //                   >
  //                     Edit
  //                   </button>
  //                 </td>
  //               </tr>
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>
  //       <div className=" col-md-2"></div>
  //     </div>
  //     <div className="row mt-5">
  //       <div class="col-md-10">
  //         {" "}
  //         Chart{" "}
  //         <div>
  //           <BarChart chartData={userData} />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   <Link
  //     to={"/profile/john"}
  //     className="btn btn-outline-primary form-control"
  //   >
  //     profile
  //   </Link>

  // </div>
};

export default Dashboard;
