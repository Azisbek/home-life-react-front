import { Input } from "../../../components/ui/Input";
import { Paper } from "../../../components/ui/Paper";
import s from "./Order.module.scss";
import { Space } from "../../../components/ui/Space/Space";
import { useState, useCallback, useEffect } from "react";
import { CardOrders } from "../../../components/CardOrders/ui/CardOrders";
import { useGetBasketQuery } from "../../../widgets/basket-widget/api";
import { usePostOrderMutation } from "../api";
import { CustomModal } from "../../../components/ui/Modal/components/CustomModal";

export const Order = () => {
  const [postOrder, { isSuccess, isError }] = usePostOrderMutation();
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useGetBasketQuery();

  const [postData, setPostData] = useState({
    address: "",
    by_card: false,
    by_cash: false,
  });

  const [payment, setPayment] = useState("");

  const changeHandlerPayment = (e) => {
    setPayment(e.target.value);
    setPostData((prev) => ({
      ...prev,
      by_card: e.target.value === "card",
      by_cash: e.target.value === "cash",
    }));
  };

  const changeHandlerAddress = (e) => {
    setPostData((prev) => ({
      ...prev,
      address: e.target.value,
    }));
  };

  const handlePostOrder = useCallback(() => {
    if (!postData.address.trim()) {
      alert("Пожалуйста, укажите адрес доставки.");
      return;
    }

    const orderData = {
      address: postData.address,
      by_card: postData.by_card,
      by_cash: postData.by_cash,
    };
    postOrder(orderData);
    setPostData({ address: "", by_card: false, by_cash: false });
    setPayment("");
  }, [postData]);

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(true);
    }
  }, [isSuccess]);

  return (
    <div className={s.titleBlock}>
      <CustomModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Успешно заявка отправлено
      </CustomModal>
      <h1>Заполните форму</h1>
      <Space h={30} />
      <div className={s.containerContent}>
        <form className={s.form}>
          <Paper className={s.paper}>
            <Input
              placeholder='Крыло, подъезд, этаж и тд (необязательно) (Доб.информация (оформление заказа))'
              value={postData.address}
              onChange={changeHandlerAddress}
            />
          </Paper>
          <div className={s.checkBox}>
            <Space h={30} />
            <h3>Выберите способ оплаты:</h3>
            <Space h={27} />
            <div className={s.containerInputRadio}>
              <input
                id='cash'
                type='radio'
                value='cash'
                checked={payment === "cash"}
                onChange={changeHandlerPayment}
              />
              <label htmlFor='cash'>Наличными при получении</label>
            </div>
            <Space h={25} />
            <div className={s.containerInputRadio}>
              <input
                type='radio'
                value='card'
                id='card'
                checked={payment === "card"}
                onChange={changeHandlerPayment}
              />
              <label htmlFor='card'> Картой банка при получении</label>
            </div>
          </div>
        </form>
        <CardOrders
          postOrders={handlePostOrder}
          type='postOrder'
          quantity={data?.total_quantity}
          subtotal={data?.subtotal}
          totalPrice={data?.totalPrice}
        />
      </div>
    </div>
  );
};
