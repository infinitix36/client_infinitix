import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import NavBar from "../components/Navbar";
const FurtherAddProjects = () => {
  const [incompleteDetProj, setIncompleteDetProj] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/projects/getIncompleteProjectDetails")
      .then(function (response) {
        setIncompleteDetProj(response.data);
      });
  }, []);
  console.log(incompleteDetProj);

  const renderedItems = incompleteDetProj.map((item) => (
    <li key={item.id}>{item.projectName}</li>
  ));

  return (
    <div>
      <NavBar></NavBar>
      {incompleteDetProj.map((e)=>{
        return (
          <Link to={"/project/furtherproject/"+e.projectName}
          className="btn btn-outline-primary form-control mt-2">
          <li key={e.id}>{e.projectName}</li>
          </Link>

         
        )
      })}
  </div>
  );
};
export default FurtherAddProjects;
