import { nanoid } from "@reduxjs/toolkit";
import { useGetFilterCategoriesQuery } from "../../../catalog-widget/api/FilterValueCatalogApi";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../catalog-widget/components/filter-catalog/model/filter.slice";
import s from "./HomeFilterProduct.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../constants/path";
import { Skeleton } from "../../../../components/ui/Skeleton";
import { useState } from "react";

export const HomeFilterProduct = ({ loading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useGetFilterCategoriesQuery();
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredItems = data ? data.slice(0, Math.min(data.length, 10)) : [];

  const filterCategoriesFilter = (value) => {
    dispatch(setFilter({ key: "category", value }));
    navigate(ROUTE.catalog);
  };

  const showMore = () => setVisibleCount(data?.length || 0);

  return (
    <div className={s.container}>
      {loading ? (
        <Skeleton className={s.skeleton} />
      ) : (
        <>
          <ul className={s.containerFilter}>
            {filteredItems?.slice(0, visibleCount).map((item) => (
              <li
                className={s.listItemFilter}
                onClick={() => filterCategoriesFilter(item.value)}
                key={nanoid()}
              >
                {item.label}
              </li>
            ))}
          </ul>

          {filteredItems?.length > visibleCount && (
            <button className={s.btn} onClick={showMore}>
              Показать ещё...
            </button>
          )}
        </>
      )}
    </div>
  );
};
