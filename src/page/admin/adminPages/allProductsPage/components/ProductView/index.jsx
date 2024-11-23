import React, { useState, useEffect } from "react";
import s from "./ProductView.module.scss";
import ReactStars from "react-rating-stars-component";
import Pagination from "../../../../../../components/ui/Pagination";

const ProductView = ({ search }) => {
  const data = Array.from({ length: 20 }, (_, idx) => ({
    id: idx + 1,
    name: `Продукт ${idx + 1}`,
    quantity: Math.floor(Math.random() * 50),
    price: Math.floor(Math.random() * 10000) + 5000,
    status: idx % 2 === 0 ? "Вкл" : "Выкл",
    rating: Math.floor(Math.random() * 5) + 1,
    colors: ["Белый", "Красный", "Синий"],
    image:
      "https://sonicleanusa.com/cdn/shop/products/whisperjet-c2-canister-vacuum-cleaner-483982.jpg?v=1627583562",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={s.productView}>
      {filteredData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Фото</th>
              <th>Название/Код</th>
              <th>Кол-во</th>
              <th>Цена</th>
              <th>Статус</th>
              <th>Рейтинг</th>
              <th>Цвет{"(а)"}</th>
              <th>Акция</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((el) => (
              <tr key={el.id}>
                <td>
                  <img className={s.img} src={el.image} alt="img" />
                </td>
                <td>
                  <div>
                    <h4>{el.name}</h4>
                    <h4>#{el.id}</h4>
                  </div>
                </td>
                <td>{el.quantity}</td>
                <td>{el.price}</td>
                <td>
                  <select defaultValue={el.status}>
                    <option value="Вкл">Вкл</option>
                    <option value="Выкл">Выкл</option>
                  </select>
                </td>
                <td>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value={el.rating}
                    isHalf={true}
                    edit={false}
                  />
                </td>
                <td>
                  <div>
                    {el.colors.map((color, idx) => (
                      <h4 key={idx}>{color},</h4>
                    ))}
                  </div>
                </td>
                <td>Нет</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className={s.noProducts}>
          <h2>Товары отсутствуют</h2>
          <p>Добавьте товары в каталог, чтобы они появились здесь.</p>
        </div>
      )}
    <div className={s.pagination}>
    {filteredData.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
    </div>
  );
};

export default ProductView;
