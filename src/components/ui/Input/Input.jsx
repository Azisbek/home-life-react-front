import { clsx } from "clsx";

import s from "./Input.module.scss";

export const Input = ({
  isError,
  className,
  leftIcon,
  rightIcon,
  leftOnClick,
  rightOnClick,
  ...props
}) => (
  <div className={clsx(s.container)}>
    {leftIcon && (
      <span className={s.leftIcon} onClick={leftOnClick}>
        {leftIcon}
      </span>
    )}

    <input
      className={clsx(
        s.input,
        leftIcon && s.leftMargin,
        rightIcon && s.rightMargin,
        isError && s.error,
        className
      )}
      {...props}
    />

    {rightIcon && (
      <span className={s.rightIcon} onClick={rightOnClick}>
        {rightIcon}
      </span>
    )}
  </div>
);
