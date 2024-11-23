import clsx from "clsx";
import s from "./FilterSelect.module.scss";

export const FilterSelect = ({ options, onChange, className, name, defaultValue }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <select
      name={name}
      className={clsx(s.select, className)}
      onChange={handleChange}
    >
      <option selected value="" disabled >
        {defaultValue}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
        
      ))}
    </select>
  );
};
