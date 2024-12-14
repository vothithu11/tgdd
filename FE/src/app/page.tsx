import { fetchPhoneProducts } from '@/api';
import Image from 'next/image';
import Link from 'next/link';
import BannerSlider from '@/components/BannerSlider';
import TabHome from '../components/TabHome';
import { popularSearch, promotions } from '@/components/constants/data.mocks';
import NewsFeed from '@/components/NewsFeed';
import ProductCard from '@/components/product-card';
import { IProduct } from '@/components/constants/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

async function Home() {
    const dataPhone = await fetchPhoneProducts();
    return (
        <main className="bg-[#f2f4f7]">
            <div className="max-w-[1200px] mx-auto pt-5 pb-9 max-lg:mx-2.5">
                <div className='mb-5'>
                <Link href='/phone'>
                <Image
                    src="/big-banner.png"
                    alt="bigBanner"
                    width={1200}
                    height={240}
                    quality={100} 
                    className="object-cover rounded-lg cursor-pointer max-lg:w-full h-auto"
                />
                </Link>
                </div>
                {/* section */}
                <div className="w-full">
                    <h1 className="text-2xl font-bold mt-10 mb-5 ">Khuyến mãi Online</h1>
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
                    <h1 className="text-2xl font-bold leading-[18px]">Gợi ý cho bạn</h1>
                    <div className="grid grid-cols-6 gap-2.5 my-5 max-lg:grid-cols-3 max-md:grid-cols-2">
                        {dataPhone.slice(0,12).map((product:IProduct)=><div key={product._id} className='w-full'><ProductCard product={product}  extraClassStyles='h-[155px] w-[155px] max-sm:w-[130px]'/></div>)}
                    </div>
                    <Link href='/phone'>
                    <p className="text-[#288ad6] font-bold text-center mb-2.5 pt-[5px]"> Xem thêm sản phẩm {'>'}</p>
                    </Link>
                </div>
                {/* section */}
                <div className="w-full">
                    <h1 className="text-2xl font-bold mt-5 mb-[15px]">Tuần lễ Thương hiệu Laptop Dell</h1>
                   <Link href='/laptop'>
                    <Image
                        src="/banner-week.png"
                        alt="banner-week"
                        width={1200}
                        height={380}
                        quality={100}
                        className="rounded-lg cursor-pointer max-md:hidden"
                    />
                    <div className='w-full h-screen relative hidden max-md:flex'>
                    <Image
                        src="/banner-week-tablet.png"
                        alt="banner-week"
                        fill
                        sizes='100vh'
                        quality={100}
                        className="rounded-lg cursor-pointer"
                    />
                    </div>
                     
                </Link>
                </div>
                {/* section */}
                <div className="w-full">
                    <h1 className="text-2xl font-bold my-5">Gian hàng ưu đãi</h1>
                    <div className="w-full flex gap-4 justify-between max-md:grid max-md:grid-cols-2 max-md:justify-around">
                        {promotions.map((promotion,i) => (
                            <Link href='/laptop' key={i}>
                                <Image
                                src={promotion.img}
                                alt="banner-deals"
                                width={288}
                                height={467}
                                quality={100}
                                className="rounded-lg cursor-pointer"
                            />
                            </Link>
                        ))}
                    </div>
                </div>
                {/* section */}
                <div className="w-full bg-white rounded-2xl p-5 mt-[29px] mb-5">
                    <h1 className="text-2xl font-bold ">Bài tin</h1>
                    <NewsFeed/>
                    <Link href='/news/0'>
                    <p className="text-[#288ad6] h-[30px] leading-[18px] cursor-pointer flex gap-2 items-center justify-center ml-5 mt-2.5"><strong>Xem thêm bài tin</strong> <FontAwesomeIcon icon={faAngleRight} className="w-[10px] h-[10px]" /></p>
                    </Link>
                </div>
                {/* section */}
                <div className="w-full  rounded-2xl p-5 mt-5 bg-white">
                    <h1 className="text-2xl font-bold leading-[18px]">Mọi người cũng tìm kiếm</h1>
                    <div className="mt-3 flex flex-wrap items-center justify-start max-md:h-[120px] max-md:overflow-y-scroll">
                        {popularSearch.map((item, index) => (
                                <span key={index} className="mt-2.5 mr-2 py-0.5 px-2 bg-[#f2f4f7] w-max rounded-lg leading-[18px]">{item}</span>   
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
