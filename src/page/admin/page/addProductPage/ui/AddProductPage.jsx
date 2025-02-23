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
import { required } from "../api/required";
import { CustomModal } from "../../../../../components/ui/Modal/components/CustomModal";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { LoaderScreen } from "../../../../../components/ui/loader-screen/ui/LoaderScreen";

const AddProductPage = () => {
  const [addProduct, { isLoading }] = useAddProductAdminMutation();
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
  const [error, setError] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const checkEmptyFields = () => {
    let errors = {};

    for (let key in forms) {
      if (
        key !== "is_product_of_the_day" && // Игнорируем чекбоксы
        key !== "is_active" && // Игнорируем чекбоксы
        (forms[key] === "" ||
          forms[key] === null ||
          (Array.isArray(forms[key]) && forms[key].length === 0))
      ) {
        errors[key] = required[key] || `Поле ${key} обязательно для заполнения`;
      }
    }

    const imagesCount = [
      forms.image1,
      forms.image2,
      forms.image3,
      forms.image4,
      forms.image5,
    ].filter((image) => image !== null).length;

    if (imagesCount < 3) {
      errors.image = "Необходимо загрузить хотя бы 3 изображения товара";
    }

    setError(errors);
    return Object.keys(errors).length === 0 ? null : errors;
  };

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

    const errors = checkEmptyFields();

    if (errors) {
      console.log("Форма не прошла валидацию:");
      return;
    }

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
      setIsOpen((prev) => !prev);
      console.log("Продукт успешно добавлен");
    } catch (error) {
      console.error("Ошибка при добавлении продукта:", error);
    }
  };

  if (isLoading) {
    return <LoaderScreen />;
  }

  return (
    <>
      <CustomModal
        contentClass={s.successModal}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        Продукт успешно отправлено <IoIosCheckmarkCircle size={40} />
      </CustomModal>

      <form className={s.addProduct}>
        <div className={s.form}>
          {error.title && <p className={s.error}>{error.title}</p>}
          <Input
            placeholder="Название товара"
            className={s.input}
            onChange={handleInputChangeHandler("title")}
          />
          {error.brand && <p className={s.error}>{error.brand}</p>}
          <FilterSelect
            className={s.select}
            options={brands || []}
            defaultValue={"Бренд товара"}
            onChange={selectChange("brand")}
          />
          {error.category && <p className={s.error}>{error.category}</p>}
          <FilterSelect
            className={s.select}
            options={categories || []}
            defaultValue={"Модель товара"}
            onChange={selectChange("category")}
          />
          {error.color && <p className={s.error}>{error.color}</p>}
          <FilterSelect
            className={s.select}
            options={colors || []}
            defaultValue={"Цвет(а) товара"}
            onChange={selectChange("color")}
          />
          {error.price && <p className={s.error}>{error.price}</p>}
          <Input
            onChange={handleInputChangeHandler("price")}
            placeholder="Цена товара"
            className={s.input}
          />
          {error.promotion && <p className={s.error}>{error.promotion}</p>}
          <Input
            onChange={handleInputChangeHandler("promotion")}
            placeholder="Скидка"
            className={s.input}
          />

          <h1>Оптовик</h1>

          {error.wholesale_price && (
            <p className={s.error}>{error.wholesale_price}</p>
          )}
          <Input
            onChange={handleInputChangeHandler("wholesale_price")}
            placeholder="Цена товара для оптовиков"
            className={s.input}
          />
          {error.wholesale_promotion && (
            <p className={s.error}>{error.wholesale_promotion}</p>
          )}
          <Input
            onChange={handleInputChangeHandler("wholesale_promotion")}
            placeholder="Скидка для оптовиков"
            className={s.input}
          />
        </div>

        <div className={s.description}>
          <div>
            <label htmlFor="product-day">Является ли продуктом дня</label>
            <Input
              id="product-day"
              type="checkbox"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  is_product_of_the_day: e.target.checked,
                }))
              }
            />
            <label htmlFor="active-product">Продукт активен</label>
            <Input
              id="active-product"
              type="checkbox"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  is_active: e.target.checked,
                }))
              }
            />

            <div>
              {error.quantity && <p className={s.error}>{error.quantity}</p>}
              <Input
                onChange={handleInputChangeHandler("quantity")}
                placeholder="Количество товара"
                className={s.input}
                type="number"
              />
            </div>
          </div>

          {error.description && <p className={s.error}>{error.description}</p>}
          <textarea
            onChange={handleInputChangeHandler("description")}
            placeholder="Описание товара"
          ></textarea>

          {/* Загрузка изображений */}
          <div className={s.imageUpload}>
            {error.image && <p className={s.error}>{error.image}</p>}
            {["image1", "image2", "image3", "image4", "image5"].map(
              (imageKey, index) => (
                <div key={index}>
                  <label className={s.label}>
                    {`Изображение ${index + 1}`}
                    <Input
                      onChange={handleFileChange(imageKey)}
                      type="file"
                      placeholder="Фото товара"
                      className={s.input}
                      accept="image/*"
                    />
                  </label>
                </div>
              )
            )}
          </div>
        </div>

        <div className={s.characteristick}>
          <h1>Характеристики</h1>
          {error.main_characteristics && (
            <p className={s.error}>{error.main_characteristics}</p>
          )}
          {forms.main_characteristics.map((char, index) => (
            <div key={index} className={s.block}>
              <Input
                onChange={handleInputChangeCharateristickHandler(
                  index,
                  "label"
                )}
                value={char.label}
                placeholder="label"
                className={s.input}
              />
              <Input
                onChange={handleInputChangeCharateristickHandler(
                  index,
                  "value"
                )}
                value={char.value}
                placeholder="value"
                className={s.input}
              />
            </div>
          ))}
          <AppButton
            onClick={addCharacteristic}
            variant="button"
            className={s.btn}
          >
            Добавить характеристику
          </AppButton>
          <AppButton onClick={postSelect} variant="button" className={s.btn}>
            Готово
          </AppButton>
        </div>
      </form>
    </>
  );
};

export default AddProductPage;
