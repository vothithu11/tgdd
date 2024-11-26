import { fetchLaptopProducts, fetchPhoneProducts } from '@/api';
import Image from 'next/image';
import Link from 'next/link';
import BannerSlider from '@/components/BannerSlider';
import BannerSliderProducts from '@/components/BannerSliderProducts';
import TabHome from '../components/TabHome';
import { popularSearch } from '@/components/data.mocks';
import NewsFeed from '@/components/NewsFeed';

async function Home() {
    const dataPhone = await fetchPhoneProducts({});

    return (
        <main className="bg-[#f2f4f7]">
            <div className="max-w-[1200px] mx-auto pt-5 pb-2.5">
                <Link href='/phone'>
                <Image
                    src="/big-banner.png"
                    alt="bigBanner"
                    width={1200}
                    height={300}
                    quality={100}
                    className="rounded-lg cursor-pointer"
                />
                </Link>
                {/* section */}
                <div className="w-full">
                    <h1 className="text-2xl font-bold my-5">Khuyến mãi Online</h1>
                    <TabHome/>
                </div>
                {/* section */}
                <div className="flex justify-between my-5">
                    <BannerSlider
                        images={['/banner1.png', '/banner2.png', '/banner3.png', '/banner4.png']}
                        visibleNumber={2}
                    />
                </div>
                {/* section */}
                <div className="w-full bg-white rounded-2xl p-5 my-5">
                    <h1 className="text-2xl font-bold">Gợi ý cho bạn</h1>
                    <div className="flex flex-wrap gap-2.5 justify-between my-5">
                        <BannerSliderProducts data={dataPhone} />
                    </div>
                    <Link href='/phone'>
                    <p className="text-[#288ad6] font-bold text-center"> Xem thêm {'>'}</p>
                    </Link>
                </div>

                {/* section */}
                <div className="w-full">
                    <h1 className="text-2xl font-bold my-5">Tuần lễ Thương hiệu Laptop Dell</h1>
                   <Link href='/laptop'>
                    <Image
                        src="/banner-week.png"
                        alt="banner-week"
                        width={1200}
                        height={380}
                        quality={100}
                        className="rounded-lg cursor-pointer"
                    />
                </Link>
                </div>
                {/* section */}
                <div className="w-full">
                    <h1 className="text-2xl font-bold my-5">Gian hàng ưu đãi</h1>
                    <div className="flex gap-4 justify-between">
                        {Array.from({ length: 4 }, (_, index) => (
                            <Link href='/laptop'>
                            <Image
                                src="/banner-deals.png"
                                alt="banner-deals"
                                width={288}
                                height={467}
                                quality={100}
                                className="rounded-lg cursor-pointer"
                                key={index}
                            />
                            </Link>
                        ))}
                    </div>
                </div>
                {/* section */}
                <div className="w-full bg-white rounded-2xl p-5 my-5">
                    <h1 className="text-2xl font-bold ">Bài tin</h1>
                    <NewsFeed/>
                    <Link href='/news/detail'>
                    <p className="text-[#288ad6] font-bold text-center cursor-pointer"> Xem thêm bài tin {'>'}</p>
                    </Link>
                </div>
                {/* section */}
                <div className="w-full bg-white rounded-2xl p-5 my-5">
                    <h1 className="text-2xl font-bold">Mọi người cũng tìm kiếm</h1>
                    <div className="my-5 flex flex-wrap gap-2.5 items-center justify-start">
                        {popularSearch.map((item, index) => (
                            <span key={index} className='flex gap-2.5'>
                                <span className="py-0.5 px-2 bg-[#f2f4f7] w-max rounded-lg">{item}</span>
                                <span className="py-0.5 px-2 bg-[#f2f4f7] w-max rounded-lg">{item}</span>
                            </span>
                        ))}
                    </div>
                 
                   
                </div>
            </div>
        </main>
    );
}

export default Home;
