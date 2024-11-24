import {
  HomeFilterProduct,
  // HomeProductDay,
  HomeList,
  // HomePromotion,
} from "../../../widgets/home-widget";
import { useGetHomeProductQuery } from "../api";
import s from "./HomePage.module.scss";

export const HomePage = () => {
  const { data, isLoading } = useGetHomeProductQuery();

  return (
    <>
      <div className={s.bannerContainer}>
        <HomeFilterProduct />
        {/* <HomePromotion img={data?.homepage.banner.image} /> */}
        {/* <HomeProductDay
          loading={isLoading}
          data={data?.homepage.product_of_the_day}
        /> */}
      </div>
      <HomeList loading={isLoading} title='Новинки' data={data?.homepage.new} />
      <HomeList
        loading={isLoading}
        title='Популярные'
        data={data?.homepage.popular}
      />
      <HomeList
        loading={isLoading}
        title='Акции'
        data={data?.homepage.promotion}
      />
    </>
  );
};
