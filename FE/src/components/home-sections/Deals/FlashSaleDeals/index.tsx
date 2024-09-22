import DealsLayout from '@/components/layout/deals-layout';
import flash_sale_deals from '../../assets/flashsaledeals.png'

const FlashSaleDeals = ({ dataFlashSaleRandom }) => {
    return (
        <DealsLayout
            image={flash_sale_deals.src}
            btn={true}
            dealsList={dataFlashSaleRandom.slice(0,10)}
            background={'bg-[#D91D03]'}
            extraClassContainer={'none'}
            moreInfoBtn={true}
            title={'Xem thêm sản phẩm'}
            url="/phone"
        />
    );
};

export default FlashSaleDeals;
