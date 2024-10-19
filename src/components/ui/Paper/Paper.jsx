import clsx from "clsx";
import s from "./Paper.module.scss";

export const Paper = ({ children,className, ...props }) => {
  return (
    <div className={clsx(s.paper, className)} {...props}>
      {children}
    </div>
  );
};
