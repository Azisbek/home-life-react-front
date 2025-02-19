import {
  useGetProductArchiveQuery,
  useIsActiveProductsMutation,
} from "../../../archive/api";
import s from "./ProductView.module.scss";
import ReactStars from "react-rating-stars-component";

const ProductViewArchive = () => {
  const { data, refetch } = useGetProductArchiveQuery();
  const [isActiveProduct] = useIsActiveProductsMutation();

  const handleStatusChange = async (id, newStatus) => {
    try {
      await isActiveProduct({ id, isActive: newStatus }).unwrap();
      refetch();
      alert("Статус успешно обновлён!");
    } catch (error) {
      alert(`Не удалось обновить статус. Попробуйте ещё раз. ${error}`);
    }
  };

  return (
    <div className={s.productView}>
      <table>
        <thead>
          <tr>
            <th>Фото</th>
            <th>Название/Код</th>
            <th>Кол-во</th>
            <th>Цена</th>
            <th>Статус</th>
            <th>Рейтинг</th>
            <th>Акция</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el) => {
            return (
              <tr key={el.id}>
                <td>
                  <img className={s.img} src={el.images[0]} alt='img' />
                </td>
                <td>
                  <div>
                    <h4>{el.title}</h4>
                  </div>
                </td>
                <td>30</td>
                <td>{el.price}</td>
                <td>
                  <select
                    onChange={(e) =>
                      handleStatusChange(el.id, e.target.value === "true")
                    }
                    defaultValue={el.is_active}
                  >
                    <option value='true'>Вкл</option>
                    <option value='false'>Выкл</option>
                  </select>
                </td>
                <td>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor='#ffd700'
                    value={el.avg_rating}
                    isHalf={true}
                    edit={false}
                  />
                </td>

                <td>{el.promotion ? `есть ${el.promotion}` : "нет"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* { эгер товарлар жок болсо анан чыксын деп коюп койдум, кийин бекэндди кошкондо условия коюп коебуз, пока чыгып эле туруп турсун} */}
      {data?.length === 0 && (
        <div className={s.noProducts}>
          <h2>Товары отсутствуют</h2>
          <p>Добавьте товары в каталог, чтобы они появились здесь.</p>
        </div>
      )}
    </div>
  );
};

export default ProductViewArchive;
