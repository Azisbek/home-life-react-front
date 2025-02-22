import { useState } from "react";
import { BlockCustomer } from "../../../../components/BlockCustomer/BlockCustomer";
import s from "./CustomerReviewes.module.scss";
import Comment from "../Comment";
import { Space } from "../../../../components/ui/Space/Space";
import { useScreenWidth } from "../../../../hooks/useScreenWidth";
import { useGetReviewsProductQuery } from "./api";
import { useParams } from "react-router-dom";

export const CustomerReviewes = () => {
  const { productId } = useParams();
  const { isMobile } = useScreenWidth();
  const [openComment, setOpenComment] = useState(false);

  const { data, refetch } = useGetReviewsProductQuery(
    { id: productId },
    { refetchOnMountOrArgChange: false }
  );

  return (
    <div>
      <div className={s.container}>
        <h2 className={s.title}>Отзывы покупателей</h2>
        <button
          className={s.button}
          onClick={() => setOpenComment((prev) => !prev)}
        >
          <a href="#comment">Написать отзыв</a>
        </button>
      </div>
      {data?.length === 0 && <p className={s.emptyMessage}>Нет отзывов</p>}
      {data?.map((el, index) => (
        <BlockCustomer
          key={index}
          name={el.username}
          date={el.created}
          rating={el.rating}
          comment={el.comments}
        />
      ))}
      <Space h={isMobile ? 40 : 90} />
      {openComment && <Comment close={setOpenComment} refetch={refetch} />}
    </div>
  );
};
