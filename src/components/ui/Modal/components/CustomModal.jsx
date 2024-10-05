import React, { useEffect } from "react";
import clsx from "clsx";

import s from "./Modal.module.css";

export const CustomModal = ({ onClose, contentClass, children, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      onClick={() => onClose}
      className={clsx(isOpen ? s.container : s.closeContainer)}
    >
      <div className={s.overlay} onClick={onClose}></div>
      <div className={clsx(s.content, contentClass)}>{children}</div>
    </div>
  );
};
