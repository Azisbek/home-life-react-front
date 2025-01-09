import React from "react";
import s from "./Comment.module.scss";
import { IoClose } from "react-icons/io5";
import { Rating } from "react-simple-star-rating";
import { AppButton } from "../../../../components/ui/Button";

const Comment = ({close}) => {
  return (
    <form className={s.comment}>
      <div id="comment">
        <h2 className={s.title}>Написать свой отзыв</h2>
        <span onClick={() => close(false)}>
          <IoClose />
        </span>
      </div>
      <Rating
        className={s.rating}
        size={22}
        initialValue={0}
        allowFraction={true}
        readonly={true}
      />
      <textarea></textarea>
        <AppButton className={s.btn} type={"submit"}>Разместить отзыв</AppButton>
    </form>
  );
};

export default Comment;
