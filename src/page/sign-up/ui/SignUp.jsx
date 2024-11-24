import s from "./SignUp.module.scss";
import { Input } from "../../../components/ui/Input";
import { useState } from "react";
import { FilterSelect } from "../../../components/ui/FilterSelect";
import { AppButton } from "../../../components/ui/Button";
import { Paper } from "../../../components/ui/Paper";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../constants/path";
import { Space } from "../../../components/ui/Space/Space";
import { useSignUp } from "../../../hooks/useSignUp";

export const SignUp = () => {
  //TODO add error text and loading
  // eslint-disable-next-line no-unused-vars
  const { authResponse, errorText, setForm, onSubmit } = useSignUp();
  const [password, setPassword] = useState(false);

  const passwordHandler = () => {
    setPassword((prev) => !prev);
  };

  const inputChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const selectChange = (filterKey) => (value) => {
    setForm((prev) => ({ ...prev, [filterKey]: value }));
  };

  return (
    <>
      <div className={s.titleBlock}>
        <h3>Зарегистрироваться</h3>
        <Space h={8} />
        <p>
          У вас уже есть учетная запись? <Link to={ROUTE.signIn}>Войти</Link>
        </p>
      </div>
      <Space h={30} />
      <form onSubmit={onSubmit} className={s.form}>
        <Paper className={s.paper}>
          <Input
            name='name'
            placeholder='Ваше Имя*'
            onChange={inputChangeHandler}
          />
          <Input
            name='username'
            placeholder='Имя пользователя*'
            onChange={inputChangeHandler}
          />
          <Input
            name='email'
            placeholder='Ваш Email*'
            type='email'
            onChange={inputChangeHandler}
          />
          <Input
            name='number'
            onChange={inputChangeHandler}
            placeholder='Ваш номер*'
            type='number'
          />
          <Input
            name='password'
            type={password ? "password" : "text"}
            rightOnClick={passwordHandler}
            onChange={inputChangeHandler}
            placeholder='Ваш пароль*'
          />
          <div className={s.smallForm}>
            <FilterSelect
              className={s.select}
              defaultValue='Выберите пол'
              onChange={selectChange("gender")}
              options={[
                { value: "men", label: "Мужской" },
                { value: "woman", label: "Женский" },
              ]}
            />
            <Input
              name='age'
              onChange={inputChangeHandler}
              type='number'
              placeholder='Возраст'
            />
            <div className={s.checkboxContainer}>
              <input
                type='checkbox'
                name='wholesaler'
                onChange={inputChangeHandler}
              />
              <label className={s.checkboxLabel}>Я оптовый покупатель</label>
            </div>
          </div>
          <AppButton className={s.btnSignUp} variant='button'>
            Зарегистрироваться
          </AppButton>
        </Paper>
      </form>
    </>
  );
};
