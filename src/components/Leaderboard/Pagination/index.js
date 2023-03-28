import { useState } from "react";
import PropTypes from "prop-types";
import { Pagination as BootstrapPagination } from "react-bootstrap";
import styles from "./styles.module.css";

const Pagination = ({ page, total, limit, setPage }) => {
  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const paginationItems = [];

  // Add Previous button
  paginationItems.push(
    <BootstrapPagination.Prev
      key="prev"
      onClick={() => handlePageChange(page - 1)}
      disabled={page === 1}
      className={`${styles.page_btn}`}
    />
  );

  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <BootstrapPagination.Item
        key={i}
        active={i === page}
        onClick={() => handlePageChange(i)}
        className={`${styles.page_btn}`}
      >
        {i}
      </BootstrapPagination.Item>
    );
  }

  // Add Next button
  paginationItems.push(
    <BootstrapPagination.Next
      key="next"
      onClick={() => handlePageChange(page + 1)}
      disabled={page === totalPages}
      className={`${styles.page_btn}`}
    />
  );

  return (
    <div className={styles.container}>
      <BootstrapPagination>{paginationItems}</BootstrapPagination>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Pagination;
