import React from "react";
import s from "./AnswerComment.module.scss";
import { IoClose } from "react-icons/io5";
import { AppButton } from "../ui/Button";

const AnswerComment = ({ close }) => {
  return (
    <form className={s.answerComment}>
      <div className="">
        <h2 className={s.title}>Ваш ответ</h2>
        <span onClick={() => close(false)}>
          <IoClose />
        </span>
      </div>
      <textarea></textarea>
      <AppButton>Разместить отзыв</AppButton>
    </form>
  );
};

export default AnswerComment;
