import { useGetUsersQuery } from "../api";
import s from "./Users.module.scss"; // Подключаем стили

export const Users = () => {
  const { data } = useGetUsersQuery();

  return (
    <div className={s.usersContainer}>
      <h2 className={s.title}>Список пользователей</h2>
      <div className={s.usersList}>
        {data?.map((user) => (
          <div key={user.id} className={s.userCard}>
            <p className={s.name}>Имя: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Возраст: {user.age}</p>
            <p>Пол: {user.gender === 1 ? "Мужской" : "Женский"}</p>
            <p>Телефон: {user.number}</p>
            <p className={user.wholesaler ? s.wholesaler : s.retailer}>
              {user.wholesaler ? "Оптовый покупатель" : "Розничный покупатель"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
