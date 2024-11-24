import React from 'react';
import { Input } from '../../../../../components/ui/Input';
import { Search } from '../../../../../assets/icon/Search';
import { STATUS_APPLICATIONS } from '../../../../../constants/status-applications';
import s from "./ApplicationSearch.module.scss"

const ApplicationsSearch = () => {
    return (
        <div className={s.head}>
        <Input
          className={s.inputSearch}
          placeholder="Поиск"
          rightIcon={<Search />}
        />
        <div className={s.filter}>
          <h3>Статус:</h3>
          <select>
            {STATUS_APPLICATIONS.map((el, idx) => (
              <option key={idx} value={el.status}>
                {el.status}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
};

export default ApplicationsSearch;