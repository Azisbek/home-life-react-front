import { nanoid } from "nanoid";
import { CardOrders } from "../../../components/CardOrders/ui/CardOrders";
import { ProductBasket } from "../../../components/ProductBasket/components/ProductBasket";
import { Space } from "../../../components/ui/Space/Space";
import { useGetBasketQuery } from "../api";
import s from "./CartProducts.module.scss";

export const CartProducts = () => {
  const { data, refetch } = useGetBasketQuery();

  const handleQuantityUpdate = () => {
    refetch();
  };

  return (
    <div className={s.containerList}>
      <h3 className={s.title}>Просмотр корзины</h3>
      <Space h={30} />

      {data?.items.length ? (
        <div className={s.containerBlock}>
          <div className={s.productList}>
            {data?.items.map((el) => {
              return (
                <ProductBasket
                  key={nanoid()}
                  quantity={el.quantity}
                  id={el.product_id}
                  title={el.title}
                  image={el.image}
                  price={el.price}
                  handleUpdateBasketProduct={handleQuantityUpdate}
                />
              );
            })}
          </div>

          <CardOrders
            type='navigate'
            quantity={data?.total_quantity}
            subtotal={data?.subtotal}
            totalPrice={data?.totalPrice}
          />
        </div>
      ) : (
        <h1>В корзине пусто</h1>
      )}
    </div>
  );
};
