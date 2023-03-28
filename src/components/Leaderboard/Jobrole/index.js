import styles from "./styles.module.css";
import React, { useState, useEffect } from "react"
import axios from "axios";

const JobRole = () => {

	// const [userDetails, setUserDetails] = useState([]);
	const [filterType, setFilterType] = useState("getQA");
	
	// useEffect(() => {
	//   let apiEndpoint = "";
	
	//   if (filterType === "getQA") {
	// 	apiEndpoint = "http://localhost:8000/users/getQA/alphabet";
	//   } else if (filterType === "getBA") {
	// 	apiEndpoint = "http://localhost:8000/users/getBA/alphabet";
	//   } else if (filterType === "getTechlead") {
	// 	apiEndpoint = "http://localhost:8000/users/getTechlead/alphabet";
	//   }
	  
	//   axios.get(apiEndpoint).then((response) => {
	// 	let users = response.data
	// 	let newUsers = []
	// 	const myHeaders = new Headers({
	// 		'Content-Type': 'application/json',
	// 		'Authorization': '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'
	// 	});
	// 	for(const user of users) {
	// 		fetch(`https://api.github.com/users/${user.username}`, {
	// 			method: 'GET',
	// 			headers: myHeaders,
	// 		  })
	// 		.then(response=>response.json().then(data=>{
	// 			newUsers.push({...user, avatar: data.avatar_url})
	// 			setUserDetails(newUsers)
	// 		}))
	// 	 }
		
	//   });
	// }, [filterType]);
	
	function handleRadioChange(event) {
		setFilterType(event.target.value);
	}
  	

//   useEffect(() => {
// 	fetch(`https://api.github.com/users/${userInput}`)
// 	  .then((res) => res.json())
// 	  .then(
// 		(result) => {
// 		  console.log(result);
// 		  setAvatarURL(result.avatar_url);
// 		},
// 		(error) => {
// 		  console.log(error);
// 		}
// 	  );
//   }, []);

//   console.log(userDetails);



	// const onChange = ({ currentTarget: input }) => {
	// 	if (input.checked) {
	// 		const state = [...filterJobRole, input.value];
	// 		setFilterJobRole(state);
	// 	} else {
	// 		const state = filterJobRole.filter((val) => val !== input.value);
	// 		setFilterJobRole(state);
	// 	}
	// };

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Filter By JobRole</h1><br/>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
				<label class="form-check-label" for="flexRadioDefault1">
    				Developer
  				</label>
			</div><br/>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
				<label class="form-check-label" for="flexRadioDefault2">
					QA
  				</label>
			</div><br/>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"></input>
				<label class="form-check-label" for="flexRadioDefault3">
    				Techlead
  				</label>
			</div><br/>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"></input>
				<label class="form-check-label" for="flexRadioDefault4">
					BA
  				</label>
			</div>
			<br/>

{/* 
			<ul>
				{userDetails.map((user) => (
				<li key={user.id}>{user.fname}</li>
				))}
			</ul> */}


			{/* <div className={styles.jobRole_container}>
				{jobRoles.map((jobRole) => (
					<div className={styles.jobRole} key={jobRole}>
					
						<input
							class="form-check-input"
							type="radio"
							value={jobRole}
							onChange={onChange}
						/>
						<p className={styles.jobRole_label}>{jobRole}</p>
					</div>
				))}
			</div> */}
		</div>
	);
};

export default JobRole;