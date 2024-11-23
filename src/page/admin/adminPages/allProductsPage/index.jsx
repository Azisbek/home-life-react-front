import React, { useState } from "react";
import { Search } from "../../../../assets/icon/Search";
import { Input } from "../../../../components/ui/Input/Input";
import s from "./AllProductsPage.module.scss";
import ProductView from "./components/ProductView";
import ProductNavigation from "./components/ProductNavigation";

const HOME_APPLIANCES = [
  { _id: 1, nav: "Водонагреватели" },
  { _id: 2, nav: "Кондиционеры" },
  { _id: 3, nav: "Микроволновые печи" },
  { _id: 4, nav: "Плиты" },
  { _id: 5, nav: "Посудомоечные машины" },
  { _id: 6, nav: "Пылесосы" },
  { _id: 7, nav: "Стиральные машины" },
  { _id: 8, nav: "Холодильники" },
];

const TELEVISIONS = [
  { _id: 1, nav: "LCD телевизоры" },
  { _id: 2, nav: "LED телевизоры" },
  { _id: 3, nav: "OLED телевизоры" },
  { _id: 4, nav: "Smart телевизоры" },
  { _id: 5, nav: "4K телевизоры" },
  { _id: 6, nav: "8K телевизоры" },
  { _id: 7, nav: "Портативные телевизоры" },
];

const BUILT_IN_HOME_APPLIANCES = [
  { _id: 1, nav: "Встраиваемые духовки" },
  { _id: 2, nav: "Встраиваемые микроволновки" },
  { _id: 3, nav: "Встраиваемые посудомоечные машины" },
  { _id: 4, nav: "Встраиваемые варочные панели" },
  { _id: 5, nav: "Встраиваемые холодильники" },
  { _id: 6, nav: "Встраиваемые морозильники" },
  { _id: 7, nav: "Встраиваемые вытяжки" },
];

const SMALL_APPLIANCES = [
  { _id: 1, nav: "Кофемашины" },
  { _id: 2, nav: "Блендеры" },
  { _id: 3, nav: "Миксеры" },
  { _id: 4, nav: "Чайники" },
  { _id: 5, nav: "Тостеры" },
  { _id: 6, nav: "Утюги" },
  { _id: 7, nav: "Мясорубки" },
  { _id: 8, nav: "Фены" },
];
const AllProductsPage = () => {
  const [selected, setSelected] = useState(HOME_APPLIANCES);
  const [search, setSearch] = useState(""); 

  const selectChangeHandler = (e) => {
    const selectedValue = e.target.value;
    switch (selectedValue) {
      case "HOME_APPLIANCES":
        setSelected(HOME_APPLIANCES);
        break;
      case "TELEVISIONS":
        setSelected(TELEVISIONS);
        break;
      case "BUILT_IN_HOME_APPLIANCES":
        setSelected(BUILT_IN_HOME_APPLIANCES);
        break;
      case "SMALL_APPLIANCES":
        setSelected(SMALL_APPLIANCES);
        break;
      default:
        setSelected([]);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={s.products}>
      <div className={s.head}>
        <Input
          className={s.inputSearch}
          placeholder="Поиск"
          value={search}
          onChange={handleSearchChange}
          rightIcon={<Search />}
        />
        <div className={s.filter}>
          <select onChange={selectChangeHandler}>
            <option value="HOME_APPLIANCES">Бытовая техника</option>
            <option value="TELEVISIONS">Телевизоры</option>
            <option value="BUILT_IN_HOME_APPLIANCES">
              Встраиваемая бытовая техника
            </option>
            <option value="SMALL_APPLIANCES">Мелкая бытовая техника</option>
          </select>
        </div>
      </div>
      <ProductNavigation selected={selected} />
      <ProductView search={search} />
    </div>
  );
};

export default AllProductsPage;
