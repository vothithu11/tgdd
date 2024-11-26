'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
interface IBannerSliderProps{
    images: string[],
    visibleNumber: Number,
}
const SlidePrevBtn = () => {
    const swiper = useSwiper();
    return (
        <button
            onClick={() => swiper.slidePrev()}
            className="bg-[#f9fafbb9] w-11 h-11 rounded-full text-gray opacity-90 shadow-lg"
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
            className="bg-[#f9fafbb9] w-11 h-11 rounded-full text-gray opacity-90 shadow-lg"
        >
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );
};

const BannerSlider = ({ images, visibleNumber }:IBannerSliderProps) => {
    return (
        <Swiper spaceBetween={8} slidesPerView={2} className="w-full h-full relative">
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={image}
                        alt="image"
                        className="rounded-lg w-full h-full object-contain"
                        width={595}
                        height={180}
                    />
                </SwiperSlide>
            ))}

            <div className="absolute top-1/2 -translate-y-1/2 left-[5px] z-10">
                <SlidePrevBtn />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-[5px] z-10">
                <SlideNextBtn />
            </div>
        </Swiper>
    );
};

export default BannerSlider;
