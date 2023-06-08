import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const TableSort = ({ userRoleName }) => {
  const [userDetails, setUserDetails] = useState([]);
  const [filterType, setFilterType] = useState("getQA");
  const [sortOption, setSortOption] = useState(""); // State variable for sorting option

  function fillTable() {
    let apiEndpoint = `http://localhost:8000/users/all?userRoleName=${userRoleName}`;

    axios.get(apiEndpoint).then((response) => {
      let users = response.data;
      console.log(users);
      let newUsers = [];
      const myHeaders = new Headers({
        "Content-Type": "application/json",
        Authorization: "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",
      });
      if (users.length === 0) {
        setUserDetails("");
      } else {
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

  useEffect(() => {
    fillTable();
  }, [userRoleName]);

  useEffect(() => {
    fillTable();
  }, [filterType]);

  // Handle sorting based on the selected option
  const handleSort = (option) => {
    // If the same option is clicked twice, reverse the sorting order
    if (sortOption === option) {
      setUserDetails([...userDetails.reverse()]);
    } else {
      let sortedUsers = [];
      if (option === "rating") {
        sortedUsers = userDetails.sort((a, b) => b.rating - a.rating);
      } else if (option === "commits") {
        sortedUsers = userDetails.sort((a, b) => b.commitCount - a.commitCount);
      }
      setUserDetails(sortedUsers);
    }
    setSortOption(option);
  };

  return (
    <table className="table">
      <thead className={styles.container}>
        <tr>
          <th className={styles.img_tab}>Profile Picture</th>
          <th className={styles.fname_tab}>F_Name</th>
          <th className={styles.fname_tab}>Role</th>
          <th className={styles.rating_tab}>
            {/* Add onClick event for sorting by rating */}
            <button onClick={() => handleSort("rating")}>Rating</button>
          </th>
          <th className={styles.count_tab}>
            {/* Add onClick event for sorting by commits */}
            <button onClick={() => handleSort("commits")}>Commits</button>
          </th>
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
                <img src={user.avatar} alt="Avatar" className={styles.avatar} />
              </td>
              <td>{user.fname}</td>
              <td>{user.userRoleName}</td>
              <td>
                <img
                  src="./images/star.png"
                  className={styles.star}
                  alt="Star"
                ></img>{" "}
                {user.rating}
              </td>
              <td>{user.commitCount}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TableSort;
