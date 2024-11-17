import { ProductList } from "../../../../components/product/ProductList";
import s from "./HomeList.module.scss";

export const HomeList = ({ data, title, loading }) => {
  return (
    <div className={s.containerHomeProduct}>
      <h3>{title}</h3>
      <ProductList data={data} loading={loading} />
    </div>
  );
};
