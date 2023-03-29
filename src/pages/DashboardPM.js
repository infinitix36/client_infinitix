import NavBar from "../components/Navbar";
import { useState } from "react";
import { UserData } from "../components/chart/Data";
import BarChart from "../components/chart/BarChart";


const DashboardPM = () => {
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
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-10">
            <div class="card-group">
              <div class="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                  class="card-img-top"
                  alt="Hollywood Sign on The Hill"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                  class="card-img-top"
                  alt="Palm Springs Road"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div class="card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                  class="card-img-top"
                  alt="Los Angeles Skyscrapers"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row mt-5">
          <div className="col-md-10">
            <table class="table align-middle mb-0 bg-white">
              <thead class="bg-light">
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Position</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        class="rounded-circle"
                      />
                      <div class="ms-3">
                        <p class="fw-bold mb-1">John Doe</p>
                        <p class="text-muted mb-0">john.doe@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Software engineer</p>
                    <p class="text-muted mb-0">IT department</p>
                  </td>
                  <td>
                    <span class="badge badge-success rounded-pill d-inline">
                      Active
                    </span>
                  </td>
                  <td>Senior</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-link btn-sm btn-rounded"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                        class="rounded-circle"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                      />
                      <div class="ms-3">
                        <p class="fw-bold mb-1">Alex Ray</p>
                        <p class="text-muted mb-0">alex.ray@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Consultant</p>
                    <p class="text-muted mb-0">Finance</p>
                  </td>
                  <td>
                    <span class="badge badge-primary rounded-pill d-inline">
                      Onboarding
                    </span>
                  </td>
                  <td>Junior</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                        class="rounded-circle"
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                      />
                      <div class="ms-3">
                        <p class="fw-bold mb-1">Kate Hunington</p>
                        <p class="text-muted mb-0">kate.hunington@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">Designer</p>
                    <p class="text-muted mb-0">UI/UX</p>
                  </td>
                  <td>
                    <span class="badge badge-warning rounded-pill d-inline">
                      Awaiting
                    </span>
                  </td>
                  <td>Senior</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class=" col-md-2"></div>
        </div>
        <div class="row mt-5">
          <div class="col-md-10">
            {" "}
            Chart{" "}
            <div>
              <BarChart chartData={userData}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPM;
