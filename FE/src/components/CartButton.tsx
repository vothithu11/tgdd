'use client';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from './constants/type';
import { increment } from './slice/counterSlice';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

function CartButton({ dataProduct }: { dataProduct: IProduct }) {
    const dispatch = useDispatch();
    const handleAddCart = () => {
        dispatch(increment(dataProduct));
        toast.success('Thêm sản phẩm vào giỏ hàng thành công!');
    };
    const handleBuyNow = () => {
        dispatch(increment(dataProduct));
        toast.success('Thêm sản phẩm vào giỏ hàng thành công!');
    };

    return (
        <div className="flex justify-between gap-2 flex-wrap w-full">
            <button
                className="text-blue-custom rounded-lg p-2 text-[15px] flex items-center flex-col border w-[49%] h-[50px] max-md:w-[47%]"
                onClick={handleAddCart}
            >
                <FontAwesomeIcon icon={faCartShopping} className="w-4 h-4 text-blue-custom" />
                Thêm vào giỏ
            </button>
            <Link href="/cart" className="text-white rounded-lg p-2 text-[15px] flex items-center justify-center border w-[49%] h-[50px] max-md:w-[47%] bg-[#fc7600] border-[#fc7600]">
                <button
                    
                    onClick={handleBuyNow}
                > 
                    Mua ngay
                </button>
                </Link>
            <button className="text-white rounded-lg p-2 text-[15px] flex items-center flex-col border w-[49%] h-[50px] max-md:w-[47%] bg-[#2f80ed]">
                <span className="text-[13px]">Mua trả góp 0%</span>
                <span className="text-[#bbddfd] text-[12px]">Duyệt hồ sơ trong 5 phút</span>
            </button>
            <button className="text-white rounded-lg p-2 text-[15px] flex items-center flex-col border w-[49%] h-[50px] max-md:w-[47%] max-sm:overflow-hidden bg-[#2f80ed]">
                <span className="text-[13px]">Trả góp 0% qua thẻ</span>
                <span className="text-[#bbddfd] text-[12px] ">Visa, MasterCard, JCB, Amex</span>
            </button>
            <Toaster position="top-center" />
        </div>
    );
}

export default CartButton;
