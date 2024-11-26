'use client';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ProductCard from './product-card';
import { IProduct } from './type';
const SlidePrevBtn = () => {
    const swiper = useSwiper();
    return (
        <button
            onClick={() => swiper.slidePrev()}
            className="bg-[#f9fafbb9] w-11 h-11 rounded-full text-gray shadow-lg shadow-[#66666673]"
        >
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    );
};
const SlideNextBtn = () => {
    const swiper = useSwiper();
    return (
        <button
            onClick={() => swiper.slideNext()}
            className="bg-[#f9fafbb9] w-11 h-11 rounded-full text-gray shadow-lg shadow-[#66666673]"
        >
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );
};
export default function BannerSliderProducts({
    data,
    slidesPerView = 5,
    row = 2,
}: {
    data: IProduct[];
    slidesPerView?: number;
    row?: number;
}) {
    return (
        <>
            <Swiper
                slidesPerView={slidesPerView}
                grid={{
                    fill: 'row',
                    rows: row,
                }}
                spaceBetween={10}
                modules={[Grid]}
                className="h-max"
            >
                {data?.map((item) => (
                    <SwiperSlide className="relative z-1" key={item._id}>
                        <ProductCard product={item} />
                    </SwiperSlide>
                ))}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
                    <SlidePrevBtn />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
                    <SlideNextBtn />
                </div>
            </Swiper>
        </>
    );
}
