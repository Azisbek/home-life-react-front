import React, { useState } from "react";
import { Search } from "../../../../assets/icon/Search";
import { Input } from "../../../../components/ui/Input/Input";
import s from "./AllProductsPage.module.scss";
import ProductView from "./components/ProductView";

const AllProductsPage = () => {
  return (
    <div className={s.products}>
      <div className={s.head}>
        <Input
          className={s.inputSearch}
          placeholder="Поиск"
          rightIcon={<Search />}
        />
      </div>
      <ProductView  />
    </div>
  );
};

export default AllProductsPage;
