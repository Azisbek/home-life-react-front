import { useState } from "react";
import s from "./Comment.module.scss";
import { IoClose } from "react-icons/io5";
import { Rating } from "react-simple-star-rating";
import { AppButton } from "../../../../components/ui/Button";
import { useParams } from "react-router-dom";
import { useAddProductCommentMutation } from "./api";

const Comment = ({ close, refetch, setIsLoading }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [required, setRequired] = useState(false);
  const { productId } = useParams();
  const [addProductComment, { isLoading }] = useAddProductCommentMutation();

  const requiredText = comment.trim() === "" && required;
  const requiredStar = requiredText === false && rating === 0 && required;

  const handleAddToComment = async (event) => {
    event.preventDefault();
    if (comment && rating !== 0) {
      try {
        await addProductComment({
          product: productId,
          comments: comment,
          rating: rating,
        }).unwrap();
        refetch();
        close(false);
        setComment("");
        setRating(0);
        setRequired(false);
      } catch (err) {
        console.log("Ошибка при отправке комментария:", err);
      } finally {
        setIsLoading(false);
      }
    } else {
      setRequired(true);
    }
  };

  if (isLoading) setIsLoading(isLoading);

  return (
    <form className={s.comment}>
      <div id="comment">
        <h2 className={s.title}>Написать свой отзыв</h2>
        <span onClick={() => close(false)}>
          <IoClose />
        </span>
      </div>

      {requiredText && (
        <p className={s.errorText}>Комментарий не должен быть пустым.</p>
      )}
      {requiredStar && (
        <p className={s.errorText}>Поставьте оценку перед отправкой.</p>
      )}

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
      <AppButton
        onClick={(e) => handleAddToComment(e)}
        className={s.btn}
        type={"submit"}
      >
        Разместить отзыв
      </AppButton>
    </form>
  );
};

export default Comment;
