import s from "./Counter.module.scss";

export const Counter = ({ add, setAdd, minValue = 1, disabled }) => {
  const handlePlus = () => {
    if (!disabled) {
      setAdd(add + 1);
    }
  };

  const handleMinus = () => {
    if (!disabled) {
      if (add > minValue) {
        setAdd(add - 1);
      }
    }
  };

  return (
    <div className={s.contain}>
      <button
        onClick={handleMinus}
        className={s.add}
        disabled={add <= minValue}
        aria-label='Уменьшить количество'
      >
        -
      </button>
      <p className={s.number}>{add}</p>
      <button
        onClick={handlePlus}
        className={s.add}
        aria-label='Увеличить количество'
      >
        +
      </button>
    </div>
  );
};
