import { AppNavigateHeader } from "./components/navigation/AppNavigateHeader";
import { Input } from "../../../components/ui/Input";
import logo from "../../../assets/Logo.png";
import { Search } from "../../../assets/icon/Search";

import clsx from "clsx";
import s from "./Header.module.scss";
import { useGetSearchProductQuery } from "../api/searchApi/SearchApi";
import { useState } from "react";

export const Header = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  const { refetch } = useGetSearchProductQuery(data, {
    refetchOnMountOrArgChange: true,
  });

  const searchChangeHandler = (e) => {
    const title = e.target.value;
    setSearch(title);
  };

  const handleSearchHandler = () => {
    setData({
      search: search,
    });
    refetch();
  };

  return (
    <header className={clsx("container", s.containerHeader)}>
      <div>
        <img src={logo} alt='logo' className={s.logo} />
      </div>

      <Input
        value={search}
        onChange={searchChangeHandler}
        rightIcon={<Search />}
        rightOnClick={handleSearchHandler}
      />

      <AppNavigateHeader />

      {/* <AppProfileHeader onOpen={onOpen} /> */}
    </header>
  );
};
