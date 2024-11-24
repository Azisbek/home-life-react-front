import { Skeleton } from "../../../../components/ui/Skeleton";
import s from "./HomePromotion.module.scss";

export const HomePromotion = ({ img, loading }) => {
  return (
    <div className={s.container}>
      {loading ? (
        <Skeleton className={s.skeleton} />
      ) : (
        <img src={img} alt='banner' />
      )}
    </div>
  );
};
