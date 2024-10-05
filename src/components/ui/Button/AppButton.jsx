import clsx from "clsx";

import s from "./AppButton.module.scss";

export const AppButton = ({
  type,
  children,
  onClick,
  className,
  variant = "button" | "whiteBtn",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(s[variant], s[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
