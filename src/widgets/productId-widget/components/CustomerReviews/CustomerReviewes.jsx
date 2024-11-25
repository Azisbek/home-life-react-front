import { useState } from "react";
import { BlockCustomer } from "../../../../components/BlockCustomer/BlockCustomer";
import s from "./CustomerReviewes.module.scss";
import Comment from "../Comment";
import { Space } from "../../../../components/ui/Space/Space";
import { useScreenWidth } from "../../../../hooks/useScreenWidth";

export const CustomerReviewes = ({ array }) => {
  const { isMobile } = useScreenWidth();
  const [openComment, setOpenComment] = useState(false);

  if (!array || array.length === 0) {
    return (
      <div className={s.container}>
        <h2 className={s.title}>Отзывы покупателей</h2>
        <p className={s.emptyMessage}>Нет отзывов</p>
      </div>
    );
  }

  return (
    <div>
      <div className={s.container}>
        <h2 className={s.title}>Отзывы покупателей</h2>
        <button
          className={s.button}
          onClick={() => setOpenComment(!openComment)}
        >
          <a href="#comment">Написать отзыв</a>
        </button>
      </div>
      {array.map((el, index) => (
        <BlockCustomer
          key={`${el.name}-${index}`}
          name={el.name}
          date={el.date}
          rating={el.rating}
          comment={el.comment}
        />
      ))}
      <Space h={isMobile ? 40 : 90} />
      {openComment && <Comment close={setOpenComment} />}
    </div>
  );
};
