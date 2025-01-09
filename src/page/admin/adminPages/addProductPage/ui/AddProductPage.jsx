import s from "./AddProductPage.module.scss";
import { AppButton } from "../../../../../components/ui/Button";
import { Input } from "../../../../../components/ui/Input/Input";
import { FilterSelect } from "../../../../../components/ui/FilterSelect/FilterSelect";
import {
  useGetFilterBrandsQuery,
  useGetFilterCategoriesQuery,
  useGetFilterColorQuery,
} from "../../../../../widgets/catalog-widget/api/FilterValueCatalogApi";
import { useState } from "react";
import { useAddProductAdminMutation } from "../api";
import { useSelector } from "react-redux";

const AddProductPage = () => {
  const user = useSelector((state) => state.signIn);
  const [addProduct] = useAddProductAdminMutation();
  const { data: brands } = useGetFilterBrandsQuery();
  const { data: categories } = useGetFilterCategoriesQuery();
  const { data: colors } = useGetFilterColorQuery();
  const [forms, setForm] = useState({
    title: "",
    brand: "",
    category: "",
    color: "",
    price: "",
    promotion: "",
    wholesale_price: "",
    wholesale_promotion: "",
    description: "",
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    is_product_of_the_day: false,
    is_active: false,
    main_characteristics: [],
    quantity: 0,
  });

  console.log(user.user);

  const handleInputChangeHandler = (key) => (e) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleInputChangeCharateristickHandler = (index, key) => (e) => {
    const updatedCharacteristics = [...forms.main_characteristics];
    updatedCharacteristics[index] = {
      ...updatedCharacteristics[index],
      [key]: e.target.value,
    };
    setForm((prev) => ({
      ...prev,
      main_characteristics: updatedCharacteristics,
    }));
  };

  const addCharacteristic = (e) => {
    e.preventDefault();
    if (forms.main_characteristics.length < 4) {
      setForm((prev) => ({
        ...prev,
        main_characteristics: [
          ...prev.main_characteristics,
          { label: "", value: "" },
        ],
      }));
    } else {
      alert("Вы не можете добавить больше 4 характеристик");
    }
  };

  const selectChange = (filterKey) => (value) => {
    setForm((prev) => ({ ...prev, [filterKey]: value }));
  };

  const handleFileChange = (key) => (e) => {
    const file = e.target.files[0];
    setForm((prev) => ({ ...prev, [key]: file }));
  };

  const postSelect = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(forms).forEach((key) => {
      if (key.startsWith("image") && forms[key]) {
        formData.append(key, forms[key]);
      } else if (key === "main_characteristics") {
        formData.append(key, JSON.stringify(forms[key]));
      } else {
        formData.append(key, forms[key]);
      }
    });

    try {
      await addProduct(formData);
      console.log("Продукт успешно добавлен");
    } catch (error) {
      console.error("Ошибка при добавлении продукта:", error);
    }
  };

  return (
    <form className={s.addProduct}>
      <div className={s.form}>
        <Input
          placeholder='Название товара'
          className={s.input}
          onChange={handleInputChangeHandler("title")}
        />
        <FilterSelect
          className={s.select}
          options={brands || []}
          defaultValue={"Бренд товара"}
          onChange={selectChange("brand")}
        />
        <FilterSelect
          className={s.select}
          options={categories || []}
          defaultValue={"Модель товара"}
          onChange={selectChange("category")}
        />
        <FilterSelect
          className={s.select}
          options={colors || []}
          defaultValue={"Цвет(а) товара"}
          onChange={selectChange("color")}
        />
        <Input
          onChange={handleInputChangeHandler("price")}
          placeholder='Цена товара'
          className={s.input}
        />
        <Input
          onChange={handleInputChangeHandler("promotion")}
          placeholder='Скидка'
          className={s.input}
        />

        <h1>Оптовик</h1>

        <Input
          onChange={handleInputChangeHandler("wholesale_price")}
          placeholder='Цена товара для оптовиков'
          className={s.input}
        />
        <Input
          onChange={handleInputChangeHandler("wholesale_promotion")}
          placeholder='Скидка для оптовиков'
          className={s.input}
        />
      </div>

      <div className={s.description}>
        <div>
          <label htmlFor='product-day'>Является ли продуктом дня</label>
          <Input
            id='product-day'
            type='checkbox'
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                is_product_of_the_day: e.target.checked,
              }))
            }
          />
          <label htmlFor='active-product'>Продукт активен</label>
          <Input
            id='active-product'
            type='checkbox'
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                is_active: e.target.checked,
              }))
            }
          />

          <div>
            <Input
              onChange={handleInputChangeHandler("quantity")}
              placeholder='Количество товара'
              className={s.input}
              type='number'
            />
          </div>
        </div>

        <textarea
          onChange={handleInputChangeHandler("description")}
          placeholder='Описание товара'
        ></textarea>
        <label htmlFor='mainImage' className={s.label}>
          Главное изображение
          <Input
            onChange={handleFileChange("image1")}
            id='mainImage'
            name='mainImage'
            type='file'
            placeholder='Фото товара'
            className={s.input}
            accept='image/*'
          />
        </label>
        {/* Дополнительные изображения */}
        <Input
          onChange={handleFileChange("image2")}
          type='file'
          placeholder='Фото товара'
          className={s.input}
          accept='image/*'
        />
        <Input
          onChange={handleFileChange("image3")}
          type='file'
          placeholder='Фото товара'
          className={s.input}
          accept='image/*'
        />
        <Input
          onChange={handleFileChange("image4")}
          type='file'
          placeholder='Фото товара'
          className={s.input}
          accept='image/*'
        />
        <Input
          onChange={handleFileChange("image5")}
          type='file'
          placeholder='Фото товара'
          className={s.input}
          accept='image/*'
        />
      </div>

      <div className={s.characteristick}>
        <h1>Характеристики</h1>
        {forms.main_characteristics.map((char, index) => (
          <div key={index} className={s.block}>
            <Input
              onChange={handleInputChangeCharateristickHandler(index, "label")}
              value={char.label}
              placeholder='label'
              className={s.input}
            />
            <Input
              onChange={handleInputChangeCharateristickHandler(index, "value")}
              value={char.value}
              placeholder='value'
              className={s.input}
            />
          </div>
        ))}
        <AppButton
          onClick={addCharacteristic}
          variant='button'
          className={s.btn}
        >
          Добавить характеристику
        </AppButton>
        <AppButton onClick={postSelect} variant='button' className={s.btn}>
          Готово
        </AppButton>
      </div>
    </form>
  );
};

export default AddProductPage;
