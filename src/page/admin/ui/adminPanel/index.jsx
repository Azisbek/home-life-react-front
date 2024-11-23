import React from "react";
import s from "./AdminPanel.module.scss";
import { NavLink } from "react-router-dom";
import { ROUTE } from "../../../../constants/path";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { BiPurchaseTag } from "react-icons/bi";
import { LuUserPlus2 } from "react-icons/lu";

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
          to={ROUTE.addShares}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Добавить акции
          <span>
            <BiPurchaseTag />
          </span> 
        </NavLink>
        <NavLink
          to={ROUTE.applications}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Заявки
          <span>
            <LuUserPlus2 />
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
          to={ROUTE.allNews}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Все новости
          <span>
            <PiShoppingCartSimpleBold />
          </span>
        </NavLink>
        <NavLink
          to={ROUTE.allShares}
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Все акции
          <span>
            <PiShoppingCartSimpleBold />
          </span>
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminPanel;