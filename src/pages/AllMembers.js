import Card from "../components/Card";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllMembers = () => {
  const [contributorsData, setContributorsData] = useState([]);
  // get all members
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/users/getMembers")
      .then(function (response) {
        setContributorsData(response.data);
      });
  }, []);

  console.log(contributorsData);

  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h1 className="mb-4">All Members</h1>
        <ul className="list-group">
          {/* mapping for all members */}
          {contributorsData.map((contributor) => (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {contributor.fname}
              <Link
                to={"/profiles/" + contributor._id}
                className="btn btn-primary"
              >
                Add Rating
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AllMembers;
