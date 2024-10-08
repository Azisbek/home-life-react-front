import { useRef, useState } from "react";
import { FilterSelect } from "../../../../components/ui/FilterSelect";
import s from "./FilterProduct.module.scss";
import {
  useGetFilterBrandsQuery,
  useGetFilterCategoriesQuery,
  useGetFilterColorQuery,
} from "../../api/FilterValueCatalogApi";
import { useDispatch } from "react-redux";
import { setFilter, resetFilters } from "../filter-catalog/model/filter.slice";

export const FilterProduct = () => {
  const dispatch = useDispatch();
  const { data: brands } = useGetFilterBrandsQuery();
  const { data: categories } = useGetFilterCategoriesQuery();
  const { data: colors } = useGetFilterColorQuery();

  const priceMinRef = useRef();
  const priceMaxRef = useRef();

  const [filters, setFilters] = useState({
    category: "",
    color: "",
    brand: "",
  });

  const handleFilterChange = (filterKey) => (value) => {
    setFilters((prev) => ({ ...prev, [filterKey]: value }));
  };

  const handleApplyFilters = () => {
    const priceMin = priceMinRef.current?.value || "";
    const priceMax = priceMaxRef.current?.value || "";

    dispatch(setFilter({ key: "category", value: filters.category }));
    dispatch(setFilter({ key: "color", value: filters.color }));
    dispatch(setFilter({ key: "brand", value: filters.brand }));
    dispatch(setFilter({ key: "price_min", value: priceMin }));
    dispatch(setFilter({ key: "price_max", value: priceMax }));
  };

  return (
    <div className={s.filterContainer}>
      <FilterSelect
        onChange={handleFilterChange("category")}
        options={categories || []}
        placeholder='Select Category'
      />
      <FilterSelect
        onChange={handleFilterChange("color")}
        options={colors || []}
        placeholder='Select Color'
      />
      <FilterSelect
        onChange={handleFilterChange("brand")}
        options={brands || []}
        placeholder='Select Brand'
      />

      <input
        placeholder='min'
        type='number'
        ref={priceMinRef}
        name='price_min'
      />
      <input
        placeholder='max'
        type='number'
        ref={priceMaxRef}
        name='price_max'
      />
      <button onClick={handleApplyFilters}>Применить</button>
      <button onClick={() => resetFilters()}>Сбросить</button>
    </div>
  );
};
