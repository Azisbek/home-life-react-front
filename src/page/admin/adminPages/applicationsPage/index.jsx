import React, { useState } from "react";
import { Input } from "../../../../components/ui/Input/Input";
import { Search } from "../../../../assets/icon/Search";
import Pagination from "../../../../components/ui/Pagination";
import s from "./Applications.module.scss";


const status = [
  { _id: 0, status: "Все" },
  { _id: 1, status: "Активныe" },
  { _id: 2, status: "В ожидании" },
  { _id: 3, status: "Отменённые" },
];

let statuses = ["Активный", "В ожидании", "Отменённый"]; 

let data = Array.from({ length: 30 }).map((_, index) => ({
  id: index + 1,
  name: `Эсенов Айдар ${index + 1}`,
  date: "2 Март 2024",
  quantity: Math.floor(Math.random() * 10) + 1, 
  amount: `${Math.floor(Math.random() * 50000) + 10000}`, 
  status: statuses[Math.floor(Math.random() * statuses.length)], 
  paymentMethod: Math.random() > 0.5 ? "Картой" : "Наличные", 
}));

const Applications = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("Все"); 

  const itemsPerPage = 5;

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      selectedStatus === "Все" || item.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const searchChangeHandler = (e) => {
    const title = e.target.value;
    setSearch(title);
  };

  const statusChangeHandler = (e) => {
    setSelectedStatus(e.target.value);
    setCurrentPage(1); 
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={s.applications}>
      <div className={s.head}>
        <Input
          value={search}
          className={s.inputSearch}
          placeholder="Поиск"
          onChange={searchChangeHandler}
          rightIcon={<Search />}
        />
        <div className={s.filter}>
          <h3>Статус:</h3>
          <select value={selectedStatus} onChange={statusChangeHandler}>
            {status.map((el, idx) => (
              <option key={idx} value={el.status}>
                {el.status}
              </option>
            ))}
          </select>
        </div>
      </div>
      {data.length === 0 ? (
        <div className={s.noApplications}>
          На данный момент заявок нет.
        </div>
      ) : (
        <>
          <table className={s.customers}>
            <thead className={s.thead}>
              <tr>
                <th>
                  <div className={s.idOrder}>
                    <input type="checkbox" />
                    ID заказа
                  </div>
                </th>
                <th>Заказчик</th>
                <th>Дата</th>
                <th>Кол-во</th>
                <th>Сумма</th>
                <th>Статус</th>
                <th>Метод оплаты</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.length > 0 ? (
                currentPageData.map((el, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className={s.userOrderId}>
                        <input type="checkbox" />#{el.id}
                      </div>
                    </td>
                    <td>
                      <div className={s.userName}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                          alt="user-image"
                        />
                        {el.name}
                      </div>
                    </td>
                    <td>{el.date}</td>
                    <td>{el.quantity}</td>
                    <td>{el.amount}</td>
                    <td>
                      <button
                        className={
                          el.status === "Активный"
                            ? s.active
                            : el.status === "В ожидании"
                            ? s.waiting
                            : s.cancelled
                        }
                      >
                        {el.status}
                      </button>
                    </td>
                    <td>{el.paymentMethod}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className={s.noData}>
                    Извините, но сейчас данные отсутствуют. Попробуйте изменить параметры поиска или фильтра.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className={s.pagination}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        </>
      )}
    </div>
  );
  
};


export default Applications;
