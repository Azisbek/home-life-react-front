import { useLocation } from "react-router-dom";

import s from "./AnimatedWrapper.module.scss";

export function AnimatedWrapper({ children }) {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className={s.animate}>
      {children}
    </div>
  );
}
