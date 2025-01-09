import { useNavigate } from "react-router-dom";
import { AppButton } from "../ui/Button";
import { CustomModal } from "../ui/Modal/components/CustomModal";
import s from "./ModalSuccessSignUp.module.scss";
import { ROUTE } from "../../constants/path";

export function ModalSuccessSignUp({ isOpen }) {
  const navigate = useNavigate();

  const navigateButton = () => {
    navigate(ROUTE.signIn);
  };

  return (
    <CustomModal isOpen={isOpen}>
      <div className={s.container}>
        <div className={s.containerInfo}>
          <h3>Авторизация прошла успешно!</h3>
          Нажмите кнопку Войти, чтобы продолжить.
        </div>
        <AppButton
          onClick={navigateButton}
          className={s.btnSignIn}
          variant='button'
        >
          Войти
        </AppButton>
      </div>
    </CustomModal>
  );
}
