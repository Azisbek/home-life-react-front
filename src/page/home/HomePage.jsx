import { useLocation } from "react-router-dom";
import s from "./HomePage.module.scss";

export const HomePage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <p className={s.text}>Hello world</p>
    </>
  );
};

