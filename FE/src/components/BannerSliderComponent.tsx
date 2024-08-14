'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './product-card';

const BannerSliderComponent = ({dataPromo, visibleNumber,moreInfoBtn}) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={visibleNumber}
      navigation
      pagination={{ clickable: true }}
    >
        {dataPromo.map((deal=><SwiperSlide><ProductCard product={deal} key={deal._id} moreInfoBtn={moreInfoBtn} /></SwiperSlide>))}
       
    </Swiper>
  );
};

export default BannerSliderComponent;
