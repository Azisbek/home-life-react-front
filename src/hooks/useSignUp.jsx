import { useState } from "react";
import { useAuthMutation } from "../page/sign-up/api";

export const useSignUp = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
    gender: "",
    age: null,
    wholesaler: false,
  });

  const [errorText, setErrorText] = useState("");
  const [auth, authResponse] = useAuthMutation();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth(form).unwrap();
    } catch (err) {
      const errorMessage = err.data?.message || "Произошла ошибка";
      setErrorText(errorMessage);
    }
  };

  return { form, setForm, errorText, onSubmit, authResponse };
};
