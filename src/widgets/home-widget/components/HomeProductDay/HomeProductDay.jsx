import { ProductItem } from "../../../../components/product/ProductItem";
import { ProductItemMobile } from "../../../../components/product/ProductItemMobile";
import { ProductSkeleton } from "../../../../components/ui/ProductSkeleton/DesktopSkeleton";
import { MobileSkeleton } from "../../../../components/ui/ProductSkeleton/MobileSkeleton";
import { useScreenWidth } from "../../../../hooks/useScreenWidth";

export const HomeProductDay = ({ data, loading }) => {
  const { isMobile } = useScreenWidth();

  const renderSkeletons = () =>
    isMobile ? <MobileSkeleton /> : <ProductSkeleton />;

  const renderProduct = () => {
    return isMobile ? (
      <ProductItemMobile data={data.data} />
    ) : (
      <ProductItem data={data.data} />
    );
  };

  return <>{loading ? renderSkeletons() : renderProduct()}</>;
};
