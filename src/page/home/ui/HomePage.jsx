import { Space } from "../../../components/ui/Space/Space";
import {
  HomeFilterProduct,
  HomeProductDay,
  HomeList,
  HomePromotion,
} from "../../../widgets/home-widget";
import { useGetHomeProductQuery } from "../api";
import s from "./HomePage.module.scss";

export const HomePage = () => {
  const { data, isLoading } = useGetHomeProductQuery();

  return (
    <>
      <div className={s.bannerContainer}>
        <HomeFilterProduct loading={isLoading} />
        <HomePromotion
          loading={isLoading}
          img={data?.homepage?.banner?.image}
        />

        <HomeProductDay
          loading={isLoading}
          data={data?.homepage.product_of_the_day}
        />
      </div>

      <Space h={80} />

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

      <section className={s.descriptionContainer}>
        <h2>Интернет-магазин бытовой техники в Бишкеке</h2>
        <Space h={30} />
        <p>
          Добро пожаловать в <strong>HomeLife</strong> – ваш надежный
          интернет-магазин бытовой техники в Кыргызстане! Мы предлагаем широкий
          ассортимент товаров: холодильники, стиральные машины, пылесосы,
          газовые и электрические плиты, телевизоры и многое другое.
        </p>

        <h3>Почему выбирают нас?</h3>
        <ul className={s.list}>
          <li>
            <strong>Бесплатная доставка</strong> по Бишкеку
          </li>
          <li>
            <strong>Рассрочка и кредит</strong> на выгодных условиях
          </li>
          <li>
            <strong>Официальная гарантия</strong> на всю продукцию
          </li>
          <li>
            <strong>Широкий ассортимент</strong> товаров для дома
          </li>
        </ul>

        <h3>Часто задаваемые вопросы</h3>
        <details>
          <summary>Как оформить покупку в рассрочку?</summary>
          <p>
            Вы можете оформить <strong>рассрочку</strong> прямо в магазине
            <strong>HomeLife</strong>. Доступны разные варианты:
          </p>
          <ul>
            <li> Оплата через банки-партнеры</li>
            <li> Внутренняя программа рассрочки</li>
            <li> Минимальный пакет документов</li>
            <li> Одобрение заявки в течение нескольких минут</li>
          </ul>
        </details>

        <details>
          <summary>Какие бренды представлены в магазине?</summary>
          <p>
            У нас можно купить продукцию таких брендов, как Samsung, LG, Bosch,
            Philips, Xiaomi, Sony и многих других.
          </p>
        </details>
      </section>
    </>
  );
};
