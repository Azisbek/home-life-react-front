import { Input } from "../../../../../components/ui/Input";
import { Search } from "../../../../../assets/icon/Search";
import s from "./ApplicationSearch.module.scss";

const ApplicationsSearch = () => {
  return (
    <div className={s.head}>
      <Input
        className={s.inputSearch}
        placeholder='Поиск'
        rightIcon={<Search />}
      />
    </div>
  );
};

export default ApplicationsSearch;
