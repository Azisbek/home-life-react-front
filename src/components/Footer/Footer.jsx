import clsx from "clsx";

// import whatsapp from "../../../assets/whatsapp.png";
// import telegram from "../../../assets/telegram.png";

import s from "./Footer.module.scss";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { Link } from "react-router-dom";
import { ROUTE } from "../../constants/path";
import { useSelector } from "react-redux";

export const Footer = () => {
  const { isMobile } = useScreenWidth();
  const role = useSelector((state) => state.signIn.user.role);
  console.log(role);

  return (
    <footer className={clsx("container", s.footer)}>
      <h3>Наши контакты</h3>
      <div className={s.adressContainer}>
        <div className={clsx(isMobile ? s.mobileNumberBlock : s.numberBlock)}>
          <div className={s.box}>
            {/* <img className={s.icon} src={whatsapp} alt='whatsapp' /> */}
            <div className={s.number}>
              <span>0500-74-34-40</span>
              <span>0220-39-22-97</span>
            </div>
          </div>
          <div className={s.box}>
            {/* <img className={s.icon} src={telegram} alt='telegram' /> */}
            <div className={s.number}>
              <span>0507-42-03-11</span>
            </div>
          </div>
        </div>
        <span>homelife.0305@gmail.com</span>
      </div>

      {role === "admin" && <Link to={ROUTE.admin}>ADMIN</Link>}
    </footer>
  );
};
