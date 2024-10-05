import { AppNavigateHeader } from "./components/navigation/AppNavigateHeader";
import logo from "../../../assets/Logo.png";
import clsx from "clsx";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={clsx("container", s.containerHeader)}>
      <div>
        <img src={logo} alt='logo' className={s.logo} />
      </div>

      <AppNavigateHeader />

      {/* <AppProfileHeader onOpen={onOpen} /> */}
    </header>
  );
};
