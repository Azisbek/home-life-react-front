import { Input } from "../../../components/ui/Input";
import { Paper } from "../../../components/ui/Paper";
import s from "./Order.module.scss";
import { Space } from "../../../components/ui/Space/Space";
import { useState } from "react";

export const Order = () => {
  const [paymant, setPaymant] = useState("");
  const changeHandlerPaymant = (e) => {
    setPaymant(e.target.value);
  };

  return (
    <div className={s.titleBlock}>
      <h1>Заполните форму</h1>
      <Space h={30} />
      <form className={s.form}>
        <Paper className={s.paper}>
          <Input placeholder="Ваше Имя*" />
          <Input placeholder="Ваш Email*" type="email" />
          <Input placeholder="Крыло, подъезд, этаж и тд (необязательно) (Доб.информация (оформление заказа))" />
        </Paper>
        <div className={s.checkBox}>
          <Space h={30} />
          <h3>Выберите способ оплаты:</h3>
          <Space h={27} />
          <div className={s.containerInputRadio}>
            <input
              id="cash"
              type="radio"
              value="cash"
              checked={paymant === "cash"}
              onChange={changeHandlerPaymant}
            />
            <label htmlFor="cash">Наличными при получении</label>
          </div>
          <Space h={25} />
          <div className={s.containerInputRadio}>
            <input
              type="radio"
              value="card"
              id="card"
              checked={paymant === "card"}
              onChange={changeHandlerPaymant}
            />
            <label htmlFor="card"> Картой банка при получении</label>
          </div>
        </div>
      </form>
    </div>
  );
};
