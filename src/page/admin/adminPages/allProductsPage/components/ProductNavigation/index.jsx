import React, { useState } from "react";
import s from "./ProductNavigation.module.scss";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductNavigation = ({ selected }) => {
  const ITEMS_PER_PAGE = 7;
  const [startIndex, setStartIndex] = useState(0);

  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleItems = selected.slice(startIndex, endIndex);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - ITEMS_PER_PAGE, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + ITEMS_PER_PAGE, selected.length - ITEMS_PER_PAGE)
    );
  };

  return (
    <div className={s.productNav}>
      <button
        onClick={handlePrev}
        className={`${startIndex === 0 ? s.hidden : ""}`}
      >
        <MdArrowBackIos />
      </button>
      <nav className={s.nav}>
        {visibleItems.map((el, idx) => (
          <Link key={idx} to={"/#"}>
            {el.nav}
          </Link>
        ))}
      </nav>
      <button
        onClick={handleNext}
        className={`${s.arrowButton} ${
          endIndex >= selected.length ? s.hidden : ""
        }`}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default ProductNavigation;
