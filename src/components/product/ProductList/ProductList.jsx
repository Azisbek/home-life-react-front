import { ProductItem } from "../ProductItem";
import { ProductItemMobile } from "../ProductItemMobile";
import { useScreenWidth } from "../../../hooks/useScreenWidth";
import s from "./ProductList.module.scss";

export const ProductList = ({ data }) => {
  const { isMobile } = useScreenWidth();

  const renderProduct = (product, index) => {
    return isMobile ? (
      <ProductItemMobile data={product} key={`${index} ${product.title}`} />
    ) : (
      <ProductItem data={product} key={`${index} ${product.title}`} />
    );
  };

  return (
    <div className={s.container}>
      <div className={isMobile ? s.containerProductMobile : s.containerProduct}>
        {data?.map(renderProduct)}
      </div>
    </div>
  );
};
