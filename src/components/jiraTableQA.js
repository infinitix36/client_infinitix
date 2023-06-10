import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function JiraTableQA() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/jiras/all`);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Project Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item.id}</td>
            <td>{item.description}</td>
            <td>{item.projectName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JiraTableQA;
