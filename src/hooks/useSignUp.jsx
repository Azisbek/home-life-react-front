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
  const [showModal, setShowModal] = useState(() => {
    return JSON.parse(localStorage.getItem("showModal")) || false;
  });
  const [auth, authResponse] = useAuthMutation();

  const updateShowModal = (value) => {
    setShowModal(value);
    localStorage.setItem("showModal", JSON.stringify(value));
  };

  const onSubmit = async () => {
    console.log(form);

    try {
      const response = await auth(form).unwrap();
      if (response) {
        updateShowModal(true);
      }
    } catch (err) {
      const errorMessage = err.data?.message || "Произошла ошибка";
      setErrorText(errorMessage);
    }
  };

  return {
    form,
    setForm,
    errorText,
    onSubmit,
    authResponse,
    showModal,
    setShowModal: updateShowModal,
  };
};
