import { useEffect, useState } from "react";
import { CustomModal } from "../../ui/Modal/components/CustomModal";
import s from "./OtpCode.module.scss";
import { Input } from "../../ui/Input";
import { AppButton } from "../../ui/Button";
import { usePostOtpCodeMutation } from "../api";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../constants/path";
import { ModalSuccessSignUp } from "../../ModalSuccessSignUp";

export const OtpCode = () => {
  const navigate = useNavigate();
  const [postOtp, { isSuccess }] = usePostOtpCodeMutation();
  const [showModal, setShowModal] = useState(() => {
    return JSON.parse(localStorage.getItem("showModal")) || false;
  });
  const [formData, setFormData] = useState({ email: "", otp_code: "" });
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "showModal") {
        setShowModal(event.newValue === "true");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const checkModalState = () => {
      const savedModalState = localStorage.getItem("showModal");
      if (savedModalState === "true") {
        setShowModal(true);
      }
    };

    checkModalState();
    const interval = setInterval(checkModalState, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setShowModal(false);
      localStorage.removeItem("showModal");
      navigate(ROUTE.signIn);
    }
  }, [isSuccess, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.otp_code) {
      setErrorText("Введите логин и код");
      return;
    }

    try {
      await postOtp({
        email: formData.email,
        otp_code: formData.otp_code,
      }).unwrap();
    } catch (e) {
      setErrorText("Неправильный логин или код");
    }
  };

  return (
    <CustomModal contentClass={s.modal} isOpen={showModal}>
      <ModalSuccessSignUp isOpen={isSuccess} />
      <p>
        OTP-код отправлен на email администратора. В течение 3 дней
        администратор свяжется с вами и сообщит код. Введите его вместе с email
        для регистрации как оптовый покупатель.
      </p>

      {errorText && <p style={{ color: "red" }}>{errorText}</p>}

      <div className={s.form}>
        <Input
          type='email'
          name='email'
          placeholder='Введите логин'
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type='number'
          name='otp_code'
          placeholder='Введите код'
          value={formData.otp_code}
          onChange={handleChange}
        />
      </div>
      <AppButton variant='button' className={s.ui} onClick={handleSubmit}>
        Войти
      </AppButton>
    </CustomModal>
  );
};
