import { faAngleDown, faCircleQuestion, faPhone, faStore, faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CartButton from './CartButton'
import AddressModal from './AddressModal'
import SelectedPlace from './SelectedPlace'
import Image from 'next/image'
import { formatSalePrice } from './constants/formatSalePrice'
import { IProduct } from './constants/type'

function ProductDetailRight({dataProduct}:{dataProduct:IProduct}) {
    const { image, salePrice } = dataProduct;
  return (
        <div className="bg-[#fff] rounded-xl p-4 flex flex-col gap-4 w-full">
                    <div className="flex gap-1.5 ">
                        {image.map((item, index) => (
                            <button
                                key={index}
                                className="border border-[#eaecf0] rounded-[32px] py-1.5 px-3 max-sm:rounded-md max-sm:p-1 focus:bg-[#f1f8fe] text-center focus:border-[#bbddfd] focus:text-[#2a83e9]"
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-1 items-center">
                        Giá tại <span className="text-blue-custom"><SelectedPlace full={false}/></span>
                        <AddressModal> <FontAwesomeIcon icon={faAngleDown} className="text-blue-custom" /> </AddressModal>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="flex gap-1 items-center text-[#d92d20] font-bold text-xl">
                        {formatSalePrice(salePrice)} <sup>đ</sup>
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
                        <div className="flex gap-2 items-center mt-2.5">
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
  )
}

export default ProductDetailRight