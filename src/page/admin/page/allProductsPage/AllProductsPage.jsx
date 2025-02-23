import { useState } from "react";
import { Search } from "../../../../assets/icon/Search";
import { Input } from "../../../../components/ui/Input/Input";
import s from "./AllProductsPage.module.scss";
import ProductView from "./components/ProductView";

const AllProductsPage = () => {
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSubmittedSearch(search);
    }
  };

  return (
    <div className={s.products}>
      <div className={s.head}>
        <Input
          className={s.inputSearch}
          placeholder='Поиск'
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          rightIcon={<Search />}
        />
      </div>
      <ProductView search={submittedSearch} />
    </div>
  );
};

export default AllProductsPage;
