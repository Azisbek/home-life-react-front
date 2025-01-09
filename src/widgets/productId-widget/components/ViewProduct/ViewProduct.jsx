import { Rating } from "react-simple-star-rating";
import { SwipeImage } from "../../../../components/SwipeImage/SwipeImage";
import s from "./ViewProduct.module.scss";
import { AppButton } from "../../../../components/ui/Button";
import { useAddProductBasketMutation } from "./api";
import { Counter } from "../../../../components/ui/Counter/Counter";
import { Space } from "../../../../components/ui/Space/Space";
import { useState } from "react";

export const ViewProduct = ({ data, loading }) => {
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
      <h3>Просмотр товара</h3>
      <div className={s.aboutProduct}>
        <div>
          <SwipeImage loading={loading} images={data?.images} />
        </div>
        <div className={s.description}>
          <span>{data?.brand.title}</span>
          <Rating
            size={26}
            initialValue={data?.avg_rating}
            allowFraction={true}
            readonly={true}
          />
          <p className={s?.colorText}>Цвета</p>
          <div className={s.color}>
            <div style={{ background: data?.color }} />
          </div>
          <p>{data?.promotion ? data.promotion : data?.price}</p>
          <Space h={30} />
          <Counter add={quantity} setAdd={setQuantity} />
          <Space h={40} />
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
