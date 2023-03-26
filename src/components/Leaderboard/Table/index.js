import styles from "./styles.module.css";
import React, { useState, useEffect } from "react"
import axios from "axios";

const Table = () => {
	const [userDetails, setUserDetails] = useState([]);
	const [filterType, setFilterType] = useState("getQA");
	const [userRating, setUserRating] = useState([]);
	
	useEffect(() => {
	  let apiEndpoint = "";
	
	  if (filterType === "getQA") {
		apiEndpoint = "http://localhost:8000/users/getQA/alphabet";
	  } else if (filterType === "getBA") {
		apiEndpoint = "http://localhost:8000/users/getBA/alphabet";
	  } else if (filterType === "getTechlead") {
		apiEndpoint = "http://localhost:8000/users/getTechlead/alphabet";
	  }
	  
	  axios.get(apiEndpoint).then((response) => {
		let users = response.data
		console.log(users)
		let newUsers = []
		const myHeaders = new Headers({
			'Content-Type': 'application/json',
			'Authorization': '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'
		});
		for(const user of users) {
			if (user.username) {
				fetch(`https://api.github.com/users/${user.username}`, {
					method: 'GET',
					headers: myHeaders,
				  })
				.then(response=>response.json().then(data=>{
					newUsers.push({...user, avatar: data.avatar_url})
					setUserDetails(newUsers)
					console.log(newUsers);
				}))
			} else {
				newUsers.push({...user, avatar: "https://avatars.githubusercontent.com/u/111459302?v=4"})
					setUserDetails(newUsers)
					console.log(newUsers);
			}
		 }
		
	  });
	}, [filterType]);


	useEffect(() => {
		axios
		  .get("http://localhost:8000/users/getRating")
		  .then(function (response) {
			setUserRating(response.data);
		  });
	  }, []);
	
	  console.log(userRating);

	return (
		<table className="table">
        <thead className={styles.container}>
          <tr>
            <th className={styles.img_tab}>Profile Picture</th>
            <th className={styles.fname_tab}>F_Name</th>
            <th className={styles.count_tab}>Commits</th>
            <th className={styles.rating_tab}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((user) => (
            <tr key={user.id}>
              <td><img src={user.avatar} alt="Avatar" className={styles.avatar} /></td>
              <td>{user.fname}</td>
            </tr>
          ))}
        </tbody>
      </table>	  

	);
};

export default Table;