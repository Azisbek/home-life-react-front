import React from "react";
import s from "./Pagination.module.scss";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

export const Pagination = ({
  totalCount,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleArrowPrev = () =>
    currentPage > 1 && setCurrentPage(currentPage - 1);

  const handleArrowNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const getPaginationRange = () => {
    const visiblePages = 9;
    let startPage, endPage;

    if (totalPages <= visiblePages) {
      // Если страниц меньше или равно 9, показываем все
      startPage = 1;
      endPage = totalPages;
    } else {
      const half = Math.floor(visiblePages / 2); // 4
      if (currentPage <= half + 1) {
        // Текущая страница в начале
        startPage = 1;
        endPage = visiblePages;
      } else if (currentPage + half >= totalPages) {
        // Текущая страница в конце
        startPage = totalPages - visiblePages + 1;
        endPage = totalPages;
      } else {
        // Текущая страница где-то посередине
        startPage = currentPage - half;
        endPage = currentPage + half;
      }
    }
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => i + startPage
    );
  };

  const paginationRange = getPaginationRange();

  return (
    <>
      {totalPages > 1 && (
        <div className={s.pagination}>
          <button onClick={handleArrowPrev} className={s.arrowBtn}>
            <FaCaretLeft className={s.icon} size={26} />
          </button>

          <div className={s.paginationContent}>
            {paginationRange.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handlePageChange(item)}
                  className={
                    item === currentPage ? s.active : s.paginationButton
                  }
                  disabled={item === currentPage}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <button onClick={handleArrowNext} className={s.arrowBtn}>
            <FaCaretRight className={s.icon} size={26} />
          </button>
        </div>
      )}
    </>
  );
};
