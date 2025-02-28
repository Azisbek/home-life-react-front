import { AppNavigateHeader } from "./components/navigation/AppNavigateHeader";
import { Input } from "../../../components/ui/Input";
import logo from "../../../assets/Logo.webp";
import { Search } from "../../../assets/icon/Search";

import clsx from "clsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../widgets/catalog-widget/components/filter-catalog/model/filter.slice";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../../constants/path";
import { AppButton } from "../../ui/Button";
import s from "./Header.module.scss";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const searchChangeHandler = (e) => {
    const title = e.target.value;
    setSearch(title);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(setFilter({ key: "search", value: search }));
      navigate(ROUTE.catalog);
    }
  };

  return (
    <header className={clsx("container", s.containerHeader)}>
      <Link to={ROUTE.base}>
        <img src={logo} alt="logo" className={s.logo} />
      </Link>

      <div className={s.containerInput}>
        <Input
          value={search}
          onChange={searchChangeHandler}
          rightIcon={<Search />}
          onKeyDown={handleKeyDown}
        />
      </div>

      <AppNavigateHeader />

      <AppButton
        onClick={() => navigate(ROUTE.signUp)}
        className={s.buttonSingUp}
        variant="button"
      >
        Зарегистрироваться
      </AppButton>
    </header>
  );
};
