import clsx from "clsx";
import s from "./ModalRight.module.scss";

export function ModalRight({ toggleModal, isModalOpen, children }) {
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
