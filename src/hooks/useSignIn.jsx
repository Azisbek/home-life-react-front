import { useState } from "react";
import { useLoginMutation } from "../page/sign-in/api";

export const useSignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errorText, setErrorText] = useState("");
  const [login, loginResponse] = useLoginMutation();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(form).unwrap();
    } catch (err) {
      const errorMessage =
        err.data?.message || "Неправильный логин или пароль.";
      setErrorText(errorMessage);
    }
  };

  return { form, setForm, errorText, onSubmit, loginResponse };
};
