'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BannerSlider = ({images, visibleNumber}) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={visibleNumber}
      navigation
      pagination={{ clickable: true }}
    >
        {images.map(((image,index)=><SwiperSlide key={index}><img src={image.src} alt='image' className='rounded-md w-full' width={595} height={180}/></SwiperSlide>))}
       
    </Swiper>
  );
};

export default BannerSlider;

