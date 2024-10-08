import { Rating } from "react-simple-star-rating";

import { SwiperBullet } from "../../ui/Swiper_bullet";
import { AppButton } from "../../ui/Button";

import s from "./ProductItemMobile.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../constants/path";

export const ProductItemMobile = ({ data }) => {
  const navigate = useNavigate();
  const { title, avg_rating, price, id, images } = data;

  const openProductHandler = () => {
    navigate(`${ROUTE.catalog}/${id}`);
  };

  return (
    <div className={s.blockCart}>
      <div className={s.blockImg}>
        <img src={images[0]} alt='product' />
      </div>
      <SwiperBullet count={3} num={1} />
      <div className={s.contentProductCart}>
        <div className={s.starTitleContainer}>
          <Rating
            size={20}
            initialValue={avg_rating}
            allowFraction={true}
            readonly={true}
          />
        </div>

        <div className={s.information}>
          <p className={s.title}>{title}</p>
          <p className={s.price}>{price} som</p>
        </div>

        <AppButton onClick={openProductHandler} variant='button'>
          Купить
        </AppButton>
      </div>
    </div>
  );
};
