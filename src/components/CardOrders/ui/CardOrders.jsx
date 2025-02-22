import { useNavigate } from "react-router-dom";
import { AppButton } from "../../ui/Button/AppButton";
import s from "./CardOrders.module.scss";
import { ROUTE } from "../../../constants/path";

export const CardOrders = ({
  quantity,
  subtotal,
  totalPrice,
  type,
  postOrders,
}) => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    if (type === "navigate") {
      navigate(ROUTE.order);
    }
    if (type === "postOrder") {
      postOrders();
    }
  };
  return (
    <div className={s.contain}>
      <p className={s.title}>Сумма заказов </p>

      <p className={s.product}>Товары: {quantity}шт </p>
      <p className={s.summary}>Подытог: {subtotal}сом </p>
      <div className={s.block}>
        <p className={s.result}>Итого:</p>
        <p> {totalPrice}</p>
      </div>
      <AppButton onClick={handleClickButton} className={s.button}>
        Подтвердить заказ
      </AppButton>
    </div>
  );
};
