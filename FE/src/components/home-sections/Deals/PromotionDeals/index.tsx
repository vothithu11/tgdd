import DealsLayout from '@/components/layout/deals-layout';
import promotion_deals from '../../assets/promotiondeals.png';

const PromotionDeals = ({ dataLaptopRandom }) => { 
    return (
        <DealsLayout
            image={promotion_deals.src}
            btn={true}
            dealsList={dataLaptopRandom.slice(0,10)}
            background='bg-[#960500]'
            extraClassContainer='none'
            moreInfoBtn={true}
            title='Xem thêm sản phẩm'
            url="/laptop"
            />
    );
};

export default PromotionDeals;
