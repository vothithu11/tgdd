'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './product-card';

const BannerSliderComponent = ({ dataPromo, visibleNumber, moreInfoBtn }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={visibleNumber}
            navigation
            pagination={{ clickable: true }}
            className="gridCol"
            breakpoints={{
                320: { slidesPerView: 1 },
                480: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: {slidesPerView: 5},
              }}
        >
             
            {dataPromo.map((deal,index) => (
                <SwiperSlide className="bg-slate-50 max-w-[230px] rounded-md" key={index}>
                    <ProductCard product={deal} key={deal._id} moreInfoBtn={moreInfoBtn} extraClassContainer={''}/>
                </SwiperSlide>
            ))}
           
            
        </Swiper>
    );
};

export default BannerSliderComponent;
