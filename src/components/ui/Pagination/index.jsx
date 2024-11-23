import React from "react";
import PropTypes from "prop-types";
import s from "./Pagination.module.scss";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 4) {
    return null;
  }

  const getPageNumbers = () => {
    const pages = [];
    if (currentPage <= 3) {
      for (let i = 1; i <= 3; i++) {
        pages.push(i);
      }
      if (totalPages > 4) pages.push("...");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={s.pagination}>
      <button
        className={s.paginationButton}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <MdArrowBackIos />
      </button>
      {pageNumbers.map((page, idx) =>
        page === "..." ? (
          <span key={idx} className={s.dots}>
            {page}
          </span>
        ) : (
          <span
            key={idx}
            className={`${s.pageNumber} ${currentPage === page ? s.active : ""}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        )
      )}
      <button
        className={s.paginationButton}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
