import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import styles from "./styles.module.css";


const Search = () => {
	const [userSearch, setUserSearch] = useState([]);
	const [query, setQuery] = useState("");
	const key = ["fname"]

	const search = (data) => {
		return data.filter(
			(item) =>
				keys.some(key => item[key].toLowerCase().includes(query))
		);
	};

	console.log(query)
	return (
		<div>
			<input
			type="text"
			className={styles.search}
			placeholder="Search by First Name"
			onChange={(e) => setQuery(e.target.value)}
			// onChange={({ currentTarget: input }) => setSearch(input.value)}
			/>
			<Table data={search(userSearch)}/>
			{/* <ul className="list">
				{userSearch.filter((user) => user.fname.toLowerCase().includes(query)).map((user) => (
					<li key={user.id} classclassName="listItem">{user.fname}</li>
				))}
			</ul> */}
		</div>
	);
}

export default Search;