import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from "react-router-dom"

const ProjectProgress = ({ match }) => {
  const [project, setProject] = useState({});
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await axios.get(`/projects/${match.params.id}`);
      setProject(data.project);
      setPercentage(data.percentage);
    };
    fetchProject();
  }, [match.params.id]);

  return (
    <div className="container">
      <div className="row mt-5">
          <div className="col-md-3">
            Add Projects
            <br />
            <br />
            <div>
              <Link to="/project/createProject"><i class="bi bi-plus-circle"></i></Link> Create New Project{" "}
            </div>{" "}
          </div>
          <div className="col-md-3">
                <div className="card text-bg-info mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-header">
                <img
                  src="https://marketplacecontent.zoom.us/%2FnptAB68BTdO6Jrc_A6ROUA%2FDdIgA0x-QJKBkUaxQR_Q5A%2Fapp%2FtKVbP0NiSve_Mul31LfEEw%2FpHAZ_eIvRJi7OmEEMDq6QA.png"
                  style={{ width: "2rem", height: "2rem" }}
                  className="card-title"
                  alt="Project Logo"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <ProgressBar striped variant="success" now={percentage} label={`${percentage}%`} />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            
            <div className="card text-bg-warning mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-header">
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/5cd9d263169cc600095f2398/0x0.jpg?format=jpg&crop=1200,1200,x0,y0,safe&height=87&width=87"
                  style={{ width: "2rem", height: "2rem" }}
                  className="card-title"
                  alt="Project Logo"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <ProgressBar striped variant="danger" now={percentage} label={`${percentage}%`} />
              </div>
            </div>
          </div>
            <div className="col-md-3">
                <div className="card text-bg-success mb-3" style={{ maxWidth: "18rem" }}>
              <div className="card-header">
                <img
                  src="https://i.pinimg.com/originals/2c/b1/a5/2cb1a59484ed73766fd11474667ace8a.jpg"
                  style={{ width: "2rem", height: "2rem" }}
                  className="card-title"
                  alt="Project Logo"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <ProgressBar striped variant="info" now={percentage} label={`${percentage}%`} />
              </div>
            </div>
          </div>
        </div>
  
      {/* <div className="card text-bg-info mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">
          <img
            src="https://marketplacecontent.zoom.us/%2FnptAB68BTdO6Jrc_A6ROUA%2FDdIgA0x-QJKBkUaxQR_Q5A%2Fapp%2FtKVbP0NiSve_Mul31LfEEw%2FpHAZ_eIvRJi7OmEEMDq6QA.png"
            style={{ width: "2rem", height: "2rem" }}
            className="card-title"
            alt="Project Logo"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <ProgressBar striped variant="success" now={percentage} label={`${percentage}%`} />
        </div>
      </div> */}
    </div>
  );
};

export default ProjectProgress;
