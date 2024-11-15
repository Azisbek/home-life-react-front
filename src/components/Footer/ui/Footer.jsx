import clsx from "clsx";
import { Space } from "../../ui/Space/Space";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={clsx(s.footerContainer, "container")}>
      <h1>Наши контакты:</h1>
      <Space h={30} />
      <p>0500743440</p>
      <Space h={10} />
      <p>0770161681</p>
      <Space h={20} />
      <p>0771743440</p>
      <Space h={20} />
      <p>Abdivaliev.2017@gmail.com</p>
    </footer>
  );
};
