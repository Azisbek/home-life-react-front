import React from "react";
import s from "./Loaders.module.css";

export const Loaders = () => {
  return (
    <div className={s.wrapper}>
      <div class={s.spinner}>
        <svg viewBox='25 25 50 50' class={s.circular}>
          <circle
            stroke-miterlimit='10'
            stroke-width='3'
            fill='none'
            r='20'
            cy='50'
            cx='50'
            class={s.path}
          ></circle>
        </svg>
      </div>
    </div>
  );
};
