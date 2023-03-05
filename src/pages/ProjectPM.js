import { Link } from "react-router-dom";
import BarChart from "../components/chart/BarChart";
import { UserData } from "../components/chart/Data";
import NavBar from "../components/Navbar";
import { useState } from "react";
import Dough from "../components/chart/Dough";
import {BsFillPlusCircleFill} from "react-icons/bs";
import Table from "./Table";
import ProgressBar from 'react-bootstrap/ProgressBar';
import SideBar from "../components/Sidebar";

const ProjectPM = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
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

  const now1 = 35;
  const now2 = 82;
  const now3 = 57;

  return (
    <div>
      <NavBar />
      <div
        className="side-bar"
        style={{ position: "fixed", left: "0", top: "64px", bottom: "0" }}
      >
        <SideBar />
      </div>
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
            <div class="card text-bg-info mb-3" style={{ maxWidth: "18rem" }}>
              <div class="card-header">
                <img
                  src="https://marketplacecontent.zoom.us/%2FnptAB68BTdO6Jrc_A6ROUA%2FDdIgA0x-QJKBkUaxQR_Q5A%2Fapp%2FtKVbP0NiSve_Mul31LfEEw%2FpHAZ_eIvRJi7OmEEMDq6QA.png"
                  style={{ width: "2rem", height: "2rem" }}
                  class="card-title"
                ></img>
              </div>
              <div class="card-body">
                <h5 class="card-title">Info card title</h5>
                <ProgressBar striped variant="success" now={now1} label={`${now1}%`} />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              class="card text-bg-warning mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div class="card-header">
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/5cd9d263169cc600095f2398/0x0.jpg?format=jpg&crop=1200,1200,x0,y0,safe&height=87&width=87"
                  style={{ width: "2rem", height: "2rem" }}
                  class="card-title"
                ></img>
              </div>
              <div class="card-body">
                <h5 class="card-title">Warning card title</h5>
                <ProgressBar striped variant="danger" now={now2} label={`${now2}%`}/>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              class="card text-bg-success mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div class="card-header">
                <img
                  src="https://i.pinimg.com/originals/2c/b1/a5/2cb1a59484ed73766fd11474667ace8a.jpg"
                  style={{ width: "2rem", height: "2rem" }}
                  class="card-title"
                ></img>
              </div>
              <div class="card-body">
                <h5 class="card-title">Success card title</h5>
                <ProgressBar striped variant="info" now={now3} label={`${now3}%`} />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <Table />
        </div>
        <br></br>
        <br></br>

        <div className="row mt-5">
          <div className="col-md-6">
            {" "}
            Chart{" "}
            <div>
              <BarChart chartData={userData} />
            </div>
          </div>
          <div className="col-md-6">
            <Dough />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPM;
