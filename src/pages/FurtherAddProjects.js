import React, { useEffect, useState } from "react";

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
      <div className="container">{renderedItems}</div>
          </div>
  );
};
export default FurtherAddProjects;
