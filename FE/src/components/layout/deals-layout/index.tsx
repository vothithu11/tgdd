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
        <div className={`my-14 ${background} w-full rounded-xl max-lg:mt-8`}>
            <img width={1354} height={500} src={image} alt="hinh-anh-highlights" />

            {/* <div className="p-5">
               
                <div className="grid grid-cols-5 max-lg:grid-cols-2">
                    {dealsList.map((deal) => (
                        <ProductCard product={deal} key={deal.id}  />
                    ))}
                </div>
                {btn && <Button />}
            </div> */}
            {/* <BannerSliderComponent
                dataPromo={dealsList}
                numVisible={numVisible}
                bgImage={bgImage}
                moreInfoBtn={moreInfoBtn}
            /> */}
            {/* <div className="grid grid-cols-5 max-lg:grid-cols-2">
                {dealsList.map((deal) => (
                    
                ))}
            </div> */}
            <BannerSliderComponent dataPromo={dealsList}  moreInfoBtn={moreInfoBtn} visibleNumber={5}/>
            {btn && (
                <div className="flex justify-center">
                    <Link href={url}>
                        <button className="bg-white p-2 rounded-lg h-12 w-80 mb-4">
                            {title} {'>'}
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default DealsLayout;
