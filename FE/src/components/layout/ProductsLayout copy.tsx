import Header from '../header/Header';
import Footer from '../footer/Footer';
import BannerSlider from '../BannerSlider';
import CategoriesLayout from './CategoriesLayout';
import LoadMore from '../LoadMore';
import { images } from '@/datas/data';

const ProductsLayout = ({ filterData, children, onSelectFeature, resetFilters }) => {
    return (
        <main className="relative">
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
                <CategoriesLayout filterData={filterData} onSelect={onSelectFeature} resetFilters={resetFilters} />
            </section>
            <section className="padding">{children}</section>
            <section className="padding">{/* <LoadMore onSelect={onSelectFeature} /> */}</section>
            <section className="bg-slate-50 border-t-2 mt-11">
                <Footer />
            </section>
        </main>
    );
};

export default ProductsLayout;
