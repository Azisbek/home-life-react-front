import { NavLink } from "react-router-dom";
import { ROUTE } from "../../../../constants/path";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuUserPlus } from "react-icons/lu";
import s from "./AdminPanel.module.scss";

const AdminPanel = () => {
  return (
    <div className={s.admin_panel}>
      <h1>Админ панель</h1>
      <nav>
        <NavLink
          to={ROUTE.addProducts}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Добавить товар
          <span>
            <PiShoppingCartSimpleBold />
          </span>
        </NavLink>
        <NavLink
          to={ROUTE.addNews}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Добавить новость
          <span>
            <PiShoppingCartSimpleBold />
          </span>
        </NavLink>
        <NavLink
          to={ROUTE.createColor}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          добавить цвет
        </NavLink>
        <NavLink
          to={ROUTE.createBrand}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          добавить бренд
        </NavLink>
        <NavLink
          to={ROUTE.createCategory}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          добавить каталог
        </NavLink>
        <NavLink
          to={ROUTE.applications}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Заявки
          <span>
            <LuUserPlus />
          </span>
        </NavLink>
        <NavLink
          to={ROUTE.allProducts}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Все товары
        </NavLink>

        <NavLink
          to={ROUTE.archive}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Архив
        </NavLink>

        <NavLink
          to={ROUTE.users}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          пользователи
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminPanel;
