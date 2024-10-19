import s from "./SignUp.module.scss";
import { Input } from "../../../components/ui/Input";
import { useState } from "react";
import { FilterSelect } from "../../../components/ui/FilterSelect";
import { AppButton } from "../../../components/ui/Button";
import { Paper } from "../../../components/ui/Paper";
import { Link } from "react-router-dom";
import { ROUTE } from "../../../constants/path";
import { Space } from "../../../components/ui/Space/Space";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    gender: "",
    age: null,
  });
  const [password, setPassword] = useState(false);

  const passwordHandler = () => {
    setPassword((prev) => !prev);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const selectChange = (filterKey) => (value) => {
    setFormData((prev) => ({ ...prev, [filterKey]: value }));
  };

  const formChangeHandler = (e) => {
    e.preventDefault();
    console.log(formData);
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
      <form onSubmit={formChangeHandler} className={s.form}>
        <Paper className={s.paper}>
          <Input
            name="name"
            placeholder="Ваше Имя*"
            onChange={inputChangeHandler}
          />
          <Input
            name="email"
            placeholder="Ваш Email*"
            type="email"
            onChange={inputChangeHandler}
          />
          <Input
            name="number"
            value={formData.number}
            onChange={inputChangeHandler}
            placeholder="Ваш номер*"
            type="number"
          />
          <Input
            name="password"
            type={password ? "password" : "text"}
            rightOnClick={passwordHandler}
            onChange={inputChangeHandler}
            placeholder="Ваш пароль*"
          />
          <div className={s.smallForm}>
            <FilterSelect
              className={s.select}
              defaultValue="Выберите пол"
              value={formData.gender || ""} 
              onChange={selectChange("gender")}
              options={[
                { value: "1", label: "Мужской" },
                { value: "2", label: "Женский" },
              ]}
            />
            <Input
              name="age"
              value={formData.age} 
              onChange={inputChangeHandler}
              type="number"
              placeholder="Возраст"
            />
          </div>
          <AppButton className={s.btnSignUp} variant="button">
            Зарегистрироваться
          </AppButton>
        </Paper>
      </form>
    </>
  );
};
