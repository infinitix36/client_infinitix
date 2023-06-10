import { useParams } from "react-router-dom";
import BarChart from "../components/chart/BarChart";
import { UserData } from "../components/chart/Data";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";

import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ContributorCommitMessages from "../components/ContributorCommitMessages.js";
import ContributorCommitMessagesChart from "../components/ContributorCommitMessagesChart";
import ProjectVsCommitCount from "../components/ProjectVsCommitCount";
import FeedBack from "../components/FeedBack";
import JiraTable from "../components/JiraTable";

const Project = () => {
  const { projectId } = useParams();
  const { projectName } = useParams();
  const [projectDetails, setprojectDetails] = useState([]);

  const [description, setDescription] = useState("");

  const handleSaveClick = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + `/projects/${projectId}/description`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description }),
        }
      );
      const data = await response.json();
      setDescription(data.description); // update the description state with the new value
      setIsEditing(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/projects/getProjectDetails")
      .then(function (response) {
        setprojectDetails(response.data);
      });
  }, []);

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

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setDescription(projectDescription);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <div
        className="side-bar"
        style={{ position: "fixed", left: "0", top: "64px", bottom: "0" }}
      >
        {/* <SideBar /> */}
      </div>
      {/* <h1>This project ID is = {projectId}</h1> */}

      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div>
              {isEditing ? (
                <div className="col-md-6">
                  <input
                    type="text"
                    value={description}
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                  <div className="btn-group" role="group">
                    <button
                      onClick={handleSaveClick}
                      className="btn btn-primary"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelClick}
                      className="btn btn-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="mb-2">{projectDescription}</p>
                  <button
                    onClick={handleEditClick}
                    className="btn btn-outline-secondary bi bi-pen"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
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
                {contributors?.map((e, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td> {e.label} </td>
                      <td>{e.value}</td>
                    </tr>
                  );
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
              {/* <ProjectCommitList  owner="dreamshack1999" repo={projectName} /> */}
              <ContributorCommitMessages
                owner="dreamshack1999"
                repo={projectName}
              />
            </div>
          </div>
          <div className="col-md-6">
            {/* <ProjectCommitChart owner="dreamshack1999" repo={projectName}/> */}
            <ContributorCommitMessagesChart
              owner="dreamshack1999"
              repo={projectName}
            />
            {/* <ProjectVsCommitCount
              owner="vjathishwarya2000"
      
            /> */}
            {/* {" "}
            Chart{" "}
            <div>
              <BarChart chartData={userData} />
            </div> */}
          </div>
        </div>
        <div className="row mt-5"></div>
        <br></br>
        <br></br>
        <div className="alert alert-danger">
          <b>Comments</b>
        </div>

        {project?.feedBacksQA?.map((e) => {
          return (
            <div>
              <div className="">{e?.feedback}</div>
            </div>
          );
        })}

        {/* {contributors?.map((e)=>{
        return ( <div>{e.label}</div>)
       })} */}

        {/* <FeedBack projectId="640748a7bfe3ac265c4127f8" /> */}

        <FeedBack projectId={projectId} />
      </div>
      {/* <div className="container mt-3 mb-5">
        <JiraTable projectName={projectName} />
      </div> */}
    </div>
  );
};
export default Project;
