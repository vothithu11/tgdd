
import CategoriesLayout from '../categories-layout';
import BannerSlider from '@/components/BannerSlider';
import { images } from '@/components/home-sections/data-mock';

const ProductsLayout = ({
    filterData,
    children,
    onSelectFeature,
    handleSubmit,
    resetFilters,
    clearFilters,
    openPopup,
    showPopup,
}) => {
    return (
        <>
            <section className="padding mt-4 grid grid-cols-6 space-x-2">
                <div className="col-span-4 ">
                    <BannerSlider images={images} visibleNumber={1} />
                </div>
                <div className="col-span-2 space-y-2">
                    {' '}
                    <img src={images[0].src} alt="banner" />
                    <img src={images[1].src} alt="banner" />
                </div>
            </section>
            <section className="padding my-4 max-lg:mt-2 rounded-md">
                <CategoriesLayout
                    filterData={filterData}
                    onSelect={onSelectFeature}
                    handleSubmit={handleSubmit}
                    resetFilters={resetFilters}
                    clearFilters={clearFilters}
                    openPopup={openPopup}
                    showPopup={showPopup}
                />
            </section>
            <main className="padding">{children}</main>
            <section className="padding">{/* <LoadMore onSelect={onSelectFeature} /> */}</section>
        </>
    );
};

export default ProductsLayout;
