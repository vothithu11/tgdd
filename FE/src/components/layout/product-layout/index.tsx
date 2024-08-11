import { images } from '@/datas/data';
import CategoriesLayout from '../CategoriesLayout';
import BannerSlider from '@/components/BannerSlider';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

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
            <Header />
            <section className="padding mt-4 pb-8 grid grid-cols-6 space-x-2">
                <div className="col-span-4 ">
                    <BannerSlider images={images} numVisible={1} />
                </div>
                <div className="col-span-2 space-y-2">
                    {' '}
                    <img src={images[0]} alt="banner" />
                    <img src={images[1]} alt="banner" />
                </div>
            </section>
            <section className="padding mt-10 max-lg:mt-2">
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
            <Footer />
        </>
    );
};

export default ProductsLayout;
