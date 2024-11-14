import { HomeList } from "../../../widgets/home-widget/components/HomeList/HomeList";
import { useGetHomeProductQuery } from "../api";

export const HomePage = () => {
  const { data } = useGetHomeProductQuery();

  return (
    <>
      <HomeList title='Новинки' data={data?.homepage.new} />
      <HomeList title='Популярные' data={data?.homepage.popular} />
      <HomeList title='Акции' data={data?.homepage.promotion} />
    </>
  );
};
