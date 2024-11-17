import { Skeleton } from "../../Skeleton";
import s from "./MobileSkeleton.module.scss";

export const MobileSkeleton = () => {
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
