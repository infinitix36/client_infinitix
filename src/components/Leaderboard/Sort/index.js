import { useState } from "react";
import styles from "./styles.module.css";

const Sort = ({ setSortBy, setSortOrder }) => {

	const [sortOrder, _setSortOrder] = useState('asc')
	const onSelectChange = ({ currentTarget: input }) => {
		setSortBy(input.value);
		setSortOrder(sortOrder);
	};

	const onArrowChange = () => {
		if (sortOrder === "asc") {
			_setSortOrder("desc");
			setSortOrder(sortOrder);
		} else {
			_setSortOrder("asc");
			setSortOrder(sortOrder);
		}
	};

	return (
		<div className={styles.container}>
			<p className={styles.sort_by}>Sort By :</p>
			<select
				onChange={onSelectChange}
				className={styles.select}
				defaultValue={sortOrder}
			>
				<option value="fname">FName</option>
				<option value="rating">Rating</option>
				<option value="rating">Commit Count</option>
			</select>
			<button className={styles.arrow_btn} onClick={onArrowChange}>
				<p className={styles.up_arrow}>&uarr;</p>
				<p className={styles.down_arrow}>&darr;</p>
			</button>
		</div>
	);
};

export default Sort;