import { AppButton } from "../../../../components/ui/Button/AppButton";
import { Rating } from "react-simple-star-rating";
import s from "./ViewProductMobile.module.scss";
import { Space } from "../../../../components/ui/Space/Space";
import { SwipeImage } from "../../../../components/SwipeImage/SwipeImage";

export const ViewProductMobile = ({ data }) => {
  console.log(data);
  return (
    <div className={s.container}>
      <SwipeImage images={data?.images} />
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

          <Space h={14} />
          <div className={s.colorBlock}>
            <div style={{ background: data?.color.key }} />
          </div>
          <Space h={22} />
          <p className={s.price}>{data?.price} сом</p>
          <Space h={10} />
          <AppButton className={s.button} variant='button'>
            Добавить в корзину
          </AppButton>
        </div>
      </div>
    </div>
  );
};
