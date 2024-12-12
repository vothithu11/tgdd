'use client';
import { createOrder } from '@/api';
import AddressModal from '@/components/AddressModal';
import { formatSalePrice } from '@/components/formatSalePrice';
import ProductCounter from '@/components/slice/ProductCounter';
import { RootState } from '@/components/type';
import { faChevronDown, faChevronLeft, faPercent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const CartPage = () => {
    const { value, products } = useSelector((state: RootState) => state.counter);
    const place = useSelector((state: RootState) => state.placeName.place);

    const totalCost = products.reduce((acc, product) => {
        const quantity = product.quantity || 1;
        return acc + product.salePrice * quantity;
    }, 0);
    const {register,handleSubmit, reset, formState: { errors, isSubmitted } ,}=useForm();
    const onSubmit =(data: FieldValues)=>{
        if ( place?.trim() === ''){return (toast.error('Vui lòng chọn địa chỉ giao hàng'))};
       const orders =({...data, products: products.map((product) => ({ id:product._id, quantity:product.quantity })),address:place})
       createOrder(orders);
       toast.success('Tạo đơn hàng thành công!');
       reset();
      
    }
    return (
        <main className="bg-[#f2f4f7] pb-5 max-md:px-2.5">
            {products.length === 0 && (
                <div className="w-[600px] mx-auto py-16 text-[#98a2b3] max-md:w-full">
                    <Image
                        src="/empty-cart.png"
                        alt="img"
                        width={432}
                        height={270}
                        quality={100}
                        className="object-cover mx-auto"
                    />
                    <div className="w-full flex flex-col gap-4 justify-center items-center mt-5">
                        <p className="text-[#344054] font-bold text-xl">Giỏ hàng trống</p>
                        <p>Không có sản phẩm nào trong giỏ hàng</p>
                        <Link href="/">
                            <button className="w-[464px] bg-[#2a83e9ed] h-10 text-[#fff] py-2.5 mx-auto font-bold rounded-lg">
                                Về trang chủ
                            </button>
                        </Link>
                        <p>
                            Khi cần trợ giúp vui lòng gọi <span className="text-blue-custom">1900 232 460</span> hoặc{' '}
                            <span className="text-blue-custom">028.3622.1060</span> (8h00 - 21h30)
                        </p>
                    </div>
                </div>
            )}
            {products.length > 0 && (
                <div className="max-w-[600px] mx-auto">
                    <div className="flex items-center py-3 w-full h-12">
                        <div className="flex-1 flex justify-start">
                            <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
                        </div>
                        <span className="flex-1 font-bold leading-6">Giỏ hàng</span>
                    </div>
                    <div className=" bg-white w-full mx-auto text-[#344054]">
                        <div className="border-b-2 px-7 pt-8 pb-3.5 flex flex-col gap-0.5">
                            {products.length > 0 &&
                                products.map((product) => (
                                    <div key={product._id} className="flex flex-col">
                                        <div className="flex justify-between items-center gap-4">
                                            <Image
                                                src={product.main_image}
                                                alt={product.title}
                                                width={80}
                                                height={80}
                                                className="object-cover"
                                            />
                                            <div className="flex justify-between flex-1">
                                                <h2 className="text-[#101828]">{product.title}</h2>
                                                <p className="">
                                                   {formatSalePrice(product.salePrice)}<span> đ</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <ProductCounter product={product} />
                                        </div>
                                    </div>
                                ))}
                            <p className="flex justify-between pt-3">
                                Tạm tính:
                                <span className="text-red-600 font-base ml-4 max-lg:text:base  max-lg:font-bold">
                                {formatSalePrice(totalCost)} đ
                                </span>
                            </p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-5 px-7 py-3.5">
                            <p className="uppercase">Thông tin khách hàng</p>
                            <div className="flex justify-start space-x-4">
                                <label className="flex items-center space-x-1">
                                    <input type="radio" name="gender" />
                                    <span>Anh</span>
                                </label>
                                <label className="flex items-center space-x-1">
                                    <input type="radio" name="gender" />
                                    <span>Chị</span>
                                </label>
                            </div>
                            <div className="flex justify-start gap-2.5 max-sm:flex-col">
                                <input
                                {...register('name',  {required: true})}
                                    type="text"
                                    placeholder="Họ và tên"
                                    className="border-2 border-gray-custom hover:border-orange-300 focus:border-orange-300 p-2 rounded-md"
                                />
                                 {isSubmitted && errors.name && <p className='flex items-center text-red-500 text-xs'>Thông tin bắt buộc</p>}
                                <input
                                  {...register('phoneNumber',  {required: true})}
                                    type="text"
                                    placeholder="Số điện thoại"
                                    className="border-2 border-gray-custom hover:border-orange-300 focus:border-orange-300 p-2 rounded-md"
                                />
                                {isSubmitted && errors.phoneNumber && <p className=' flex items-center text-red-500 text-xs'>Thông tin bắt buộc</p>}
                            </div>
                            <p className=" uppercase">Chọn cách thức nhận hàng</p>
                            <div className="flex justify-start space-x-4">
                                <label className="flex items-center space-x-1">
                                    <input type="radio" />
                                    <span>Giao tận nơi</span>
                                </label>
                                <label className="flex items-center space-x-1">
                                    <input type="radio" />
                                    <span> Nhận tại siêu thị</span>
                                </label>
                            </div>
                            <div className='flex gap-1 items-center'>
                                Địa chỉ giao hàng: {place}
                                <AddressModal>{place?.trim() !== '' ? 'Thay đổi':<button className='border py-0.5 px-2.5 text-white bg-[#f7862b] rounded-full '>Chọn</button> }</AddressModal>
                            </div>
                            <input
                                type="text"
                                placeholder="Yêu cầu khác (không bắt buộc)"
                                className="border-2 rounded-md w-full p-2 border-gray-custom hover:border-orange-300 focus:border-orange-300"
                            />
                            <div className="space-y-3.5">
                                <label className="flex items-center space-x-1">
                                    <input type="checkbox" />
                                    <span> Gọi người khác nhận hàng (nếu có)</span>
                                </label>
                                <label className="flex items-center space-x-1">
                                    <input type="checkbox" />
                                    <span> Chuyển danh bạ, dữ liệu qua máy mới</span>
                                </label>
                                <label className="flex items-center space-x-1">
                                    <input type="checkbox" />
                                    <span> Xuất hóa đơn công ty</span>
                                </label>
                            </div>
                        </div>
                        <div className="border-t-2 px-7 pt-3.5 space-y-5">
                            <button className="border-2 rounded-md p-2">
                                <FontAwesomeIcon icon={faPercent} /> Sử dụng mã giảm giá
                                <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                            <p className="flex justify-between border-b-2">
                                <span>Tổng tiền:</span>
                                <span className="text-red-600 font-base ml-4 max-lg:text:base max-lg:font-bold">
                                {formatSalePrice(totalCost)} đ
                                </span>
                            </p>
                            <p className="flex justify-between">
                                <span>Điểm tích lũy quà tặng VIP:</span>
                                <span className=" font-base ml-4 max-lg:text:base max-lg:font-bold">
                                {formatSalePrice(totalCost/1000 )} điểm
                                </span>
                            </p>
                            <div className="flex justify-start space-x-4">
                                <label className="flex items-center space-x-1">
                                    <input type="checkbox" defaultChecked disabled />
                                    <span>
                                        Tôi đồng ý với
                                        <span className="text-blue-custom"> Chính sách xử lý dữ liệu cá nhân</span> của
                                        Thế Giới Di Động
                                    </span>
                                </label>
                            </div>
                            <button  type='submit' className="w-full bg-[#F7862B] h-10 text-[#fff] py-1 rounded-lg">ĐẶT HÀNG</button>
                            <span className="text-gray-400 flex justify-center pb-8">
                                Bạn có thể chọn hình thức thanh toán sau khi đặt hàng
                            </span>
                        </div>
                        </form>
                        <Toaster  position="top-center"/>
                    </div> 
                </div>
            )}
        </main>
    );
};
export default CartPage;
