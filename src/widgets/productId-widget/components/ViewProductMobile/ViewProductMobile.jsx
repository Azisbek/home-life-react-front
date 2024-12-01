import { AppButton } from "../../../../components/ui/Button/AppButton";
import { Rating } from "react-simple-star-rating";
import s from "./ViewProductMobile.module.scss";
import { Space } from "../../../../components/ui/Space/Space";
import { SwipeImage } from "../../../../components/SwipeImage/SwipeImage";
import { useState } from "react";
import { useAddProductBasketMutation } from "../ViewProduct/api";
import { Counter } from "../../../../components/ui/Counter/Counter";

export const ViewProductMobile = ({ data, loading }) => {
  const [quantity, setQuantity] = useState(1);
  const [addProductBasket] = useAddProductBasketMutation();

  const handleAddToBasket = () => {
    if (data) {
      const basketData = {
        product: data.id,
        quantity,
      };
      addProductBasket(basketData);
    }
  };
  return (
    <div className={s.container}>
      <SwipeImage loading={loading} images={data?.images} />
      <div className={s.containerBlock}>
        <Rating
          size={20}
          initialValue={data?.avg_rating}
          allowFraction={true}
          readonly={true}
        />
        <p className={s.title}>{data?.brand.title}</p>
        <Space h={15} />
        <div>
          <p className={s.colorText}>Цвет: {data?.color.title}</p>
          <Counter add={quantity} setAdd={setQuantity} />
          <Space h={14} />
          <div className={s.colorBlock}>
            <div style={{ background: data?.color.key }} />
          </div>
          <Space h={22} />
          <p>{data?.promotion ? data.promotion : data?.price}сом</p>
          <Space h={10} />
          <AppButton
            onClick={handleAddToBasket}
            className={s.button}
            variant='button'
          >
            Добавить в корзину
          </AppButton>
        </div>
      </div>
    </div>
  );
};
