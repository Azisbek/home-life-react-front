import s from "./Applications.module.scss";
import ApplicationsSearch from "./applicationSearch";

const Applications = () => {
  return (
    <div className={s.applications}>
      <ApplicationsSearch />
      <table className={s.customers}>
        <thead className={s.thead}>
          <tr>
            <th>
              <div className={s.idOrder}>
                <input type='checkbox' />
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
          <tr>
            <td>
              <div className={s.userOrderId}>
                <input type='checkbox' />
                #1
              </div>
            </td>
            <td>
              <div className={s.userName}>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/219/219983.png'
                  alt='user-image'
                />
                Эсенов Айдар
              </div>
            </td>
            <td>2 Март 2024</td>
            <td>6</td>
            <td>40 000</td>
            <td>
              <button className={s.active}>Активный</button>
            </td>
            <td>Картой</td>
          </tr>
        </tbody>
      </table>
      {/* {заявка жок блсо ушул чыгып турат} */}
      <div className={s.noApplications}>На данный момент заявок нет.</div>
    </div>
  );
};

export default Applications;
