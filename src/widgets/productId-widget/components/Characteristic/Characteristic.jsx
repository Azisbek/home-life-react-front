import s from "./Characteristic.module.scss";
export const Characteristic = ({ data }) => {
  console.log(data?.main_characteristics);
  return (
    <>
      <p className={s.title}>Основные характеристики</p>
      <div className={s.container}>
        <ul className={s.blockList}>
          {data?.main_characteristics.map((item) => {
            return (
              <div key={item.label} className={s.block}>
                <li>{item.label}</li>
                <li>{item.value}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
