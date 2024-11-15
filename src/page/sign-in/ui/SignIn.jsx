import s from "./SignIn.module.scss";
import { Input } from "../../../components/ui/Input";
import { Paper } from "../../../components/ui/Paper";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../constants/path";
import { useState } from "react";
import { AppButton } from "../../../components/ui/Button";
import { Space } from "../../../components/ui/Space/Space";
import { useSignIn } from "../../../hooks/useSignIn";
import { useSelector } from "react-redux";

export const SignIn = () => {
  //TODO add error text and loading
  const users = useSelector((state) => state.signIn.user);
  const [password, setPassword] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { setForm, onSubmit, errorText, loginResponse } = useSignIn();

  const passwordHandler = () => {
    setPassword(!password);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={s.container}>
      <>
        <div className={s.titleBlock}>
          <h1>{users.username}</h1>
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
              type={password ? "password" : "text"}
              rightOnClick={passwordHandler}
              placeholder='Ваш пароль*'
              onChange={inputChangeHandler}
            />
            <AppButton className={s.btnSignUp} variant='button'>
              Войти
            </AppButton>
          </Paper>
        </form>
      </>
    </div>
  );
};
