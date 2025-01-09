import s from "./AddNewsPage.module.scss";
import { Input } from "../../../../components/ui/Input/Input";
import { AppButton } from "../../../../components/ui/Button";

const AddNewsPage = () => {
  return (
    <form className={s.addNews}>
      <Input type='file' placeholder='Фото товара' className={s.input} />
      <AppButton variant="button">Добавить</AppButton>
    </form>
  );
};

export default AddNewsPage;
