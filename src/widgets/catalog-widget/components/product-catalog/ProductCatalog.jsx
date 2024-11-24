import { useSelector } from "react-redux";
import { ProductList } from "../../../../components/product/ProductList";
import { useGetCatalogProductQuery } from "../../api/CatalogApi";
import { FilterProduct } from "../filter-catalog";
import s from "./ProductCatalog.module.scss";
import clsx from "clsx";
import { useScreenWidth } from "../../../../hooks/useScreenWidth";
import { AppButton } from "../../../../components/ui/Button";
import { useState } from "react";
import { CustomModal } from "../../../../components/ui/Modal/components/CustomModal";

export const ProductCatalog = () => {
  const [isOpenFilter, setOpenFilter] = useState(false);
  const filters = useSelector((state) => state.filters);
  const { data, isLoading } = useGetCatalogProductQuery(filters, {
    refetchOnMountOrArgChange: true,
  });

  const { isMobile } = useScreenWidth();

  const openModalFilter = () => {
    setOpenFilter(true);
  };

  return (
    <div className={clsx(s.container)}>
      {isMobile ? (
        <div className={s.mobileContainer}>
          <AppButton variant='button' onClick={openModalFilter}>
            Фильтр
          </AppButton>
          <CustomModal
            isOpen={isOpenFilter}
            onClose={() => setOpenFilter(false)}
          >
            <div className={s.filterContent}>
              <p className={s.titleModal}>Фильтр</p>
              <FilterProduct />
            </div>
          </CustomModal>

          <ProductList
            loading={isLoading}
            data={data?.results}
            quantitySkeleton={8}
          />
        </div>
      ) : (
        <>
          <FilterProduct />
          <ProductList
            loading={isLoading}
            data={data?.results}
            quantitySkeleton={8}
          />
        </>
      )}
    </div>
  );
};
