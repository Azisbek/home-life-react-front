import s from "./Characteristic.module.scss";
export const Characteristic = () => {
  return (
    <div>
      <p className={s.title}>Основные характеристики</p>
      <div className={s.container}>
        <ul className={s.blockList}>
          <li>Максимальная загрузка белья</li>
          <li>Тип мотора</li>
          <li>Макс. скорость отжима</li>
          <li>Защита от протечек</li>
        </ul>
        <ul className={s.blockList}>
          <li>6 кг</li>
          <li>Стандартный</li>
          <li>1000 Об/мин</li>
          <li>Да</li>
        </ul>
      </div>
    </div>
  );
};
