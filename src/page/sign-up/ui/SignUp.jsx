import { Input } from "../../../components/ui/Input";
import { useState } from "react";
import { FilterSelect } from "../../../components/ui/FilterSelect";
import { AppButton } from "../../../components/ui/Button";
import { Paper } from "../../../components/ui/Paper";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../constants/path";
import { Space } from "../../../components/ui/Space/Space";
import { useSignUp } from "../../../hooks/useSignUp";
import { ModalSuccessSignUp } from "../../../components/ModalSuccessSignUp";
import { LoaderScreen } from "../../../components/ui/loader-screen/ui/LoaderScreen";
import s from "./SignUp.module.scss";

export const SignUp = () => {
  const { authResponse, setForm, onSubmit, form, showModal } = useSignUp();
  const [password, setPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const passwordHandler = () => {
    setPassword((prev) => !prev);
  };

  const validateForm = (formData) => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Введите ваше имя";
    if (!formData.username) newErrors.username = "Введите имя пользователя";
    if (!formData.email) {
      newErrors.email = "Введите email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }
    if (!formData.number) {
      newErrors.number = "Введите номер телефона";
    } else if (!/^\d{10,15}$/.test(formData.number)) {
      newErrors.number = "Некорректный номер телефона";
    }
    if (!formData.password) {
      newErrors.password = "Введите пароль";
    } else if (formData.password.length < 6) {
      newErrors.password = "Пароль должен быть не менее 6 символов";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formObject = Object.fromEntries(formData.entries());

    if (validateForm(formObject)) {
      onSubmit();
    }
  };

  const inputChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (authResponse.isLoading) {
    return (
      <div className={s.loadingContainer}>
        <LoaderScreen />;
      </div>
    );
  }

  return (
    <>
      <ModalSuccessSignUp isOpen={authResponse.isSuccess && !form.wholesaler} />
      <div className={s.titleBlock}>
        <h3>Зарегистрироваться</h3>
        <Space h={8} />
        <p>
          У вас уже есть учетная запись? <Link to={ROUTE.signIn}>Войти</Link>
        </p>
      </div>
      <Space h={30} />
      <form onSubmit={handleSubmit} className={s.form}>
        <Paper className={s.paper}>
          <Input
            name='name'
            placeholder='Ваше Имя*'
            onChange={inputChangeHandler}
          />
          {errors.name && <span className={s.error}>{errors.name}</span>}

          <Input
            name='username'
            placeholder='Имя пользователя*'
            onChange={inputChangeHandler}
          />
          {errors.username && (
            <span className={s.error}>{errors.username}</span>
          )}

          <Input
            name='email'
            placeholder='Ваш Email*'
            type='email'
            onChange={inputChangeHandler}
          />
          {errors.email && <span className={s.error}>{errors.email}</span>}

          <Input
            name='number'
            onChange={inputChangeHandler}
            placeholder='Ваш номер*'
            type='number'
          />
          {errors.number && <span className={s.error}>{errors.number}</span>}

          <Input
            name='password'
            type='password'
            rightOnClick={passwordHandler}
            onChange={inputChangeHandler}
            placeholder='Ваш пароль*'
          />
          {errors.password && (
            <span className={s.error}>{errors.password}</span>
          )}

          <div className={s.smallForm}>
            <FilterSelect
              className={s.select}
              defaultValue='Выберите пол'
              onChange={(value) =>
                setForm((prev) => ({ ...prev, gender: value }))
              }
              options={[
                { value: "1", label: "Мужской" },
                { value: "2", label: "Женский" },
              ]}
            />
            <Input
              name='age'
              onChange={inputChangeHandler}
              type='number'
              placeholder='Возраст'
            />
            <div className={s.checkboxContainer}>
              <Input
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
