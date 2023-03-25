import Card from "../components/Card";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AllMembers = () => {

  const [contributorsData, setContributorsData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/users/getMembers")
      .then(function (response) {
        setContributorsData(response.data);
      });
  }, []);
console.log(contributorsData);

  return (
    <>
    <div>
      <NavBar />

    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="container">
    <ul>
      {contributorsData.map((contributor) => (
        <li >{contributor.fname} <Link
        to={"/profile/" + contributor._id}
        className="btn btn-outline-primary form-control"
      >
        View Profile page
      </Link></li>
      ))}
    </ul>
    </div>
    </>
  );
};
export default AllMembers;
