'use client';
import { SwiperClass, Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ProductCard from './product-card';
import { IProduct } from './type';
import { useRef } from 'react';
const SlidePrevBtn = () => {
    
    return (
        <button
         
            className="bg-[#f9fafbb9] w-11 h-11 rounded-full text-gray shadow-lg shadow-[#66666673]"
        >
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    );
};
const SlideNextBtn = () => {
    
    return (
        <button
         
            className="bg-[#f9fafbb9] w-11 h-11 rounded-full text-gray shadow-lg shadow-[#66666673]"
        >
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );
};
export default function BannerSliderProducts({
    data,
    slidesPerView = 6,
    row = 2,
    extraPromotionStyles
}: {
    data: IProduct[];
    slidesPerView?: number;
    row?: number;
    extraPromotionStyles?:boolean,
}) {
    const swiperRef = useRef<SwiperClass | null>();;
    return (
        <div className='relative px-5'>
            <Swiper
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
                slidesPerView={2}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      1024: {
                        slidesPerView: slidesPerView,
                        spaceBetween: 10,
                      },
                }}
                grid={{
                    fill: 'row',
                    rows: row,
                }}
                spaceBetween={10}
                modules={[Grid]}
                className=""
            >
                {data?.map((item) => (
                    <SwiperSlide className="" key={item._id}>
                        <ProductCard product={item} extraPromotionStyles={extraPromotionStyles} extraClassStyles={`${!extraPromotionStyles?'w-[155px] h-[155px]':'w-[155px] h-[172px]'} max-sm:w-[130px]`}/>
                    </SwiperSlide>
                ))}
            </Swiper>
                <div className="absolute top-1/2 -translate-y-1/2 left-1 z-10" onClick={() => swiperRef.current?.slidePrev()}>
                    <SlidePrevBtn />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-1 z-10 "onClick={() => swiperRef.current?.slideNext()}>
                    <SlideNextBtn />
                </div>
            </div>
    );
}
