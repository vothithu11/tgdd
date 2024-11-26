'use client';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { useSelector } from 'react-redux';
import { RootState } from './type';

function CartHeader() {
    const qty = useSelector((state:RootState)=>state.counter.value);
    return (
        <Link href='/cart'>
        <button className="w-[110px] h-full rounded-[32px] text-center flex gap-0.5 items-center justify-center leading-[42px] hover:bg-[#fe9]">
            <span className="relative flex flex-col items-center">
                <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6" />
                {qty>0 && <span className="w-4 h-4 bg-red-500 rounded-lg text-white absolute -top-2 right-0 z-10 text-xs">{qty}</span>}
            </span>
            <span>Giỏ hàng</span>
        </button>
        </Link>
    );
}

export default CartHeader;
