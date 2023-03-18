import styles from "./styles.module.css";
import React, { useState, useEffect } from "react"
import axios from "axios";

const Table = () => {

  const [userDetails, setuserDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/user")
      .then(function (response) {
        setuserDetails(response.data);
      });
  }, []);

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

  console.log(userDetails);
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.img_tab}>Profile Picture</p>
				<p className={styles.fname_tab}>F_Name</p>
				<p className={styles.count_tab}>Commits</p>
				<p className={styles.rating_tab}>Rating</p>
			</div>

			{/* {userDetails.map((e)=>{
				return (
					<div> {e.userImage} </div>
					<div> {e.fname} </div>
				)
			})
			} */}

			{userDetails.map((detail) => (
				<div className={styles.detail} key={detail._id}>
					<div className={styles.title_container}>
						<img src={detail.userImage} alt="detail" className={styles.detail_img} />
						<p className={styles.detail_title}>
							{detail.fname}
						</p>
					</div>
					<div className={styles.jobRole_container}>
						{detail.useRoleName.map((useRoleName, index) => (
							<p key={useRoleName} className={styles.detail_jobRole}>
								{useRoleName}
								{index !== detail.useRoleName.length - 1 && "/"}
							</p>
						))}
					</div>
					<div className={styles.rating_container}>
						<img
							src="./images/star.png"
							alt="star"
							className={styles.star_img}
						/>
						{/* <p className={styles.detail_rating}>{detail.rating}</p> */}
					</div>
				</div>
			))}
		</div>
	);
};

export default Table;