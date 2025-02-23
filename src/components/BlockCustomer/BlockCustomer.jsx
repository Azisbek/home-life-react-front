import { Rating } from "react-simple-star-rating";
import s from "./BlockCustomer.module.scss";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const BlockCustomer = ({ name, date, rating, comment }) => {
  return (
    <div className={s.blockCustomer}>
      <div className={s.containeCastomer}>
        <div className={s.block}>
          <p className={s.name}>{name}</p>
          <Rating
            size={22}
            initialValue={rating}
            allowFraction={true}
            readonly={true}
          />
        </div>
        <p className={s.date}>{formatDate(date)}</p>
        <p className={s.reviewes}>{comment}</p>
      </div>
    </div>
  );
};
