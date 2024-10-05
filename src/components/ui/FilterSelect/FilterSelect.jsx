import s from "./FilterSelect.module.scss";

export const FilterSelect = ({ options, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <select className={s.select} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
