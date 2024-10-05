import { BlockCustomer } from "../../../../components/BlockCustomer/BlockCustomer";
import s from "./CustomerReviewes.module.scss";
export const CustomerReviewes = ({ array }) => {
  return (
    <div>
      <div className={s.container}>
        <h2 className={s.title}>Отзывы покупателей</h2>
        <button className={s.button}>Написать отзыв</button>
      </div>
      {array?.map((el, index) => {
        return (
          <BlockCustomer
            key={`${el} ${index}`}
            name={el.name}
            date={el.date}
            rating={el.rating}
            comment={el.comment}
          />
        );
      })}
    </div>
  );
};
