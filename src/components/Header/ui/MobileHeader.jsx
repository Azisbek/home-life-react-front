import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import { Input } from "../../ui/Input";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setFilter } from "../../../widgets/catalog-widget/components/filter-catalog/model/filter.slice";
import { ROUTE } from "../../../constants/path";
import { Search } from "../../../assets/icon/Search";
import s from "./MobileHeader.module.scss";
import { Space } from "../../ui/Space/Space";
import clsx from "clsx";
import { ModalRight } from "../../ui/ModalRight";

export function MobileHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const navigationPathHandler = (path) => {
    setIsModalOpen(false);
    navigate(path);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <header className={clsx(s.containerHeader, "container")}>
        <img className={s.logo} src={logo} alt='logo' />

        <Space h={5} />
        <div className={s.headerSearch}>
          <div className={s.burger} onClick={toggleModal}>
            <span className={s.line} />
            <span className={s.line} />
            <span className={s.line} />
          </div>

          <div className={s.containerInput}>
            <Input
              value={search}
              onChange={searchChangeHandler}
              rightIcon={<Search />}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </header>

      <ModalRight isModalOpen={isModalOpen} toggleModal={toggleModal}>
        <div className={s.navigateMobileContainer}>
          <p onClick={() => navigationPathHandler(ROUTE.home)}>Главная</p>
          <p onClick={() => navigationPathHandler(ROUTE.catalog)}>Каталог </p>
          <p onClick={() => navigationPathHandler(ROUTE.contacts)}>Контакты</p>
          <p onClick={() => navigationPathHandler(ROUTE.basket)}>Корзина</p>
          <p onClick={() => navigationPathHandler(ROUTE.about)}>О нас</p>
        </div>
      </ModalRight>
    </>
  );
}
