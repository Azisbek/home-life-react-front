import { Space } from "../../../../components/ui/Space/Space";
import { BlockDescription } from "../../../../components/BlockDescription";
import s from "./Description.module.scss";
import { useScreenWidth } from "../../../../hooks/useScreenWidth";

export const Description = ({ data }) => {
  const { isMobile } = useScreenWidth();

  return (
    <div>
      <h1 className={s.title}>О товаре</h1>
      <Space h={isMobile ? 10 : 70} />
      <div className={s.container}>
        <BlockDescription title='good' description={data?.description} />
      </div>
    </div>
  );
};
