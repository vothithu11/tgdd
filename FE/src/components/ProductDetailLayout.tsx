import BannerSliderProducts from '@/components/BannerSliderProducts';
import ImagesProduct from '@/components/ImagesProduct';
import StarReview from '@/components/StarReview';
import {
    faAngleRight,
    faBoxArchive,
    faCirclePlus,
    faRulerCombined,
    faStar,
    faThumbsUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Info from './info/Info';
import ProductDetailRight from './ProductDetailRight';
import { IProduct } from './type';
interface IProductDetailLayoutProps {
    dataProduct: IProduct;
    dataMore: IProduct[];
    label: string;
}

function ProductDetailLayout({ dataProduct, dataMore, label }: IProductDetailLayoutProps) {
    const { title, brand, image, salePrice, rate } = dataProduct;
    return (
        <div className="bg-[#f9fafb] max-lg:mx-2.5">
            <div className="max-w-[1200px] mx-auto pt-[25px] pb-[11px] flex flex-col gap-5 ">
                <div className="flex items-center gap-[14px] ">
                    <span className="text-[#98a2b3]">{label}</span>
                    <FontAwesomeIcon icon={faAngleRight} className="w-3 h-3 font-thin text-[#98a2b3]" />
                    <span className="capitalize">
                        {label} {brand}
                    </span>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-[14px] ">
                        <span className="pr-2.5 flex gap-0.5 items-center text-xl font-bold capitalize">{title}</span>
                        <span className="pr-2.5 flex gap-0.5 items-center text-[#98a2b3] max-lg:hidden"> Đã bán 34,1k</span>
                        <span className="pr-2.5 flex gap-0.5 items-center max-lg:hidden">
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400 w-3 h-3" />
                            <span className="text-[#98a2b3]">{rate} (47)</span>
                        </span>
                        <span className="pr-2.5  items-center text-blue-custom flex gap-0.5 max-lg:hidden">
                            <FontAwesomeIcon icon={faRulerCombined} className=" w-3 h-3" />
                            Thông số
                        </span>
                        <span className="pr-2.5 flex gap-0.5 items-center text-blue-custom max-lg:hidden">
                            <FontAwesomeIcon icon={faCirclePlus} className=" w-3 h-3" />
                            So sánh
                        </span>
                    </div>
                    <div className="flex gap-1 text-xs font-semibold">
                        <button className="bg-[#1877f2] flex items-center gap-1 py-0 px-2 rounded text-white max-md:hidden">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <span>Thích</span>
                            <span>1k</span>
                        </button>
                        <button className="bg-[#1877f2] flex items-center gap-1 py-0 px-2 rounded text-white max-md:hidden">
                            <span>Chia sẻ</span>
                        </button>
                    </div>
                </div>
                <div className="flex gap-5 w-full">
                    {/* left */}
                    <div className="w-[60%] max-lg:w-full">
                        <ImagesProduct image={image} />
                        <div className="hidden max-lg:flex max-lg:w-full">
                        <ProductDetailRight dataProduct={dataProduct}/>
                        </div>
                        <div className="p-5 bg-[#fff] rounded-xl mt-5 flex flex-col gap-5">
                            <h1 className="font-bold">Thế Giới Di Động cam kết</h1>
                            <div className="flex justify-between gap-5">
                                <div className="flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faBoxArchive} className="text-blue-custom w-8 h-8" />
                                    <span>
                                        Hư gì đổi nấy 12 tháng tại 2966 siêu thị toàn quốc (miễn phí tháng đầu){' '}
                                        <span className="text-blue-custom">Xem chi tiết</span>
                                    </span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FontAwesomeIcon icon={faBoxArchive} className="text-blue-custom w-8 h-8" />
                                    <span>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cáp, Cây lấy sim</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-[#fff] rounded-xl mt-5">
                            <Info product={dataProduct} />
                        </div>
                        <div className="bg-[#fff] rounded-xl mt-5 ">
                            <StarReview />
                        </div>
                    </div>
                    {/* right */}
                    <div className="w-[38.4%] max-lg:hidden">
                        <ProductDetailRight dataProduct={dataProduct}/>
                    </div>
                </div>
                {/* bottom */}
                <div className="p-5 bg-[#ffff] rounded-xl mb-[30px] ">
                    <p className="flex justify-between mb-4">
                        <span className="font-bold leading-[21px]">Sản phẩm thường mua cùng</span>
                        <span className="text-blue-custom">Xem tất cả</span>
                    </p>
                    <div className="-mx-5">
                        <BannerSliderProducts data={dataMore} row={1} slidesPerView={5} />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailLayout;
