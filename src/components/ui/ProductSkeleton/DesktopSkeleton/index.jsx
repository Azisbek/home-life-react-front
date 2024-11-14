import { Skeleton } from "../../Skeleton";
import s from "./ProductSkeleton.module.css";

export const ProductSkeleton = () => {
  return (
    <Skeleton className={s.skeleton}>
      <div className={s.containerBlock}>
        <div className={s.skeleton1} />
        <div className={s.rating} />
        <div className={s.title} />
      </div>
      <div className={s.skeleton2} />
    </Skeleton>
  );
};
