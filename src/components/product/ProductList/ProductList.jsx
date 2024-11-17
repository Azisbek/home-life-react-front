import { ProductItem } from "../ProductItem";
import { ProductItemMobile } from "../ProductItemMobile";
import { useScreenWidth } from "../../../hooks/useScreenWidth";
import s from "./ProductList.module.scss";
import { ProductSkeleton } from "../../ui/ProductSkeleton/DesktopSkeleton";
import { MobileSkeleton } from "../../ui/ProductSkeleton/MobileSkeleton";

export const ProductList = ({ data, loading }) => {
  const { isMobile } = useScreenWidth();

  const renderSkeletons = () =>
    Array.from({ length: 5 }, (_, i) =>
      isMobile ? <MobileSkeleton key={i} /> : <ProductSkeleton key={i} />
    );

  const renderProduct = (product) =>
    isMobile ? (
      <ProductItemMobile data={product} key={product.id} />
    ) : (
      <ProductItem data={product} key={product.id} />
    );

  return (
    <div className={s.container}>
      <div className={isMobile ? s.containerProductMobile : s.containerProduct}>
        {loading ? renderSkeletons() : data?.map(renderProduct)}
      </div>
    </div>
  );
};
