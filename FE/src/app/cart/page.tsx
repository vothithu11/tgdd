'use client';
import { useSelector } from 'react-redux';
import ProductCounter from '@/components/counter/ProductCounter';
import FormCart from '@/components/cart/FormCart';
import FormatPrice from '@/components/FormatPrice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPercent } from '@fortawesome/free-solid-svg-icons';
import ButtonCustom from '@/components/button/ButtonCustom';

const CartPage = () => {
    const { value, products } = useSelector((state) => state.counter);
    const totalCost = products.reduce((acc, product) => {
        return acc + product.salePrice * product.quantity;
    }, 0);

    return (
        <main className="bg-[#F0F0F0] pb-4 max-lg:mt-20">
            <div className="mx-[457px] max-lg:mx-2">
                <div className="flex justify-between py-2">
                    <span className="text-blue-custom">{'<'} Mua thêm sản phẩm khác</span>
                    <span>Giỏ hàng của bạn</span>
                </div>
                <div className="shadow-xl bg-white">
                    <div className="border-b-2 px-7 pt-8 pb-3.5">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <div>
                                    <div key={product._id} className="center mb-2">
                                        <img src={product.main_image} alt={product.title} width="100px" className="" />
                                        <div className="space-y-2">
                                            <h2>{product.title}</h2>
                                            <p className="">
                                                <FormatPrice price={product.salePrice} /> <span>đ</span>
                                            </p>
                                        </div>
                                        <ProductCounter product={product} />
                                    </div>
                                    <p className="flex justify-between">
                                        Tạm tính:
                                        <span className="text-red-600 font-base ml-4 max-lg:text:base  max-lg:font-bold">
                                            <FormatPrice price={totalCost} />đ
                                        </span>
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="flex justify-center ">Không có sản phẩm nào trong giỏ hàng</p>
                        )}
                    </div>
                    <FormCart />
                    <div className="border-t-2 px-7 pt-3.5 space-y-5">
                        <button className="border-2 rounded-md p-2">
                            <FontAwesomeIcon icon={faPercent} /> Sử dụng mã giảm giá{' '}
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        <p className="flex justify-between border-b-2">
                            <span>Tổng tiền:</span>
                            <span className="text-red-600 font-base ml-4 max-lg:text:base max-lg:font-bold">
                                <FormatPrice price={totalCost} />đ
                            </span>
                        </p>
                        <p className="flex justify-between">
                            <span>Điểm tích lũy quà tặng VIP:</span>
                            <span className=" font-base ml-4 max-lg:text:base max-lg:font-bold">
                                <FormatPrice price={totalCost / 1000} /> điểm
                            </span>
                        </p>
                        <div className="flex justify-start space-x-4">
                            <label className="flex items-center space-x-1">
                                <input type="checkbox" />
                                <span>
                                    {' '}
                                    Tôi đồng ý với{' '}
                                    <span className="text-blue-custom">Chính sách xử lý dữ liệu cá nhân</span> của Thế
                                    Giới Di Động
                                </span>
                            </label>
                        </div>
                        <ButtonCustom color={'bg-[#F7862B] w-full'} title={'ĐẶT HÀNG'} />
                        <span className="text-gray-400 flex justify-center pb-8">
                            Bạn có thể chọn hình thức thanh toán sau khi đặt hàng
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CartPage;
