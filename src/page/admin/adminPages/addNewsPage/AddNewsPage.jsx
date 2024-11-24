import React from "react";
import s from "./AddNewsPage.module.scss";
import { Input } from "../../../../components/ui/Input/Input";
import { AppButton } from "../../../../components/ui/Button";

const AddNewsPage = () => {
  return (
    <form className={s.addNews}>
      <Input placeholder="Заголовок" className={s.input} />
      <textarea placeholder="Описание"></textarea>
      <Input type="file" placeholder="Фото товара" className={s.input} />
      <AppButton variant="button" type="submit" className={s.btn}>
          Готово
        </AppButton>
    </form>
  );
};

export default AddNewsPage;
