import { AppButton } from "../../ui/Button/AppButton";
import s from "./CardOrders.module.scss";

export const CardOrders = ({ quantity, subtotal, totalPrice }) => {
  return (
    <div className={s.contain}>
      <p className={s.title}>Сумма заказов </p>

      <p className={s.product}>Товары: {quantity}шт </p>
      <p className={s.summary}>Подытог: {subtotal}сом </p>
      <div className={s.block}>
        <p className={s.result}>Итого:</p>
        <p> {totalPrice}</p>
      </div>
      <AppButton className={s.button}>Подтвердить заказ</AppButton>
    </div>
  );
};
