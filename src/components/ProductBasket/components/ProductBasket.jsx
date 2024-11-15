import { useState } from "react";
import { Counter } from "../../../components/ui/Counter/Counter";
import s from "./ProductBasket.module.scss";
import {
  useDeleteProductBasketMutation,
  useUpdateProductBasketMutation,
} from "../../../widgets/basket-widget/api";

export const ProductBasket = ({
  image,
  title,
  price,
  id,
  quantity: quantityProduct,
  handleUpdateBasketProduct,
}) => {
  const [updateProduct, { isLoading }] = useUpdateProductBasketMutation();
  const [deleteProduct] = useDeleteProductBasketMutation();
  const [quantity, setQuantity] = useState(quantityProduct);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    updateProduct({ id, quantity: newQuantity }).then(() =>
      handleUpdateBasketProduct()
    );
  };

  const deleteProductBasket = () => {
    deleteProduct({ id }).then(() => handleUpdateBasketProduct());
  };

  return (
    <div className={s.container}>
      <img src={image} alt='img' className={s.img} />
      <div className={s.block}>
        <p className={s.title}>{title}</p>

        <Counter
          add={quantity}
          setAdd={handleQuantityChange}
          disabled={isLoading}
        />

        <p className={s.price}>{price} сом</p>
      </div>
      <button onClick={deleteProductBasket} className={s.close}>
        &#x2716;
      </button>
    </div>
  );
};
