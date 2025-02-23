import { Rating } from "react-simple-star-rating";
import { SwipeImage } from "../../../../components/SwipeImage/SwipeImage";
import s from "./ViewProduct.module.scss";
import { AppButton } from "../../../../components/ui/Button";
import { useAddProductBasketMutation } from "./api";
import { Counter } from "../../../../components/ui/Counter/Counter";
import { Space } from "../../../../components/ui/Space/Space";
import { useEffect, useState } from "react";
import { CustomModal } from "../../../../components/ui/Modal/components/CustomModal";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../constants/path";

export const ViewProduct = ({ data, loading }) => {
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
              variant='button'
            >
              Закрыть
            </AppButton>
            <AppButton
              onClick={() => navigate(ROUTE.basket)}
              className={s.button}
              variant='button'
            >
              Корзина
            </AppButton>
          </div>
        </div>
      </CustomModal>
      <h3>Просмотр товара</h3>

      <div className={s.aboutProduct}>
        <div>
          <SwipeImage loading={loading} images={data?.images} />
        </div>
        <div className={s.description}>
          <span>{data?.brand.title}</span>
          <Rating
            size={26}
            initialValue={data?.avg_rating}
            allowFraction={true}
            readonly={true}
          />
          <p className={s?.colorText}>Цвета</p>
          <div className={s.color}>
            <div style={{ background: data?.color }} />
          </div>
          {data?.promotion > 0 && (
            <p className={s.promotion}>{data?.price} сом</p>
          )}
          <p>{data?.promotion ? data.promotion : data?.price} сом</p>
          <Space h={30} />
          <Counter add={quantity} setAdd={setQuantity} />
          <Space h={40} />
          <AppButton
            onClick={handleAddToBasket}
            className={s.button}
            variant='button'
          >
            Добавить в корзину
          </AppButton>
        </div>
      </div>
      <h2>{data?.title}</h2>
    </div>
  );
};
