import Header from '@/components/header/Header';
import Banner from '@/sections/Banner/Banner';
import CateFuture from '@/sections/CateFuture/CateFuture';
import Promo from '@/sections/Promo';
import Footer from '@/components/footer/Footer';
import FlashSaleDeals from '@/sections/Deals/FlashSaleDeals/FlashSaleDeals';
import PromotionDeals from '@/sections/Deals/PromotionDeals/PromotionDeals';

export default async function Home() {
    const res = await fetch(`${process.env.NEXT_DOMAIN_URL}/posts`, { cache: 'no-store' });
    const dataFlashSale = await res.json();
    const productsFlashSale = dataFlashSale.docs || [];
    const dataFlashSaleRandom = productsFlashSale.slice(0, 30);

    const resLaptop = await fetch(`${process.env.NEXT_DOMAIN_URL}/posts?category=laptop`, { cache: 'no-store' });
    const dataLaptop = await resLaptop.json();
    const productsLaptop = dataLaptop.docs || [];
    const dataLaptopRandom = productsLaptop.slice(0, 30);
    return (
        <main className="relative bg-[#f3efef]">
            <Header />
            <section className="">
                <Banner />
            </section>
            <section className="padding">
                <FlashSaleDeals dataFlashSaleRandom={dataFlashSaleRandom || []} />
            </section>
            <section className="padding">
                <PromotionDeals dataLaptopRandom={dataLaptopRandom || []} />
            </section>
            <section className="padding max-lg:hidden">
                <CateFuture />
            </section>
            <section className="padding">
                <Promo />
            </section>
            <section className="bg-slate-50">
                <Footer />
            </section>
        </main>
    );
}