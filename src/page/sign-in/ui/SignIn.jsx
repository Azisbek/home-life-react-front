import { Input } from "../../../components/ui/Input";
import { Paper } from "../../../components/ui/Paper";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../constants/path";
import { AppButton } from "../../../components/ui/Button";
import { Space } from "../../../components/ui/Space/Space";
import { useSignIn } from "../../../hooks/useSignIn";
import s from "./SignIn.module.scss";
import { ModalSuccessSignIn } from "../../../components/ModalSuccessSignIn";

export const SignIn = () => {
  const { setForm, onSubmit, errorText, loginResponse } = useSignIn();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <ModalSuccessSignIn isOpen={loginResponse.isSuccess} />
      <div className={s.container}>
        <div className={s.titleBlock}>
          <h3>Войти</h3>
          <Space h={8} />
          <p>
            У вас нет учетной записи? <Link to={ROUTE.signUp}>Создать</Link>
          </p>
        </div>
        <Space h={30} />
        <form onSubmit={onSubmit} className={s.form}>
          <Paper className={s.paper}>
            <Input
              name='email'
              placeholder='Ваш Email*'
              type='email'
              onChange={inputChangeHandler}
            />

            <Input
              name='password'
              type='password'
              placeholder='Ваш пароль*'
              onChange={inputChangeHandler}
            />
            <AppButton className={s.btnSignUp} variant='button'>
              Войти
            </AppButton>
            <p className={s.errorText}>{errorText}</p>
          </Paper>
        </form>
      </div>
    </>
  );
};
