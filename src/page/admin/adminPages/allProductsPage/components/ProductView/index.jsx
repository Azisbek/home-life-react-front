import React, { useState, useEffect } from "react";
import s from "./ProductView.module.scss";
import ReactStars from "react-rating-stars-component";

const ProductView = () => {
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
            <th>Цвет{"(а)"}</th>
            <th>Акция</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                className={s.img}
                src="https://images.philips.com/is/image/philipsconsumer/vrs_6bc37d24b291fee1a66f5b481ee10078f3d5d70c?wid=700&hei=700&$pnglarge$"
                alt="img"
              />
            </td>
            <td>
              <div>
                <h4>Пылеcос Tefal </h4>
                <h4>Bagless TW7272EA</h4>
                <h4>#574030</h4>
              </div>
            </td>
            <td>30</td>
            <td>25 490</td>
            <td>
              <select defaultValue="Вкл">
                <option value="Вкл">Вкл</option>
                <option value="Выкл">Выкл</option>
              </select>
            </td>
            <td>
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                value={4}
                isHalf={true}
                edit={false}
              />
            </td>
            <td>
              <div>
                <h4>Белый,</h4>
                <h4>Серый,</h4>
                <h4>Черный</h4>
              </div>
            </td>
            <td>Нет</td>
          </tr>
        </tbody>
      </table>
      {/* { эгер товарлар жок болсо анан чыксын деп коюп койдум, кийин бекэндди кошкондо условия коюп коебуз, пока чыгып эле туруп турсун} */}
      <div className={s.noProducts}>
        <h2>Товары отсутствуют</h2>
        <p>Добавьте товары в каталог, чтобы они появились здесь.</p>
      </div>
    </div>
  );
};

export default ProductView;
