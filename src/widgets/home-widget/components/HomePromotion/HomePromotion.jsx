import s from "./HomePromotion.module.scss";

export const HomePromotion = ({ img }) => {
  console.log(img);
  return (
    <div className={s.container}>
      <img src={img} alt='banner' />
    </div>
  );
};
