'use client';

import { useEffect, useState } from 'react';
import BannerSliderProducts from './BannerSliderProducts';
import { tabHome } from './data.mocks';
import Image from 'next/image';
import Link from 'next/link';
import Timer from './Timer';

function TabHome() {
    const [selectedTab, setSelectedTab] = useState('flashsale');
    const [selectedList, setSelectedList] = useState([]);

    useEffect(() => {
        const fetchDataTab = async () => {
            let url;
            switch (selectedTab) {
                case 'flashsale':
                    url = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/products?promotionPercent[gte]=20`;
                    break;
                case 'priority':
                    url = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/products?rate[gte]=4.5`;
                    break;
                case 'onlineonly':
                    url = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/products?promotionPercent[gte]=15`;
                    break;
                case 'apple':
                    url = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/products?brand=iphone&brand=ipad&brand=macbook`;
                    break;
                default:
                    url = `${process.env.NEXT_PUBLIC_DOMAIN_URL}/products?keyword=${selectedTab}`;
                    break;
            }
            const res = await fetch(url);
            const data = await res.json();
            setSelectedList(data);
        };
        fetchDataTab();
    }, [selectedTab]);
    return (
        <div className="w-full bg-white rounded-2xl max-md:rounded-none">
            <div className="h-[60px] w-full flex gap-2.5 text-center items-center border-b-[0.8px] border-[#eaecf0] max-lg:scoll">
                {tabHome.map((tab, index) => (
                    <div key={index} className="h-full">
                        {tab.image ? (
                            <div
                                onClick={() => setSelectedTab(tab.value)}
                                className={`w-[141px] h-full flex items-center justify-center ${
                                    (selectedTab === tab.value &&  selectedTab === 'flashsale') ? 'rounded-tl-lg bg-[#FFF6E3] border-b-2 border-orange-400 max-md:rounded-none' :  (selectedTab === tab.value &&   selectedTab !== 'flashsale') ? 'bg-[#FFF6E3] border-b-2 border-orange-400':""
                                }`}
                            >
                                <Image
                                    src={`/${tab.value}.png`}
                                    width={100}
                                    height={44}
                                    alt="img"
                                    quality={100}
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <button
                                className={`w-[141px] h-full px-[7px] text-center text-[#344054] ${
                                    (selectedTab === tab.value &&  selectedTab === 'macbook') ? 'rounded-tr-lg bg-[#FFF6E3]border-b-2 border-orange-400 max-md:rounded-none' :  (selectedTab === tab.value &&   selectedTab !== 'macbook') ? 'bg-[#FFF6E3] border-b-2 border-orange-400 ':""
                                }`}
                                onClick={() => setSelectedTab(tab.value)}
                            >
                                {tab.title}
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <div className='h-[50px] w-full my-4 px-5 flex items-center justify-center max-md:my-2'>
            {selectedTab === 'flashsale' ? <Timer/>: <Image
                src={`/banner-${selectedTab}.png`}
                alt="banner"
                width={1160}
                height={46}
                quality={100}
                className="rounded-lg w-full object-cover cursor-pointer max-md:h-[4vh] max-md:object-fill"
            />}
            </div>
           <div className=''>

            <BannerSliderProducts data={selectedList} key={selectedTab}  extraPromotionStyles={selectedTab === 'flashsale'}  />
           </div>

            <Link href="/laptop">
                <p className="text-[#288ad6] font-bold text-center pt-[30px] pb-[25px]"> Xem thêm sản phẩm {'>'}</p>
            </Link>
        </div>
    );
}

export default TabHome;
