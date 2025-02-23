import { useState } from "react";
import s from "./Comment.module.scss";
import { IoClose } from "react-icons/io5";
import { Rating } from "react-simple-star-rating";
import { AppButton } from "../../../../components/ui/Button";
import { useParams } from "react-router-dom";
import { useAddProductCommentMutation } from "./api";

const Comment = ({ close, refetch }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const { productId } = useParams();
  const [addProductComment] = useAddProductCommentMutation();

  const handleAddToComment = () => {
    if (comment && rating !== 0) {
      const commentData = {
        product: productId,
        comments: comment,
        rating: rating,
      };
      addProductComment(commentData);
      refetch();
      close(false);
      setComment("");
      setRating(0);
    }
  };

  return (
    <form className={s.comment} onSubmit={handleAddToComment}>
      <div id='comment'>
        <h2 className={s.title}>Написать свой отзыв</h2>
        <span onClick={() => close(false)}>
          <IoClose />
        </span>
      </div>
      <Rating
        className={s.rating}
        size={22}
        onClick={(rate) => setRating(rate)}
        initialValue={rating}
        allowFraction={false}
        readonly={false}
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <AppButton className={s.btn} type={"submit"}>
        Разместить отзыв
      </AppButton>
    </form>
  );
};

export default Comment;
