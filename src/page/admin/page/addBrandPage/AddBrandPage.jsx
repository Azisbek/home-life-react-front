import { useState } from "react";
import { AppButton } from "../../../../components/ui/Button";
import { Input } from "../../../../components/ui/Input";
import { Space } from "../../../../components/ui/Space/Space";
import {
  useGetFilterBrandsQuery,
  usePostFilterBrandsMutation,
} from "../../../../widgets/catalog-widget/api/FilterValueCatalogApi";
import s from "./AddBrandPage.module.scss";

export const AddBrandPage = () => {
  const [label, setLabel] = useState("");
  const [postBrands] = usePostFilterBrandsMutation();
  const [errorText, setErrorText] = useState("");
  const { data, refetch } = useGetFilterBrandsQuery();

  const postBrandHandler = async () => {
    if (!label.trim()) {
      setErrorText("Заполните поле");
      return;
    }

    try {
      await postBrands({ label }).unwrap();
      refetch();
      setLabel("");
      setErrorText("");
    } catch (error) {
      setErrorText(error?.data?.message || "Ошибка при добавлении бренда");
    }
  };

  return (
    <div>
      <div>
        <Input
          type='text'
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        {errorText && <p className={s.errorText}>{errorText}</p>}
        <Space h={20} />
        <AppButton
          className={s.btn}
          onClick={postBrandHandler}
          variant='button'
        >
          Добавить бренд
        </AppButton>
      </div>

      {/* <h2>Бренды</h2> */}

      <div className={s.brandList}>
        {data?.map((el) => (
          <div className={s.brand} key={el.value}>
            {el.label}
          </div>
        ))}
      </div>
    </div>
  );
};
