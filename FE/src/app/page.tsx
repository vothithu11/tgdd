import Banner from '@/components/home-sections/Banner/Banner';
import CateFuture from '@/components/home-sections/CateFuture/CateFuture';
import Promo from '@/components/home-sections/Promo';
import FlashSaleDeals from '@/components/home-sections/Deals/FlashSaleDeals';
import PromotionDeals from '@/components/home-sections/Deals/PromotionDeals';
import {fetchLaptopProducts, fetchPhoneProducts} from '@/api';

export default async function Home() {
    const dataFlashSaleRandom = await fetchPhoneProducts({});
    const dataLaptopRandom = await fetchLaptopProducts({});
    return (
        <main className="relative bg-[#f3efef]">
            <section className="">
                <Banner />
            </section>
            <section className="padding">
                {dataFlashSaleRandom?.length === 0 ? (
                    <section>no data</section>
                ) : (
                    <FlashSaleDeals dataFlashSaleRandom={dataFlashSaleRandom} />
                )}
            </section>
            <section className="padding">
                <PromotionDeals dataLaptopRandom={dataLaptopRandom} />
            </section>
            <section className="padding max-lg:hidden">
                <CateFuture />
            </section>
            <section className="padding">
                <Promo />
            </section>
        </main>
    );
}
