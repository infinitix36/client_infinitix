import NavBar from "../components/Navbar";
import { UserData } from "../components/chart/Data";
import BarChart from "../components/chart/BarChart";
import ProjectDetails from "../data/Project.json";
import { Link } from "react-router-dom";
import Progressb from "../components/Progress";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { ProgressBar } from "react-bootstrap";
import JiraTableQA from "../components/jiraTableQA";
/** */
import jwt_decode from "jwt-decode";
const DashboardBA = () => {
  //
  const userID = jwt_decode(JSON.parse(localStorage.getItem("token")))?.userData
    ._id;
  const [userProjects, setUserProjects] = useState([]);

  const [stageUpdate, setStageUpdate] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/projects/getProjectDetailsQA/${userID}`)
      .then(function (response) {
        setUserProjects(response.data);
        console.log(response.data);
      });
  }, [stageUpdate]);
  //
  const updateStatus = (value, projectID) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:8000/project/addStage", {
            projectId: projectID,
            stage: value,
          })
          .then((res) => {
            if (res.data.status === true) {
              Swal.fire("Updated!", "Stage updated Successfully.", "success");
              setStageUpdate(stageUpdate + 1);
            } else {
              alert("Fail to Change stage");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

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
      <div className="container ">
        <div className="row mt-5 justify-content-md-center ">
          <div className="col-md-10 ">
            <div className="container-fluid ">
              <div
                className="row flex-row flex-nowrap mt-4 pb-4 pt-2 "
                style={{ overflowX: "auto" }}
              >
                {userProjects?.map((e) => {
                  return (
                    // width of a single card is 3
                    <div className="col-md-3">
                      <div className="card">
                        {/* Card heading */}
                        <div className="card-header  text-white bg-dark">
                          <h5 className="card-title">{e?.projectName}</h5>
                        </div>
                        <div className="card-body">
                          {/* Project description  */}
                          <p>{e?.description}</p>
                          <ProgressBar variant="success" now={e?.stage} />
                        </div>
                        <div className="card-footer">
                          <select
                            onChange={(x) => {
                              updateStatus(x.target.value, e?._id);
                            }}
                          >
                            <option disabled selected>
                              Select Stage
                            </option>
                            <option value="0">Reset</option>
                            <option value="25">Stage 1</option>
                            <option value="50">Stage 2</option>
                            <option value="75">Stage 3</option>
                            <option value="100">Stage 4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* <div className="col-md-2"></div> */}
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <table className="table align-middle mb-0 bg-white ">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Name</th>
                  <th>Job Title</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {/* manual data  wanna fetch*/}
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">John Doe</p>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">Software engineer</p>
                    <p className="text-muted mb-0">IT department</p>
                  </td>
                  <td>
                    <span className="badge badge-success rounded-pill d-inline">
                      Active
                    </span>
                  </td>
                  <td>Senior</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link btn-sm btn-rounded"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                        className="rounded-circle"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Alex Ray</p>
                        <p className="text-muted mb-0">alex.ray@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">Consultant</p>
                    <p className="text-muted mb-0">Finance</p>
                  </td>
                  <td>
                    <span className="badge badge-primary rounded-pill d-inline">
                      Onboarding
                    </span>
                  </td>
                  <td>Junior</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                        className="rounded-circle"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Kate Hunington</p>
                        <p className="text-muted mb-0">
                          kate.hunington@gmail.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">Designer</p>
                    <p className="text-muted mb-0">UI/UX</p>
                  </td>
                  <td>
                    <span className="badge badge-warning rounded-pill d-inline">
                      Awaiting
                    </span>
                  </td>
                  <td>Senior</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className=" col-md-2"></div> */}
        </div>

        {/* Bar Chart */}
        <div className="row mt-5 w-50">
          <div class="col-md-10 ">
            {" "}
            Chart{" "}
            <div>
              <BarChart chartData={userData} />
            </div>
          </div>
        </div>
        <JiraTableQA></JiraTableQA>
      </div>
      //{" "}
    </div>
  );
};

export default DashboardBA;
