import { useSelector } from "react-redux";
import { ProductList } from "../../../../components/product/ProductList";
import { useGetCatalogProductQuery } from "../../api/CatalogApi";
import { FilterProduct } from "../filter-catalog";
import s from "./ProductCatalog.module.scss";
import clsx from "clsx";

export const ProductCatalog = () => {
  const filters = useSelector((state) => state.filters);
  const { data } = useGetCatalogProductQuery(filters, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className={clsx(s.container)}>
      <FilterProduct />
      <ProductList data={data?.results} />
    </div>
  );
};
