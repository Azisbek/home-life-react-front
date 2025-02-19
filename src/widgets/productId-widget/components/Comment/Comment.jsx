import React, { useState } from "react";
import s from "./Comment.module.scss";
import { IoClose } from "react-icons/io5";
import { Rating } from "react-simple-star-rating";
import { AppButton } from "../../../../components/ui/Button";
import { useParams } from "react-router-dom";
import { useAddProductCommentMutation } from "./api";

const Comment = ({ close }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const UserID = useParams(null);
  const [addProductComment] = useAddProductCommentMutation();

  const handleRating = (rate) => setRating(rate);

  const handleCommentChange = (event) => setComment(event);

  const handleAddToComment = () => {
    event.preventDefault();
    if (comment && rating !== 0) {
      const commentData = {
        product: UserID.productId,
        comments: comment,
        rating: rating,
      };
      addProductComment(commentData);
      setComment("");
      setRating(0);
    }
  };

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
        onClick={handleRating}
        initialValue={rating}
        allowFraction={false}
        readonly={false}
      />
      <textarea
        value={comment}
        onChange={(e) => handleCommentChange(e.target.value)}
      ></textarea>
      <AppButton onClick={handleAddToComment} className={s.btn} type={"submit"}>
        Разместить отзыв
      </AppButton>
    </form>
  );
};

export default Comment;
