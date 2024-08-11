import DealsLayout from '@/components/layout/DealsLayout';

const PromotionDeals = ({ dataLaptopRandom }) => {
    return (
        <DealsLayout
            image={'/image/promotiondeals.png'}
            btn={true}
            dealsList={dataLaptopRandom}
            background={'bg-[#920101]'}
            bgImage={'bg-dynamic'}
            moreInfo={true}
            numVisible={10}
            title={'Xem thêm sản phẩm'}
            url="/laptop"
        ></DealsLayout>
    );
};

export default PromotionDeals;
