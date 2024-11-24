import React, { useState, useRef, useEffect } from "react";
import s from "./AddProductPage.module.scss";
import { AppButton } from "../../../../components/ui/Button";
import { Input } from "../../../../components/ui/Input/Input";
import { FilterSelect } from "../../../../components/ui/FilterSelect/FilterSelect";
import { useGetFilterBrandsQuery, useGetFilterCategoriesQuery, useGetFilterColorQuery } from "../../../../widgets/catalog-widget/api/FilterValueCatalogApi";


const AddProductPage = () => {
  const [showShareFields, setShowShareFields] = useState(false);
  const firstInputRef = useRef(null);
  const {data:brands} = useGetFilterBrandsQuery()
  const {data:categories} = useGetFilterCategoriesQuery()
  const {data:colors} = useGetFilterColorQuery()


  useEffect(() => {
    if (showShareFields) {
      firstInputRef.current?.focus();
    }
  }, [showShareFields]);

  return (
    <form className={s.addProduct}>
      <div className={s.form}>
        <Input placeholder="Название товара" className={s.input} />
        <FilterSelect className={s.select} options={brands || []} defaultValue={"Бренд товара"}/>
        <FilterSelect className={s.select} options={categories || []} defaultValue={"Модель товара"}/>
        <FilterSelect className={s.select} options={colors || []} defaultValue={"Цвет(а) товара"}/>
        <Input placeholder="Цена товара" className={s.input} />
        <Input placeholder="Рейтинг товара" className={s.input} />
        <div className={showShareFields ? s.show : s.showshareInput}>
          <input
            type="text"
            ref={firstInputRef}
            placeholder="Акция 1"
            className={s.input}
          />
          <Input placeholder="Акция 2" className={s.input} />
        </div>
        <span className={s.addShare} onClick={() => setShowShareFields(!showShareFields)}>
          Добавить акцию
        </span>
      </div>
      <div className={s.description}>
        <textarea placeholder="Описание товара"></textarea>
        <label htmlFor="mainImage" className={s.label}>
          Главное изображение
          <Input
            id="mainImage"
            name="mainImage"
            type="file"
            placeholder="Фото товара"
            className={s.input}
          />
        </label>
        <Input type="file" placeholder="Фото товара" className={s.input} />
        <Input type="file" placeholder="Фото товара" className={s.input} />
        <AppButton variant="button" type={"submit"} className={s.btn}>
          Готово
        </AppButton>
      </div>
    </form>
  );
};

export default AddProductPage;
