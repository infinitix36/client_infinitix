import { Link, useParams } from "react-router-dom";
import BarChart from "../components/chart/BarChart";
import { UserData } from "../components/chart/Data";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ProjectCommitList from "../components/ProjectCommitList";
import ProjectCommitChart from "../components/ProjectCommitChart";
const Project = () => {
  const { projectId } = useParams();
  const { projectName } = useParams();
  const [projectDetails, setprojectDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/projects/getProjectDetails")
      .then(function (response) {
        setprojectDetails(response.data);
      });
  }, []);

  console.log(projectDetails);

  console.log(projectId);

  // const project = projectDetails.find((p) => p._id === projectId);
  // console.log(project);

  const project = projectDetails.find((p) => p._id === projectId);
  const projectDescription = project ? project.description : "";
  let contributors = [];
  if (project) {
    contributors = project.contributors;
  }
 
  console.log(contributors);

  // if (project) {
  //   const contributors = project.contributors.map((contributor) => {
  //     return {
  //       label: contributor.label,
  //       value: contributor.value,
  //     };
  //   });

  //   console.log(contributors); // This will log the array of contributor labels and values
  // }
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
  return (
    <div>
      <NavBar />
      <div
        className="side-bar"
        style={{ position: "fixed", left: "0", top: "64px", bottom: "0" }}
      >
        {/* <SideBar /> */}
      </div>
      <h1>This project ID is = {projectId}</h1>
      
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            {projectDescription}

            {/* {projectDetails.map((e) => {
              return e?._id === projectId ? <div>{e.description}</div> : null;
            })} */}
          </div>
          <div className="col-md-6">
            <h3>contributors</h3>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col"> Name</th>
                  
                  <th scope="col">label</th>
                </tr>
              </thead>
              <tbody>
                {contributors.map((e,index)=>{
                  return ( <tr>
                    <th scope="row">{index +1}</th>
                    <td>  {e.label} </td>
                    <td>{e.value}</td>
                    
                  </tr>)
                })}
                
                {/* <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-5">
       
          <div className="col-md-6">
            <div class="card">
            <ProjectCommitList  owner="dreamshack1999" repo={projectName} />
            </div>
          </div>
          <div className="col-md-6">
            <ProjectCommitChart owner="dreamshack1999" repo={projectName}/>
            {/* {" "}
            Chart{" "}
            <div>
              <BarChart chartData={userData} />
            </div> */}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <div class="card text-left">
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to="#" class="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
              <div class="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
       
        {/* {contributors?.map((e)=>{
        return ( <div>{e.label}</div>)
       })} */}
      </div>
    </div>
  );
};
export default Project;
