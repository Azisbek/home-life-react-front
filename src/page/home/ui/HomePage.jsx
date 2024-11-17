import { HomeList } from "../../../widgets/home-widget/components/HomeList/HomeList";
import { useGetHomeProductQuery } from "../api";

export const HomePage = () => {
  const { data, isLoading } = useGetHomeProductQuery();

  return (
    <>
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
