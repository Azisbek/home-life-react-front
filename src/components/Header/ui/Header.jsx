import { AppNavigateHeader } from "./components/navigation/AppNavigateHeader";
import { Input } from "../../../components/ui/Input";
import logo from "../../../assets/Logo.png";
import { Search } from "../../../assets/icon/Search";

import clsx from "clsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../widgets/catalog-widget/components/filter-catalog/model/filter.slice";
import { useNavigate } from "react-router-dom";
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
      <div>
        <img src={logo} alt='logo' className={s.logo} />
      </div>

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
        variant='button'
      >
        Зарегистрироваться
      </AppButton>
    </header>
  );
};
