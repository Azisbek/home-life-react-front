import { Rating } from "react-simple-star-rating";
import s from "./BlockCustomer.module.scss";
import { useState } from "react";
import AnswerComment from "../AnswerComment";

export const BlockCustomer = ({ name, date, rating, comment }) => {
  const [openAnswerBlock, setOpenAnswerBlock] = useState(false)
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
        <p className={s.date}>{date} </p>
        <p className={s.reviewes}>{comment}</p>
        <div className={s.blockButton}>
          <button className={s.button} onClick={() => setOpenAnswerBlock(true)}>Ответить</button>
          {openAnswerBlock && <AnswerComment close={setOpenAnswerBlock}/>}
          <button className={s.button}>Читать все отзывы</button>
        </div>
      </div>
    </div>
  );
};
