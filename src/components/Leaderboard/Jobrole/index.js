import React, { useState } from "react";
import styles from "./styles.module.css";
 const jobRoles = ["Developer", "QA", "Techlead", "BA"];
 const JobRole = ({jobRole}) => {
  const [selectedJobRole, setSelectedJobRole] = useState("");
   const handleRadioChange = (event) => {
    setSelectedJobRole(event.target.value);
	jobRole(event.target.value)
  };

  const handleClearFilter = ()=>{
	setSelectedJobRole("")
	jobRole("")
  }
   return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Filter By Job Role</h1>
      {jobRoles.map((jobRole) => (
        <div key={jobRole} className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="jobRole"
            value={jobRole}
            checked={selectedJobRole === jobRole}
            onChange={handleRadioChange}
            id={`jobRole${jobRole}`}
          />
          <label
            className="form-check-label"
            htmlFor={`jobRole${jobRole}`}
          >
            {jobRole}
          </label>
        </div>
      ))}
      <hr />
      {selectedJobRole && (
        <div>
          <p>Selected Job Role: {selectedJobRole}</p>
		  <button onClick={handleClearFilter}>Clear Filter</button>
        </div>
      )}
    </div>
  );
};
 export default JobRole;