import { useState } from "react";
import { useScreenWidth } from "../../../hooks/useScreenWidth";
import burger from "../../../assets/Burger.png";
import s from "./MobailHeader.module.scss";
import { AppNavigateHeader } from "../../Header/ui/components/navigation/AppNavigateHeader";

export const MobailHeader = () => {
  const { isMobile } = useScreenWidth();
  const [burgerMenu, setBurgerMenu] = useState(false);

  const toggleMenu = () => {
    setBurgerMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setBurgerMenu(false);
  };

  return (
    <div className={s.contain}>
      {isMobile && (
        <button className={s.burgerMenu} onClick={toggleMenu}>
          <img src={burger} alt="burger" className={s.burgerIcon} />
        </button>
      )}

      {!isMobile && <AppNavigateHeader />}

      {isMobile && burgerMenu && (
        <div className={s.modal} onClick={closeMenu}>
          <div
            className={s.modalContent}
            onClick={(e) => e.stopPropagation()} 
          >
            <AppNavigateHeader />
          </div>
        </div>
      )}
    </div>
  );
};
