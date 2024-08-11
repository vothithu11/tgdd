import DealsLayout from '@/components/layout/DealsLayout';

const FlashSaleDeals = ({ dataFlashSaleRandom }) => {
    return (
        <DealsLayout
            image={'/image/flashsaledeals.png'}
            btn={true}
            dealsList={dataFlashSaleRandom}
            background={'bg-[#D91D03]'}
            bgImage={'none'}
            moreInfo={true}
            numVisible={10}
            title={'Xem thêm sản phẩm'}
            url="/phone"
        ></DealsLayout>
    );
};

export default FlashSaleDeals;
