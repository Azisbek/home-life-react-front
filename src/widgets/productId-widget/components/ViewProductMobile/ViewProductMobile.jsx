import { AppButton } from "../../../../components/ui/Button/AppButton";
import { Rating } from "react-simple-star-rating";
import s from "./ViewProductMobile.module.scss";
import { Space } from "../../../../components/ui/Space/Space";
import { SwipeImage } from "../../../../components/SwipeImage/SwipeImage";
import { useState, useEffect } from "react";
import { useAddProductBasketMutation } from "../ViewProduct/api";
import { Counter } from "../../../../components/ui/Counter/Counter";
import { CustomModal } from "../../../../components/ui/Modal/components/CustomModal";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../constants/path";

export const ViewProductMobile = ({ data, loading }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [addProductBasket, { isSuccess }] = useAddProductBasketMutation();
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setIsOpenModal(true);
    }
  }, [isSuccess]);

  const handleAddToBasket = () => {
    if (data) {
      const basketData = {
        product: data.id,
        quantity,
      };
      addProductBasket(basketData);
    }
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={s.container}>
      <CustomModal
        contentClass={s.modalContainer}
        isOpen={isOpenModal}
        onClose={closeModal}
      >
        <div className={s.modal}>
          <p className={s.text}>Товар успешно добавлен в корзину!</p>
          <div className={s.buttonContainer}>
            <AppButton
              onClick={closeModal}
              className={s.button}
              variant="button"
            >
              Закрыть
            </AppButton>
            <AppButton
              onClick={() => navigate(ROUTE.basket)}
              className={s.button}
              variant="button"
            >
              Корзина
            </AppButton>
          </div>
        </div>
      </CustomModal>
      <SwipeImage loading={loading} images={data?.images} />
      <div className={s.containerBlock}>
        <Rating
          size={20}
          initialValue={data?.avg_rating}
          allowFraction={true}
          readonly={true}
        />
        <p className={s.title}>{data?.brand.title}</p>
        <Space h={15} />
        <div>
          <p className={s.colorText}>Цвет: {data?.color}</p>
          <Counter add={quantity} setAdd={setQuantity} />
          <Space h={14} />
          <div className={s.colorBlock}>
            <div style={{ background: data?.color }} />
          </div>
          <Space h={22} />
          {data?.promotion > 0 && (
            <p className={s.promotion}>{data?.price} сом</p>
          )}
          <p>{data?.promotion ? data.promotion : data?.price} сом</p>
          <Space h={10} />
          <AppButton
            onClick={handleAddToBasket}
            className={s.button}
            variant="button"
          >
            Добавить в корзину
          </AppButton>
        </div>
      </div>
    </div>
  );
};
