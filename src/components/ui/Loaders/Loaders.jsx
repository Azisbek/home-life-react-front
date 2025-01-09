import s from "./Loaders.module.css";

export const Loaders = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.spinner}>
        <svg viewBox='25 25 50 50' className={s.circular}>
          <circle
            strokeMiterlimit='10'
            strokeWidth='3'
            fill='none'
            r='20'
            cy='50'
            cx='50'
            className={s.path}
          ></circle>
        </svg>
      </div>
    </div>
  );
};
