import s from "./AddNewsPage.module.scss";
import { Input } from "../../../../components/ui/Input/Input";
import { AppButton } from "../../../../components/ui/Button";
import { useUpdateNewsApiMutation } from "./api/updateNew";
import { useState } from "react";

const AddNewsPage = () => {
  const [img, setImg] = useState(null);
  const [update] = useUpdateNewsApiMutation();

  const updateBannerHandler = async (e) => {
    e.preventDefault();
    await update(img).unwrap();
  };

  return (
    <form className={s.addNews}>
      <Input
        onChange={(e) => {
          const files = e.target.files;

          if (files && files[0]) {
            const file = files[0];
            setImg(file);
          }
        }}
        type='file'
        placeholder='Фото товара'
        className={s.input}
      />
      <AppButton onClick={updateBannerHandler} variant='button'>
        Добавить
      </AppButton>
    </form>
  );
};

export default AddNewsPage;
