import NavBar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserData } from "../components/chart/Data";
import { Link } from "react-router-dom";

import jwt_decode from "jwt-decode";
import PieChartComponent from "../components/PieChartComponent";
import JiraTableAll from "../components/JiraTableAll";
/** */
const DashboardTL = () => {
  const [projectDetails, setprojectDetails] = useState([]);
  const [myProjects, setMyProjects] = useState([]);
  const [taken, setTaken] = useState([]);
  const [feedbacks, setFeedbacks] = useState({});
  const data = jwt_decode(JSON.parse(localStorage.getItem("token")))?.userData;
  const userId = data._id;
  // orangeHR leave fetch
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL+`/users/leave/${userId}`)
      .then(function (response) {
        setTaken(response.data[0]);
      });
  }, []);
  console.log(taken.taken);
  // we get as string so convert to float
  const leaveTaken = parseFloat(taken.taken);
  const notLeaveTaken = 1 - leaveTaken;

  const pieData = [
    { name: "Taken", value: leaveTaken * 100 },
    { name: "Not Taken", value: notLeaveTaken * 100 },
  ];

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL+`/projects/getFeedback/${userId}`)
      .then(function (response) {
        setFeedbacks(response.data);
      });
  }, []);
  console.log(feedbacks);

  //  Get project details.
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL+"/projects/getProjectDetails")
      .then(function (response) {
        setprojectDetails(response.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL+`/projects/getProjectDetailsTL/${data._id}`)
      .then(function (response) {
        setMyProjects(response.data);
      });
  }, []);
  console.log(myProjects);
  
  return (
    <div>
      <NavBar />

      <div className="container">
        {/* <div
          className="side-bar"
          style={{ position: "fixed", left: "0", top: "64px", bottom: "0" }}
        >
          <SideBar />
        </div> */}
        <div
          className="container"
          style={{ background: "white", borderRadius: "10px" }}
        >
          <div
            className="row mt-5"
            style={{ background: "white", borderRadius: "10px" }}
          >
            <div className="col-md-12 overflow-auto">
              <div className="container-fluid">
                <div
                  className="row flex-row flex-nowrap mt-4 pb-4 pt-2"
                  style={{ overflowX: "auto" }}
                >
                  {/* map for project details and link */}
                  {projectDetails.map((e) => {
                    return (
                      <div className="col-md-3">
                        <div className="card" style={{ background: "#B8E8FC" }}>
                          <div className="card-header">
                            <h5 className="card-title">{e.projectName}</h5>
                          </div>
                          <div className="card-body">
                            <img
                              src={e.projectLogo}
                              className="rounded-circle"
                              style={{ width: "40px" }}
                            ></img>
                            <p>{}</p>
                          </div>
                          <div className="card-footer">
                            <Link
                              to={"/project/" + e._id + "/" + e.projectName}
                              className="btn btn-outline-primary form-control"
                            >
                              Open
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mt-5">
                  {/* project which do not fill by Techlead but fill by project manager */}
                  <Link
                    to="/furtheraddprojects"
                    className="btn btn-outline-secondary form-control"
                  >
                    Incomplete project details
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mt-5">
                  {/* create project for project manager */}
                  <Link
                    to="/project/createproject"
                    className="btn btn-outline-secondary form-control"
                  >
                    Create project
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            {/* testing purpose */}
            <div className="col-md-12">
             
               <JiraTableAll/>
             
            </div>
            <div className=" col-md-2"></div>
          </div>
          <div className="row mt-5">
            <div class="col-md-10">
              {/* {" "}
            Chart{" "}
            <div>
              <BarChart chartData={userData} />
            </div> */}
            </div>
          </div>

          {/* pie chart component for orangeHR chart */}
          <div className="row">
            <div className="col-md-6">
              <PieChartComponent data={pieData} />
            </div>
          </div>
        </div>
        <Link
          to={"/profile/john"}
          className="btn btn-outline-primary form-control"
        >
          profile
        </Link>

        <div className="container mt-5 mb-5"></div>
        <h3 className="row justify-content-center">project under my lead</h3>
        <div className="container mt-5">
          {" "}
          {/* projects under the tech lead */}
          {myProjects.map((e) => {
            return (
              <div className="col-12 mt-3">
                <div
                  className="card"
                  style={{ backgroundColor: "rgb(223,255,213)" }}
                >
                  <div className="card-header">
                    <h5 className="card-title">{e.projectName}</h5>
                  </div>
                  <div className="card-footer">
                    {/* link for specifi project page here i sent project id and name by params */}
                    <Link
                      to={"/project/" + e._id + "/" + e.projectName}
                      className="btn btn-outline-primary form-control"
                    >
                      Open
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardTL;
