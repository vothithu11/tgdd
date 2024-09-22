import Link from 'next/link';
import ProductCard from '../../product-card';
import BannerSliderComponent from '@/components/BannerSliderComponent';
interface IDealsLayoutProps {
    dealsList: IData;
    image: string;
    btn: boolean;
    background: string;
    extraClassContainer?: string;
    moreInfoBtn: boolean;
    title: string;
    url: string;
}
interface IProductItem {
    category: string;
    _id: string;
    main_image: string;
    title: string;
    isPromotion: boolean;
    originalPrice: number;
    promotionPercent: number;
    salePrice: number;
    rate: number;
    screen: number;
    ram: number;
    battery: number;
}

interface IData extends Array<IProductItem> {}

function DealsLayout(props: IDealsLayoutProps) {
    const { dealsList, image, btn, background, extraClassContainer, moreInfoBtn, title, url } = props;
    return (
        <div className={`${background} w-full rounded-xl max-md:mt-8 max-lg:mt-16`}>
            <img width={1354} height={500} src={image} alt="hinh-anh-highlights" />
            <div className="my-[30px] mx-4 max-lg:pb-6 max-lg:mx-auto max-md:w-[230px] max-lg:w-[700px]">
                    <BannerSliderComponent dataPromo={dealsList} moreInfoBtn={moreInfoBtn} visibleNumber={5} />
                {btn && (
                    <div className="flex justify-center mt-[20px] max-lg:hidden">
                        <Link href={url}>
                            <button className="bg-white p-2 rounded-lg h-12 w-80 mb-4">
                                {title} {'>'}
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DealsLayout;
