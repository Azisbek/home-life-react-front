import { useParams } from "react-router-dom";
import { useGetCatalogProductIdQuery } from "./api/productPageId";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import {
  Characteristic,
  CustomerReviewes,
  Description,
  ViewProduct,
  ViewProductMobile,
} from "../../widgets/productId-widget/components";
import { Space } from "../../components/ui/Space/Space";
import s from "./ProductPage.module.scss";

export const ProductPage = () => {
  const { productId } = useParams();
  const { isMobile } = useScreenWidth();

  const { data } = useGetCatalogProductIdQuery(
    { productId },
    { refetchOnMountOrArgChange: true }
  );
  return (
    <div className={s.container}>
      {isMobile ? (
        <ViewProductMobile data={data} />
      ) : (
        <ViewProduct data={data} />
      )}
      <Space h={isMobile ? 40 : 90} />
      <Characteristic data={data} />
      <Space h={isMobile ? 40 : 90} />
      <Description data={data} />
      <Space h={isMobile ? 40 : 90} />
      <CustomerReviewes array={[]} />
    </div>
  );
};
