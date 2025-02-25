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
import { Pagination } from "../../../../components/pagination/Pagination";

export const ProductCatalog = () => {
  const [isOpenFilter, setOpenFilter] = useState(false);
  const filters = useSelector((state) => state.filters);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetCatalogProductQuery(
    { ...filters, page: currentPage, limit: 12 },
    { refetchOnMountOrArgChange: true }
  );

  const { isMobile } = useScreenWidth();

  const openModalFilter = () => setOpenFilter(true);

  return (
    <div className={clsx(s.container)}>
      {isMobile ? (
        <div className={s.mobileContainer}>
          <AppButton variant="button" onClick={openModalFilter}>
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
            quantitySkeleton={12}
          />

          <Pagination
            totalCount={data?.count}
            itemsPerPage={12}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <div className={s.desctopContainer}>
          <div className={s.container}>
            <FilterProduct />

            <ProductList
              loading={isLoading}
              data={data?.results}
              quantitySkeleton={12}
            />
          </div>

          <div className={s.paginationContainer}>
            <Pagination
              totalCount={data?.count}
              itemsPerPage={12}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      )}
    </div>
  );
};
