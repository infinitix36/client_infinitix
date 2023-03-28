import Card from "../components/Card";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const [projectDetails, setprojectDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/projects/getProjectDetails")
      .then(function (response) {
        setprojectDetails(response.data);
      });
  }, []);
  console.log(projectDetails);

  return (
    <div>
      <NavBar />
      {/* <div
        className="side-bar"
        style={{ position: "fixed", left: "0", top: "64px", bottom: "0" }}
      >
        <SideBar />
      </div> */}

      <div className="container mt-5"></div>
      <div className="container mt-5 ">
        <div className="container-fluid ">
          <div className="row">
            {projectDetails.map((e) => {
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
    </div>
  );
};
export default AllProjects;
