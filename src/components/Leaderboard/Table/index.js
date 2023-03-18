import styles from "./styles.module.css";
import React, { useState, useEffect } from "react"
import axios from "axios";

const Table = () => {
	
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.img_tab}>Profile Picture</p>
				<p className={styles.fname_tab}>F_Name</p>
				<p className={styles.count_tab}>Commits</p>
				<p className={styles.rating_tab}>Rating</p>
			</div>
			{/* <div className={styles.container_list}>
				<h1 className={styles.heading_list}>Filter By JobRole</h1><br/>
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
			</div> */}
			{/* <ul>
				{userDetails.map((user) => (
				<li key={user.id}>{user.fname}</li>
				))}
			</ul> */}
    	</div>
	  
	
	);
};

export default Table;