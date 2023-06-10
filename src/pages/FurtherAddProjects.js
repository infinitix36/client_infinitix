import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import NavBar from "../components/Navbar";
const FurtherAddProjects = () => {
  const data = jwt_decode(JSON.parse(localStorage.getItem("token")))?.userData;
  const [incompleteDetProj, setIncompleteDetProj] = useState([]);
  // get incomplete projects
  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_API_URL +
          `/projects/getIncompleteProjectDetails/${data._id}`
      )
      .then(function (response) {
        setIncompleteDetProj(response.data);
      });
  }, []);
  console.log(incompleteDetProj);

  return (
    <div>
      <NavBar></NavBar>
      {incompleteDetProj.map((e) => {
        return (
          // link to specific project sent project id as params
          <Link
            to={"/project/furtherproject/" + e._id}
            className="btn btn-outline-primary form-control mt-2"
          >
            <li key={e._id}>{e.projectName}</li>
          </Link>
        );
      })}
    </div>
  );
};
export default FurtherAddProjects;
