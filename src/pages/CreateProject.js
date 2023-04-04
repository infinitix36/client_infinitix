import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import jwt_decode from "jwt-decode";
import NavBar from "../components/Navbar";
const CreateProject = () => {
  const data = jwt_decode(JSON.parse(localStorage.getItem("token")))?.userData;
  const [techLeadData, setTechLeadData] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL+"/users/getTechLead")
      .then(function (response) {
        setTechLeadData(response.data);
      });
  }, []);
  const [projectName, setProjectName] = useState();
  const [description, setDescription] = useState();
  const [technology, setTechnology] = useState();
  const [deadLine, setDeadLine] = useState();
  const [techLead, setTechLead] = useState();
  const projectManager = data?._id;
  console.log(projectManager);
  const submitProjectData = (e) => {
    e.preventDefault();
    const postData = {
      projectName: projectName,
      description: description,
      technology: technology,
      deadline: deadLine,
      techlead: techLead,
      projectManager:projectManager,
    };
    axios
      .post(process.env.REACT_APP_API_URL+"/projects/addBasicProjDetails", postData)
      .then((res) => {
        alert(res.data.message);
        swal("Project Created", {
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <div>
        {" "}
        <NavBar />
        <div className="container mt-3 ">
          <div className="card shadow shadow-lg">
            <form onSubmit={submitProjectData}>
              <div className="card-body mt-3">
                <div className="row m-2">
                  {/* Project Name */}
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Project Name"
                        value={projectName}
                        required
                        id="projectname"
                        onChange={(e) => setProjectName(e.target.value)}
                      ></input>
                      <label for="projectname">Project Name</label>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        value={description}
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                      ></input>
                      <label for="description">Description</label>
                    </div>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Technology"
                        value={technology}
                        id="technology"
                        onChange={(e) => setTechnology(e.target.value)}
                      ></input>
                      <label for="technology">Technology</label>
                    </div>
                  </div>
                  {/* DeadLine */}
                  <div className="col-md-6">
                    <div className="form-floating mb-3">
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Deadline"
                        onFocus={(e) => (e.target.type = "date")}
                        value={deadLine}
                        id="deadline"
                        onChange={(e) => setDeadLine(e.target.value)}
                      ></input>
                      <label for="deadline">Select Deadline</label>
                    </div>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-md-12">
                    <div className="form-floating mb-3">
                      <select
                        id="techlead"
                        required
                        className="form-control"
                        onChange={(e) => setTechLead(e.target.value)}
                      >
                        <option selected value="" disabled>
                          Select Techlead
                        </option>
                        {techLeadData.map((item) => {
                          return (
                            <option value={item._id}>
                              {item.fname + " " + item.lname}
                            </option>
                          );
                        })}
                      </select>
                      <label for="dep">Select Techlead</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      className="m-2 btn btn-dark text-white form-control"
                      type="submit"
                      value="Submit Details"
                    ></input>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="m-2 btn btn-dark text-white form-control"
                      type="reset"
                      value="Reset"
                    ></input>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br></br>
    </React.Fragment>
  );
};
export default CreateProject;
