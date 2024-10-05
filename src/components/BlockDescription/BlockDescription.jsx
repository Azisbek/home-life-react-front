import s from "./BlockDescription.module.scss";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { Space } from "../ui/Space/Space";

export const BlockDescription = ({ title, description }) => {
  const { isMobile } = useScreenWidth();

  return (
    <div className={s.containDescription}>
      <h3 className={s.title}>{title}</h3>
      <Space h={isMobile ? 10 : 22} />
      <p className={s.description}>{description}</p>
    </div>
  );
};
