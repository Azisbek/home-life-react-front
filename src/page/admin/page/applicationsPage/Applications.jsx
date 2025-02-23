import { useGetApplicationsQuery } from "./api";
import s from "./Applications.module.scss";
// import ApplicationsSearch from "./applicationSearch";

const role = {
  customer: "Клиент",
  wholesaler: "Оптовик",
};

const Applications = () => {
  const { data } = useGetApplicationsQuery();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()} ${date.toLocaleString("ru", {
      month: "long",
    })} ${date.getFullYear()}`;
  };

  return (
    <div className={s.applications}>
      {/* <ApplicationsSearch /> */}

      <table className={s.customers}>
        <thead className={s.thead}>
          <tr>
            <th>
              <div className={s.idOrder}>ID заказа</div>
            </th>
            <th>Роль</th>
            <th>Пользователь</th>
            <th>Дата</th>
            <th>Метод оплаты</th>
            <th>Товары</th>
            <th>Общая сумма</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((app) => (
            <tr key={app.id}>
              <td>
                <div className={s.idOrder}>{app.id}</div>
              </td>
              <td>{role[app.role]}</td>
              <td>{app.username}</td>
              <td>{formatDate(app.created_at)}</td>
              <td>{app.payment_method}</td>
              <td className={s.productsContent}>
                {app?.products?.map((product, index) => (
                  <div key={index}>
                    {product.product_title} ({product.quantity}) -{" "}
                    {product.productTotalPrice} сом
                  </div>
                ))}
              </td>
              <td>{app.totalPrice} сом</td>
            </tr>
          ))}
        </tbody>
      </table>

      {!data && (
        <div className={s.noApplications}>На данный момент заявок нет.</div>
      )}
    </div>
  );
};

export default Applications;
