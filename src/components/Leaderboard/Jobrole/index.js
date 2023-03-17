import styles from "./styles.module.css";

const JobRole = ({ jobRoles, filterJobRole, setFilterJobRole }) => {
	const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterJobRole, input.value];
			setFilterJobRole(state);
		} else {
			const state = filterJobRole.filter((val) => val !== input.value);
			setFilterJobRole(state);
		}
	};

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
					Tech-Lead
  				</label>
		</div><br/>
		<div class="form-check">
				<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
				<label class="form-check-label" for="flexRadioDefault1">
    				Developer
  				</label>
			</div><br/>
			<div class="form-check">
				<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
				<label class="form-check-label" for="flexRadioDefault2">
					Tech-Lead
  				</label>
		</div>
		<br/>
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