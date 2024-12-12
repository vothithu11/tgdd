'use client';
import Link from 'next/link';

import { MotionDiv } from '../MotionDiv';
import React from 'react';
import { IProduct } from '../type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { formatSalePrice } from '../formatSalePrice';
import { useDispatch } from 'react-redux';
import { increment } from '../slice/counterSlice';

// interface IProductCardProps {
//     product: IProductItem;
//     extraClassContainer?: string;
//     moreInfoBtn: boolean;
// }

// interface IProductItem {
//     category: string;
//     _id: string;
//     main_image: string;
//     title: string;
//     isPromotion: boolean;
//     originalPrice: number;
//     promotionPercent: number;
//     salePrice: number;
//     rate: number;
//     screen: number;
//     ram: number;
//     battery: number;
// }

interface IProductCardProps {
    product: IProduct;
    extraPromotionStyles?: boolean;
    extraClassStyles?: string;
}

const ProductCard: React.FC<IProductCardProps> = ({
    product,
    extraPromotionStyles = false,
    extraClassStyles = 'h-[200px] w-[190px] max-sm:w-[140px]',
}) => {
    const { category, _id, main_image, title, originalPrice, promotionPercent, salePrice, rate } = product;
    const numberRandom = Math.floor(Math.random() * 8) + 2;
    const dispatch = useDispatch();
    const handleBuyNow = () => {
        dispatch(increment(product));
    };
    return (
        <Link href={`/${category}/${_id}`}>
            <div className={`${!extraPromotionStyles?'p-2.5': 'px-[5px]'} pb-2.5 rounded-lg border-[#eaecf0] border hover:shadow-lg w-full flex flex-col`}>
                {!extraPromotionStyles && (
                    <span className="text-[11px] w-max bg-[#f1f1f1] p-[3px] rounded-sm">Trả góp 0%</span>
                )}

                <MotionDiv whileHover={{ y: -5 }} whileTap={{ y: 0 }} transition={{ duration: 0.2 }}>
                    <div className={`mx-auto mt-2 mb-2.5 relative ${extraClassStyles}`}>
                        <Image src={main_image} alt="sp" quality={100} fill className="object-contain" />
                    </div>
                </MotionDiv>

                {!extraPromotionStyles && (
                    <div
                        className={`text-[10px] mb-2 h-5 text-white flex items-center gap-0.5 leading-[13px] w-max pr-2 rounded-[20px] ${
                            product.category === 'laptop'
                                ? 'bg-gradient-to-r from-[#F18D0A] to-[#D72F11] p-0.5'
                                : 'bg-gradient-to-r from-[rgb(175,99,207)] to-[rgb(51,39,167)]'
                        }`}
                    >
                        <Image
                            src={product.category === 'laptop' ? '/icon-office.png' : '/icon-money.png'}
                            alt="img"
                            width={20}
                            height={20}
                            className="object-cover"
                        />
                        {product.category === 'laptop' ? 'TẶNG OFFICE' : 'MUA TRẢ CHẬM'}
                    </div>
                )}
                <div className="flex flex-col">
                    <p className="mb-2 h-10 hover:text-blue-custom leading-[19px] capitalize line-clamp-2 overflow-hidden">
                        {title}
                    </p>
                    {!extraPromotionStyles && <span className='mb-2 text-xs font-bold text-[#fd853a]'>
                        Online giá rẻ quá
                        </span>}
                    <div className="h-[47px] mb-[15px] flex flex-col justify-between">
                        <p className="text-[#dd2f2c] text-lg leading-[18px] font-bold">
                            {formatSalePrice(salePrice)} <sup>đ</sup>
                        </p>
                        <div className="flex items-center gap-[7px]">
                            <span className="line-through leading-[17px] text-[#a4a4a4]">
                                {formatSalePrice(originalPrice)}
                                <sup>đ</sup>
                            </span>
                            <span className="text-[#eb5757] leading-[18px] p-[3px]">
                                {promotionPercent}
                                <span>%</span>
                            </span>
                        </div>
                    </div>
                    {!extraPromotionStyles && (
                        <div className="flex justify-between items-center text-xs -mt-[11px] h-[18px]">
                            <span className='flex gap-1 bg-slate-100'>
                                <FontAwesomeIcon icon={faStar} className="w-[14px] h-[14px] -mt-[1px] text-[#FFD400]" />{' '}
                                <span className="text-[#667085] text-xs leading-[13px] justify-items-center">{rate}</span>
                            </span>
                            <span className="cursor-pointer text-blue-custom text-xs">Xem ngay</span>
                        </div>
                    )}
                </div>
                {extraPromotionStyles && (
                    <div className="flex w-full h-[20px] bg-[#DDDD] items-center rounded-[20px] relative mb-2">
                        <div className="absolute bottom-0 z-10">
                            <Image src="/icon-fire.png" alt="img" width={20} height={23} className="object-cover " />
                        </div>
                        <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#ffe49a] to-[#ffb304] rounded-l-[20px] "
                            style={{ width: `${numberRandom}0%` }}
                        />
                        <span className="absolute top-0 left-0 w-full text-center">Còn {numberRandom}/10 suất</span>
                    </div>
                )}
                {extraPromotionStyles && (
                    <Link href="/cart">
                        <button
                            className="w-full h-[32px] bg-[#f1f8fe] rounded-[4px] text-blue-custom leading-[18px] text-xs font-bold p-[7px]"
                            onClick={handleBuyNow}
                        >
                            Mua ngay
                        </button>
                    </Link>
                )}
            </div>
        </Link>
    );
};

export default ProductCard;
