import styles from "./styles.module.css";

const Table = ({ details }) => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.img_tab}>Profile Picture</p>
				<p className={styles.fname_tab}>F_Name</p>
				<p className={styles.count_tab}>Commits</p>
				<p className={styles.rating_tab}>Rating</p>
			</div>
			{details.map((detail) => (
				<div className={styles.detail} key={detail._id}>
					<div className={styles.title_container}>
						<img src={detail.img} alt="detail" className={styles.detail_img} />
						<p className={styles.detail_title}>
							{detail.name} ({detail.year})
						</p>
					</div>
					<div className={styles.jobRole_container}>
						{detail.jobRole.map((jobRole, index) => (
							<p key={jobRole} className={styles.detail_jobRole}>
								{jobRole}
								{index !== detail.jobRole.length - 1 && "/"}
							</p>
						))}
					</div>
					<div className={styles.rating_container}>
						<img
							src="./images/star.png"
							alt="star"
							className={styles.star_img}
						/>
						<p className={styles.detail_rating}>{detail.rating}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Table;