import { Link } from "react-router-dom";
import { ROUTE } from "../../../../../constants/path";
import s from "./AppNavigateHeader.module.css";

export const AppNavigateHeader = () => {
  return (
    <div className={s.containerNavigate}>
      <Link to={ROUTE.home}>Главная </Link>
      <Link to={ROUTE.catalog}>Каталог </Link>
      <Link to={ROUTE.basket}>Корзина</Link>
    </div>
  );
};
