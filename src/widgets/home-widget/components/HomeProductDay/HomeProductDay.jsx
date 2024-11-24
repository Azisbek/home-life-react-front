import { ProductItem } from "../../../../components/product/ProductItem";
import { ProductItemMobile } from "../../../../components/product/ProductItemMobile";
import { ProductSkeleton } from "../../../../components/ui/ProductSkeleton/DesktopSkeleton";
import { MobileSkeleton } from "../../../../components/ui/ProductSkeleton/MobileSkeleton";
import { useScreenWidth } from "../../../../hooks/useScreenWidth";
import s from "./HomeProductDay.module.scss";

export const HomeProductDay = ({ data, loading }) => {
  const { isMobile } = useScreenWidth();

  console.log(data);

  const renderSkeletons = () =>
    isMobile ? <MobileSkeleton /> : <ProductSkeleton />;

  const renderProduct = () => {
    return isMobile ? (
      <ProductItemMobile data={data} />
    ) : (
      <ProductItem data={data} />
    );
  };

  return (
    <div className={s.container}>
      <p className={s.titleProductDay}>Товар дня</p>
      {loading ? renderSkeletons() : renderProduct()}
    </div>
  );
};
