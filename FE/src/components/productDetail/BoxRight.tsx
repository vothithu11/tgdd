import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    fa1,
    fa2,
    fa3,
    faArrowDown,
    faChevronDown,
    faLocationDot,
    faPhone,
    faStore,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ButtonCustom from '../button/ButtonCustom';
import PromoItem from './PromoItem';
import { blockPromo, blockPromoAdd } from '@/datas/dataDetailPage';
import Link from 'next/link';
import { FormatPrice } from '@/datas/covertData';
const BoxRight = ({ handleBuyNow, detailData, visible, showMoreItems }) => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="col-span-2 ml-8 space-y-3 max-lg:col-span-5">
            <div>
                Giá tại{' '}
                <span className="text-blue-custom">
                    Hồ Chí Minh <FontAwesomeIcon icon={faChevronDown} className="text-blue-custom" />
                </span>
            </div>
            <div className="space-x-1">
                <span className="text-red-700 font-bold text-lg ">{FormatPrice(detailData.salePrice)} đ</span>
                <span className="line-through text-gray-500 font-base text-sm">
                    {FormatPrice(detailData.originalPrice)}đ
                </span>
                <span className="text-red-700 font-base text-sm">{FormatPrice(detailData.promotionPercent)}%</span>
                <span className="bg-gray-100 font-base text-sm">Trả góp 0%</span>
            </div>
            <img src="/image/flashsale-mini.png" alt="hinh-anh" className="h-28 w-full" />
            <div className="border-2 border-gray-custom">
                <div className="bg-[#F6F6F6] text-base p-2 border-gray-custom border-b-2">
                    <h4 className="">Khuyến mãi</h4>
                    <p className="text-gray-500 text-sm">Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 31/08</p>
                </div>
                <div className="space-y-4 p-1 text-sm text-justify">
                    {blockPromo.map((promo) => (
                        <PromoItem
                            customColor={'bg-[#288AD6]'}
                            style={{ color: '#f9fafa' }}
                            icon={promo.icon}
                            title={promo.title}
                            subtitle={promo.subtitle}
                            key={promo.title}
                        />
                    ))}
                </div>
            </div>
            <div className="space-y-2">
                <div className="inline-flex items-center space-x-1 bg-[#FFFBE5] rounded-full py-1 px-2">
                    <img src="/image/logo-short.png" alt="logo" className="w-6 h-6" />
                    <p>+29.590 điểm tích lũy Quà Tặng VIP</p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: '#74C0FC' }} />
                    <p>
                        <span className="text-blue-custom">Chọn địa chỉ nhận hàng</span> để biết thời gian giao.
                    </p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faStore} style={{ color: '#74C0FC' }} />
                    <span className="text-blue-custom">Xem siêu thị có hàng</span>
                </div>
            </div>
            <div className="space-y-2 my-2 border-t-2 border-gray-custom py-2">
                <h2 className="font-semibold text-md">
                    Ưu đãi thanh toán Online <span className="italic">(Click chọn để áp dụng)</span>{' '}
                </h2>
                <button
                    className={`border-2 border-gray-custom p-2 w-full  ${
                        checked ? 'border-orange-500' : 'border-gray-custom'
                    }`}
                >
                    <div className="flex space-x-1 text-sm checked:text-red-500">
                        <input type="radio" checked={checked} onChange={() => setChecked((checked) => !checked)} />
                        <img src="/image/ocb-bank.png" alt="hinh-anh" className="" />
                        Giảm <strong>500.000₫</strong>
                        <span className="text-gray-500 text-sm flex items-center"> Sản phẩm từ 10 triệu ?</span>
                    </div>
                </button>
                <div className="mt-3">
                    <Link href="/cart">
                        <ButtonCustom
                            color={'bg-[#FB6E2E] border-[#FB6E2E] w-full text-white text-lg'}
                            title={'MUA NGAY'}
                            handleBuyNow={handleBuyNow}
                        />
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-x-2">
                    <ButtonCustom
                        color={'bg-[#2F80ED] border-[#2F80ED] w-full text-white text-lg'}
                        title={'MUA TRẢ GÓP 0%'}
                    />
                    <ButtonCustom
                        color={'bg-[#2F80ED] border-[#2F80ED] w-full text-white text-lg'}
                        title={'TRẢ GÓP 0% QUA THẺ'}
                    />
                </div>
                <div className="center-x space-x-1">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>
                        Gọi đặt mua<span className="text-blue-custom"> 1900 232 460</span> (8:00 - 21:30)
                    </p>
                </div>
            </div>
            <div className="border-2 border-gray-custom">
                <div className="bg-[#F6F6F6] text-base p-2 border-gray-custom border-b-2 flex items-center space-x-2">
                    <span className="">8 ưu đãi thêm</span>
                    <span className="text-gray-500 text-sm">Dự kiến áp dụng đến 23:59 | 31/08</span>
                </div>
                <div className="space-y-4 p-1 text-sm text-justify">
                    {blockPromoAdd.slice(0, visible).map((promo) => (
                        <PromoItem
                            customColor={'bg-[#33AC41]'}
                            style={{ color: '#fcfcfc' }}
                            icon={promo.icon}
                            title={promo.title}
                            subtitle={promo.subtitle}
                        />
                    ))}
                </div>
                {visible < blockPromoAdd.length && (
                    <div className="center-x space-x-1">
                        <button className="text-blue-custom" onClick={showMoreItems}>
                            Xem thêm 6 ưu đãi khác
                        </button>
                        <FontAwesomeIcon icon={faChevronDown} style={{ color: '#74C0FC' }} />
                    </div>
                )}
            </div>
            <div className="space-y-4 max-lg:hidden">
                <h2 className="text-xl font-bold text-black flex justify-center">Cấu hình {detailData.title}</h2>
                <div className=" space-y-4 px-2 [&>*:nth-child(odd)]:bg-[#F1F1F1] [&>*:nth-child(odd)]:p-2  [&>*:nth-child(even)]:bg-white  [&>*:nth-child(even)]:p-2 ">
                    <p className="grid grid-cols-10">
                        <span className="col-span-4">Màn hình:</span>
                        <span className="col-span-6">{detailData.screen}</span>
                    </p>
                    <p className="grid grid-cols-10">
                        <span className="col-span-4">Camera:</span>
                        <span className="col-span-6">{detailData.camera} MP</span>
                    </p>
                    <p className="grid grid-cols-10">
                        <span className="col-span-4">Ram:</span>
                        <span className="col-span-6">{detailData.ram} GB</span>
                    </p>
                    <p className="grid grid-cols-10">
                        <span className="col-span-4">Dung lượng lưu trữ:</span>
                        <span className="col-span-6">{detailData.storage} GB</span>
                    </p>
                    <p className="grid grid-cols-10">
                        <span className="col-span-4">Pin, Sạc:</span>
                        <span className="col-span-6">
                            {detailData.battery} {detailData.category == 'laptop' ? 'tiếng' : 'mAh'},
                            {detailData.charger} W
                        </span>
                    </p>
                    <p className="grid grid-cols-10">
                        <span className="col-span-4">Hãng:</span>
                        <span className="col-span-6">{detailData.brand}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BoxRight;