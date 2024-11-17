import { Skeleton } from "../../Skeleton";
import s from "./ProductSkeleton.module.scss";

export const ProductSkeleton = () => {
  return (
    <Skeleton className={s.skeleton}>
      <div className={s.blockImg} />
      <div className={s.contentProductCart}>
        <div className={s.title} />
        <div className={s.rating} />
        <div className={s.price} />
      </div>
    </Skeleton>
  );
};
