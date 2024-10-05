import { Rating } from "react-simple-star-rating";
import { SwipeImage } from "../../../../components/SwipeImage/SwipeImage";
import s from "./ViewProduct.module.scss";
import { AppButton } from "../../../../components/ui/Button";

export const ViewProduct = ({ data }) => {
  console.log(data);
  return (
    <div className={s.container}>
      <h3>Просмотр товара</h3>
      <div className={s.aboutProduct}>
        <div>
          <SwipeImage images={data?.images} />
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
            <div style={{ background: data?.color.key }} />
          </div>
          <p>{data?.price}</p>
          <AppButton className={s.button} variant='button'>
            Добавить в корзину
          </AppButton>
        </div>
      </div>
    </div>
  );
};
