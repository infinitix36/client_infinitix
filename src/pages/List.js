import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/List.css";
import SideBar from "../components/Sidebar";

function List() {
  /*const navigate = useNavigate();

    const navigateToLboard = () => {
        // 👇️ navigate to /contacts
        navigate('/Lboard');
    };*/

  //let cat = ["GitHub", "Jira"];
  let job = [
    "Developer",
    "Tech-lead",
    "Project Manager",
    "Business Analyst",
    "Quality Assurance Engineer",
  ];
  let mon = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div>
      <Navbar />
      <div
        className="side-bar"
        style={{ position: "fixed", left: "0", top: "64px", bottom: "0" }}
      >
        <SideBar />
      </div>
      <div className="heading">Filtering Option to the leaderboard</div>
      <div className="innerbg">
        <div className="container">
          <div className="row mt-5">
            {/*<div className="col-md-4">
                    <div className='cat'>
                    <h3>Category</h3>
                        <br/>
                        {cat.map (result => (
                            <div>
                                <input type="radio" value={result} name="categoryradioval"></input>     {/*name for selecting only one option*
                                <b>{result}</b>
                            </div>
                        ))}
                    </div>
                </div>*/}
            <div className="col-md-8">
              <div className="job">
                <h3>JobRole</h3>
                <br />
                {job.map((result) => (
                  <div>
                    <input
                      type="radio"
                      value={result}
                      name="jobroleradioval"
                    ></input>{" "}
                    {/*name for selecting only one option*/}
                    <b>{result}</b>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mon">
                <h3>Months</h3>
                <br />
                {mon.map((result) => (
                  <div>
                    <input
                      type="radio"
                      value={result}
                      name="monthradioval"
                    ></input>{" "}
                    {/*name for selecting only one option*/}
                    <b>{result}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "15px",
          }}
        >
          <Link to="/lboard">
            <button
              className="button"
              class="btn btn-primary"
              type="submit" /*onClick={navigateToLboard}*/
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default List;
