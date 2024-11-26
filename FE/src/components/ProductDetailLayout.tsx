import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleRight,
    faBoxArchive,
    faCirclePlus,
    faCircleQuestion,
    faPhone,
    faRulerCombined,
    faStar,
    faStore,
    faThumbsUp,
    faTruckMoving,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import ImagesProduct from '@/components/ImagesProduct'
import BannerSliderProducts from '@/components/BannerSliderProducts';
import StarReview from '@/components/StarReview';
import CartButton from '@/components/CartButton';
import SelectedPlace from '@/components/SelectedPlace';
import AddressModal from '@/components/AddressModal';
import Info from './info/Info';
import { IProduct } from './type';
import { formatPrice } from './formatPrice';
interface IProductDetailLayoutProps {
    dataProduct: IProduct,
    dataMore: IProduct[],
    label:string,
}

function ProductDetailLayout({dataProduct,dataMore,label}:IProductDetailLayoutProps) {
    const {title,brand, image, salePrice,rate} = dataProduct;
  return (
    <div className="bg-[#f9fafb]">
    <div className="w-[1200px] mx-auto pt-[25px] pb-[11px] flex flex-col gap-5 ">
        <div className="flex items-center gap-[14px] ">
            <span className="text-[#98a2b3]">{label}</span>
            <FontAwesomeIcon icon={faAngleRight} className="w-3 h-3 font-thin text-[#98a2b3]" />
            <span className='capitalize'>{label} {brand}</span>
        </div>
        <div className="flex justify-between">
            <div className="flex gap-[14px] ">
                <span className="pr-2.5 flex gap-0.5 items-center text-xl font-bold capitalize">
                    {title}
                </span>
                <span className="pr-2.5 flex gap-0.5 items-center text-[#98a2b3]"> Đã bán 34,1k</span>
                <span className="pr-2.5 flex gap-0.5 items-center">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 w-3 h-3" />
                    <span className="text-[#98a2b3]">{rate} (47)</span>
                </span>
                <span className="pr-2.5  items-center text-blue-custom flex gap-0.5">
                    <FontAwesomeIcon icon={faRulerCombined} className=" w-3 h-3" />
                    Thông số
                </span>
                <span className="pr-2.5 flex gap-0.5 items-center text-blue-custom">
                    <FontAwesomeIcon icon={faCirclePlus} className=" w-3 h-3" />
                    So sánh
                </span>
            </div>
            <div className="flex gap-1 text-xs font-semibold">
                <button className="bg-[#1877f2] flex items-center gap-1 py-0 px-2 rounded text-white">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span>Thích</span>
                    <span>1k</span>
                </button>
                <button className="bg-[#1877f2] flex items-center gap-1 py-0 px-2 rounded text-white">
                    <span>Chia sẻ</span>
                </button>
            </div>
        </div>
        <div className="flex gap-5 w-full">
            {/* left */}
            <div className="w-[720px]">
                <ImagesProduct image={image}/>
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
                    <Info product={dataProduct}/>
                </div>
                <div className="bg-[#fff] rounded-xl mt-5 ">
                   <StarReview/>
                </div>
            </div>
            {/* right */}
            <div className="w-[460px]">
                <div className="bg-[#fff] rounded-xl p-4 flex flex-col gap-4">
                    {/* <div className="flex gap-1.5 ">
                        {['256GB', '512GB', '1TB'].map((item, index) => (
                            <button
                                key={index}
                                className="border border-[#eaecf0] rounded-lg py-3 px-4 focus:bg-[#f1f8fe] text-center focus:border-[#bbddfd] focus:text-[#2a83e9]"
                            >
                                {item}
                            </button>
                        ))}
                    </div> */}
                    <div className="flex gap-1.5 ">
                        {image.map((item, index) => (
                            <button
                                key={index}
                                className="border border-[#eaecf0] rounded-[32px] py-1.5 px-3 focus:bg-[#f1f8fe] text-center focus:border-[#bbddfd] focus:text-[#2a83e9]"
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                    <p className="flex gap-1 items-center">
                        Giá tại <span className="text-blue-custom"><SelectedPlace full={false}/></span>
                        <AddressModal> <FontAwesomeIcon icon={faAngleDown} className="text-blue-custom" /> </AddressModal>
                    </p>
                    <div className="flex gap-2 items-center">
                        <span className="flex gap-1 items-center text-[#d92d20] font-bold text-xl">
                        {formatPrice(salePrice)} <sup>đ</sup>
                        </span>
                        <span className="bg-[#f2f4f7] text-[10px] rounded-2xl p-0.5">Trả góp 0%</span>
                    </div>
                    <div className="border rounded-lg p-4">
                        <div className="flex flex-col gap-0.5 pb-2">
                            <p>Khuyến mãi</p>
                            <p className="text-gray-500 text-sm">Dự kiến áp dụng đến 23:59 | 31/08</p>
                        </div>

                        <hr />
                        <div className="flex gap-2 items-center pt-2">
                            <span className="bg-[#44a1fa] w-4 h-4 rounded-full p-1.5 text-[#ffff] flex items-center">
                                <span className="text-[10px]">1</span>
                            </span>
                            <span className="">
                                Thu cũ Đổi mới: Giảm thêm đến 2,000,000 (Không kèm ưu đãi thanh toán qua cổng,
                                mua kèm)<span className="text-blue-custom"> Xem chi tiết </span>
                            </span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="bg-[#44a1fa] w-4 h-4 rounded-full p-1.5 text-[#ffff] flex items-center">
                                <span className="text-[10px]">2</span>
                            </span>
                            <span className="">
                                Nhập mã VNPAYTGDD5 giảm từ 50,000đ đến 200,000đ (áp dụng tùy giá trị đơn hàng)
                                khi thanh toán qua VNPAY-QR.
                                <span className="text-blue-custom"> (Xem chi tiết tại đây)</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-bold">Ưu đãi thanh toán Online</span>
                        <span className="text-[#98a2b3]">(Click chọn để áp dụng)</span>
                    </div>
                    <button className="flex items-start justify-between border p-4 rounded-lg focus:border-[#2f80ed] focus:bg-[#F1F8FE]">
                        <div className="flex items-start justify-start gap-2.5">
                            <input type="radio" className="" />
                            <Image
                                src="/bank.png"
                                alt="bank"
                                width={46}
                                height={32}
                                quality={100}
                                className="object-cover"
                            />
                            <p className="flex flex-col items-start -mt-1">
                                <span>Giảm 500.000₫</span>
                                <span>Sản phẩm từ 10 triệu</span>
                            </p>
                        </div>
                        <FontAwesomeIcon icon={faCircleQuestion} className="w-4 h-4 text-gray-500" />
                    </button>
                    <hr />
                    <h3 className="font-semibold">Thông tin vận chuyển</h3>
                    <p>
                        <span className="font-bold">Giao đến:</span> <SelectedPlace/>
                        <AddressModal> Thay đổi</AddressModal>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faTruckMoving} className="text-gray-500" />{' '}
                        <span className="font-semibold">Giao tiết kiệm</span>
                    </p>
                    <p>
                        Giao từ 8h - 10h, ngày mai (10/11): <span className="text-[#039855]">Miễn phí</span>
                    </p>
                    <hr />
                    <p className="space-x-1">
                        <span className="font-bold">+34.990</span> điểm tích lũy Quà Tặng VIP{' '}
                        <FontAwesomeIcon icon={faCircleQuestion} className="w-4 h-4 text-gray-500" />
                    </p>
                        <CartButton dataProduct={dataProduct}/>
                    <p className="flex gap-1">
                        <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-gray-500" />
                        <p className="">
                            Gọi đặt mua<span className="text-blue-custom"> 1900 232 460</span> (8:00 - 21:30)
                        </p>
                    </p>
                    <p className="flex gap-1">
                        <FontAwesomeIcon icon={faStore} className="w-4 h-4 text-gray-500" />
                        <p className="text-blue-custom">Xem siêu thị có hàng</p>
                    </p>
                </div>
            </div>
        </div>
        {/* bottom */}
        <div className="p-5 bg-[#ffff] rounded-xl mb-[30px] ">
            <p className="flex justify-between mb-4">
                <span className="font-bold leading-[21px]">Sản phẩm thường mua cùng</span>
                <span className="text-blue-custom">Xem tất cả</span>
            </p>
            <div className="flex gap-2.5">
                <BannerSliderProducts data={dataMore} row={1} />
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductDetailLayout