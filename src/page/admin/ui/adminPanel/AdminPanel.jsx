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
          <span>
            <PiShoppingCartSimpleBold />
          </span>
        </NavLink>

        <NavLink
          to={ROUTE.archive}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Архив
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminPanel;
