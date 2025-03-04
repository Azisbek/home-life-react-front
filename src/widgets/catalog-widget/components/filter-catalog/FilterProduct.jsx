import { useRef, useState } from "react";
import { FilterSelect } from "../../../../components/ui/FilterSelect";
import s from "./FilterProduct.module.scss";
import {
  useGetFilterBrandsQuery,
  useGetFilterCategoriesQuery,
  useGetFilterColorQuery,
} from "../../api/FilterValueCatalogApi";
import { useDispatch } from "react-redux";
import { AppButton } from "../../../../components/ui/Button";
import { setFilter, resetFilters } from "../filter-catalog/model/filter.slice";

export const FilterProduct = ({ setOpenFilter }) => {
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
    dispatch(setFilter({ key: "priceMin", value: priceMin }));
    dispatch(setFilter({ key: "priceMax", value: priceMax }));
    setOpenFilter?.(false);
  };

  const handleResetFilters = () => {
    setFilters({
      category: "",
      color: "",
      brand: "",
      priceMin: "",
      priceMax: "",
    });

    if (priceMinRef.current) priceMinRef.current.value = "";
    if (priceMaxRef.current) priceMaxRef.current.value = "";

    dispatch(resetFilters(filters));
    setOpenFilter?.(false);
  };

  console.log(filters);

  return (
    <div className={s.filterContainer}>
      <FilterSelect
        value={filters.category}
        defaultValue="Категории"
        onChange={handleFilterChange("category")}
        options={categories || []}
        placeholder="Select Category"
      />
      <FilterSelect
        value={filters.color}
        defaultValue="Цвет"
        onChange={handleFilterChange("color")}
        options={colors || []}
        placeholder="Select Color"
      />
      <FilterSelect
        value={filters.brand}
        defaultValue="Бренд"
        onChange={handleFilterChange("brand")}
        options={brands || []}
        placeholder="Select Brand"
      />

      <input
        placeholder="Максимальная цена"
        type="number"
        ref={priceMaxRef}
        name="price_min"
      />
      <input
        placeholder="Минимальная цена"
        type="number"
        ref={priceMinRef}
        name="price_max"
      />
      <AppButton onClick={handleApplyFilters}>Применить</AppButton>
      <AppButton onClick={handleResetFilters}>Сбросить</AppButton>
    </div>
  );
};
