import clsx from "clsx";

// import whatsapp from "../../../assets/whatsapp.png";
// import telegram from "../../../assets/telegram.png";

import s from "./Footer.module.scss";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { Link } from "react-router-dom";
import { ROUTE } from "../../constants/path";

export const Footer = () => {
  const { isMobile } = useScreenWidth();
  return (
    <footer className={clsx("container", s.footer)}>
      <h3>Наши контакты</h3>
      <div className={s.adressContainer}>
        <div className={clsx(isMobile ? s.mobileNumberBlock : s.numberBlock)}>
          <div className={s.box}>
            {/* <img className={s.icon} src={whatsapp} alt='whatsapp' /> */}
            <div className={s.number}>
              <span>0500743440</span>
              <span>0770161681</span>
            </div>
          </div>
          <div className={s.box}>
            {/* <img className={s.icon} src={telegram} alt='telegram' /> */}
            <div className={s.number}>
              <span>0771743440</span>
            </div>
          </div>
        </div>
        <span>Abdivaliev.2017@gmail.com</span>
      </div>
      <Link to={ROUTE.admin}>ADMIN</Link>
    </footer>
  );
};
