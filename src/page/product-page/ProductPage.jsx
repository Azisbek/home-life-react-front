import { useParams } from "react-router-dom";
import { useGetCatalogProductIdQuery } from "./api/productPageId";

export const ProductPage = () => {
  const { productId } = useParams();

  const { data } = useGetCatalogProductIdQuery(
    { productId },
    { refetchOnMountOrArgChange: true }
  );

  console.log(data);

  return <div>ProductPage</div>;
};
