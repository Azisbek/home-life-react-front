import { Rating } from "react-simple-star-rating";

import { AppButton } from "../../ui/Button";

import s from "./ProductItem.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../constants/path";

export const ProductItem = ({ data }) => {
  const navigate = useNavigate();

  const openProductHandler = () => {
    navigate(`${ROUTE.catalog}/${data?.id}`);
  };

  return (
    <div className={s.blockCart}>
      <div className={s.blockImg}>
        <img src={data?.images[0]} alt="product" />
      </div>
      <div className={s.contentProductCart}>
        <div className={s.starTitleContainer}>
          <Rating
            size={24}
            initialValue={data?.avg_rating}
            allowFraction={true}
            readonly={true}
          />
        </div>

        <div className={s.information}>
          <p className={s.title}>{data?.title}</p>
          {data?.promotion > 0 && (
            <p className={s.promotion}>{data?.price} сом</p>
          )}
          <p className={s.price}>
            {data?.promotion ? data?.promotion : data?.price} сом
          </p>
        </div>

        <AppButton onClick={openProductHandler} variant="button">
          Купить
        </AppButton>
      </div>
    </div>
  );
};
