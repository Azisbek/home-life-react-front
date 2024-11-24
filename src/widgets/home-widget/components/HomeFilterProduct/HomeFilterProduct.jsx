import { nanoid } from "@reduxjs/toolkit";
import { useGetFilterCategoriesQuery } from "../../../catalog-widget/api/FilterValueCatalogApi";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../catalog-widget/components/filter-catalog/model/filter.slice";
import s from "./HomeFilterProduct.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../constants/path";
import { Skeleton } from "../../../../components/ui/Skeleton";

export const HomeFilterProduct = ({ loading }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useGetFilterCategoriesQuery();

  const filterCategoriesFilter = (value) => {
    dispatch(setFilter({ key: "category", value }));
    navigate(ROUTE.catalog);
  };

  return (
    <div className={s.container}>
      {loading ? (
        <Skeleton className={s.skeleton} />
      ) : (
        <ul className={s.containerFilter}>
          {data?.map((item) => {
            return (
              <li
                className={s.listItemFilter}
                onClick={() => filterCategoriesFilter(item.value)}
                key={nanoid()}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
