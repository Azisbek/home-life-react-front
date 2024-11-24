import { Outlet } from "react-router-dom";
import { Header, MobileHeader } from "../../components/Header";
import { AnimatedWrapper } from "../../components/ui/animated-wrapper/AnimatedWrapper";
import "../../styles/global.scss";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { Space } from "../../components/ui/Space/Space";
import { Footer } from "../../components/Footer/Footer";

export const Layout = () => {
  const { isMobile } = useScreenWidth();
  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      <Space h={30} />
      <main className='container'>
        <AnimatedWrapper>
          <Outlet />
        </AnimatedWrapper>
      </main>
      <Space h={isMobile ? 50 : 90} />
      <Footer />
    </>
  );
};
