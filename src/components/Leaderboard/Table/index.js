import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";



const Table = ({userRoleName}) => {
  const [userDetails, setUserDetails] = useState([]);
  const [filterType, setFilterType] = useState("getQA");
  
  function fillTable(){
    let apiEndpoint = `http://localhost:8000/users/all?userRoleName=${userRoleName}`;

    axios.get(apiEndpoint).then((response) => {
      let users = response.data;
      console.log(users);
      let newUsers = [];
      const myHeaders = new Headers({
        "Content-Type": "application/json",
        Authorization: "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",
      });
      if(users.length === 0){
        setUserDetails('')
      }
      else{
        for (const user of users) {
          if (user.GitHubUsername) {
            fetch(`https://api.github.com/users/${user.GitHubUsername}`, {
              method: "GET",
              headers: myHeaders,
            }).then((response) =>
              response.json().then((data) => {
                newUsers.push({ ...user, avatar: data.avatar_url }); 
                setUserDetails(newUsers);
                console.log(newUsers);
              })
            );
          } else {
            newUsers.push({
              ...user,
              avatar: "https://avatars.githubusercontent.com/u/111459302?v=4",
            });
            setUserDetails(newUsers);
            console.log(newUsers);
          }
        }
    }
    });
  }

useEffect(()=>{
  fillTable()
},[userRoleName])

  useEffect(() => {
    fillTable()
  }, [filterType]);


  return (
    <table className="table">
      <thead className={styles.container}>
        <tr>
          <th className={styles.img_tab}>Profile Picture</th>
          <th className={styles.fname_tab}>F_Name</th>
          <th className={styles.fname_tab}>Role</th>
          <th className={styles.rating_tab}>Rating</th>
          <th className={styles.count_tab}>Commits</th>
        </tr>
      </thead>
      <tbody>
  {userDetails.length === 0 ? (
    <tr>
      <td colSpan="5">No users found</td>
    </tr>
  ) : (
    userDetails.map((user) => (
      <tr key={user.id}>
        <td>
          <img
            src={user.avatar}
            alt="Avatar"
            className={styles.avatar}
          />
        </td>
        <td>{user.fname}</td>
        <td>{user.userRoleName}</td>
        <td>{user.rating}</td>
        <td>{user.commits}</td>
      </tr>
    ))
  )}
</tbody>
    </table>
  );
};

export default Table;
