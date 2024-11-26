'use client';

import { useEffect, useState } from 'react';
import BannerSliderProducts from './BannerSliderProducts';
import { tabHome } from './data.mocks';
import Image from 'next/image';
import Link from 'next/link';

function TabHome() {
    const [selectedTab, setSelectedTab] = useState('macbook');
    const [selectedList, setSelectedList] = useState([]);
    
    useEffect(() => {
        const fetchDataTab = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts?keyword=${selectedTab}`, {
                cache: 'no-store',
            });
            const data = await res.json();
            setSelectedList(data);
        };
        fetchDataTab();
    }, [selectedTab]);
    return (
        <div className="w-full bg-white rounded-2xl px-5">
            <div className="h-[61px] w-full flex gap-[17px] text-center items-center justify-between">
                {tabHome.map((tab, index) => (
                    <button
                        className={`min-w-[127px] h-full py-2.5 px-4 hover:bg-yellow-100 hover:border-b-2 hover:border-orange-400 active:bg-yellow-100 active:border-b-2 active:border-orange-400 ${
                            selectedTab === tab.value ? 'bg-yellow-100 border-b-2 border-orange-400' : ''
                        } `}
                        key={index}
                        onClick={() => setSelectedTab(tab.value)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <Image
                src="/banner-promotions.png"
                alt="banner"
                width={1160}
                height={46}
                quality={100}
                className="rounded-lg py-4 object-cover cursor-pointer"
            />
           
                <BannerSliderProducts data={selectedList} key={selectedTab} />
           
            <Link href='/laptop'>   
            <p className="text-[#288ad6] font-bold text-center pt-5 pb-[30px]"> Xem thêm {'>'}</p>
            </Link>
        </div>
    );
}

export default TabHome;
