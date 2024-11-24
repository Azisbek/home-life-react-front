import { Rating } from "react-simple-star-rating";

import { AppButton } from "../../ui/Button";

import s from "./ProductItemMobile.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../constants/path";

export const ProductItemMobile = ({ data }) => {
  const navigate = useNavigate();
  const { title, avg_rating, price, promotion, id, images } = data;

  const openProductHandler = () => {
    navigate(`${ROUTE.catalog}/${id}`);
  };

  return (
    <div className={s.blockCart}>
      <div className={s.blockImg}>
        <img src={images[0]} alt='product' />
      </div>
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
          <p className={s.price}>{promotion ? promotion : price} сом</p>
        </div>

        <AppButton onClick={openProductHandler} variant='button'>
          Купить
        </AppButton>
      </div>
    </div>
  );
};
