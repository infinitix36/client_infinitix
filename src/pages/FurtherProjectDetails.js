import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useParams } from "react-router-dom";

import axios from "axios";
import NavBar from "../components/Navbar";
const FurtherProjectDetails = () => {
  const { _id } = useParams();
  const [contributorsData, setContributorsData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/users/getContributors")
      .then(function (response) {
        setContributorsData(response.data);
      });
  }, []);

  const [clientName, setClientName] = useState();
  const [clientAddress, setClientAddress] = useState();
  const [clientPhone, setClientPhone] = useState();
  const [gitHubLink, setGitHub] = useState();
  const [jiraLink, setJira] = useState();
  const [contributors, setContributors] = useState();
console.log(contributors);
  const submitProjectData = (e) => {
    e.preventDefault();
    const postData = {
      clientName: clientName,
      clientAddress: clientAddress,
      clientPhone: clientPhone,
      gitHubLink: gitHubLink,
      jiraLink: jiraLink,
      projectId: _id,

      contributors: contributors,
    };
    axios
      .post("http://localhost:8000/projects/addExtraProjDetails", postData)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <h1>This project ID is = {_id}</h1>
      <div className="container mt-3">
        <div className="card shadow shadow-lg">
          <form onSubmit={submitProjectData}>
            <div className="card-body mt-3">
              <div className="row m-2">
                {/* Client Name */}
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Client Name"
                      value={clientName}
                      required
                      id="clientName"
                      onChange={(e) => setClientName(e.target.value)}
                    ></input>
                    <label for="clientName">Client Name</label>
                  </div>
                </div>
                {/* ClientAddress */}
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="clientAddress"
                      value={clientAddress}
                      id="ClientAddress"
                      onChange={(e) => setClientAddress(e.target.value)}
                    ></input>
                    <label for="clientAddress">ClientAddress</label>
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
                      placeholder="clientPhone"
                      value={clientPhone}
                      id="clientPhone"
                      onChange={(e) => setClientPhone(e.target.value)}
                    ></input>
                    <label for="clientPhone">clientPhone</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="gitHubLink"
                      value={gitHubLink}
                      id="gitHubLink"
                      onChange={(e) => setGitHub(e.target.value)}
                    ></input>
                    <label for="gitHubLink">gitHubLink</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="jiraLink"
                      value={jiraLink}
                      id="jiraLink"
                      onChange={(e) => setJira(e.target.value)}
                    ></input>
                    <label for="jiraLink">jiraLink</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <Select
                      isMulti
                      name="contributors"
                      onChange={setContributors}
                      options={contributorsData}
                      className="basic-multi-select"
                      classNamePrefix="select contibutors"
                    />
                    <label for=""></label>
                  </div>
                </div>
              </div>
              <div className="row m-2">
                <div className="col-md-12">
                  <div className="form-floating mb-3"></div>
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
        <h1>This project ID is = {_id}</h1>
      </div>
      <br></br>
    </React.Fragment>
  );
};
export default FurtherProjectDetails;
