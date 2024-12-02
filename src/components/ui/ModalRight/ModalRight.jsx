import clsx from "clsx";
import s from "./ModalRight.module.scss";
import { lockScroll } from "../../../lib/lockScroll";

export function ModalRight({ toggleModal, isModalOpen, children }) {
  lockScroll(isModalOpen);

  return (
    <>
      <div
        className={clsx(s.blur, { [s.active]: isModalOpen })}
        onClick={toggleModal}
      />
      <div className={clsx(s.modal, { [s.open]: isModalOpen })}>{children}</div>
    </>
  );
}
