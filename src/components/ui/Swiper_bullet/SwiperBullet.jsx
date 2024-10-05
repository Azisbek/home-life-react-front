import clsx from "clsx";

import s from "./SwiperBullet.module.scss";

export const SwiperBullet = ({ num, count }) => {
  const bullet = [];

  for (let i = 1; i <= count; i++) {
    bullet.push(<div className={clsx(s.bullet, num === i ? s.active : "")} />);
  }

  return <div className={s.bulletContainer}>{bullet}</div>;
};
