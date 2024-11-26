import Link from 'next/link';

import { MotionDiv } from '../MotionDiv';
import React from 'react';
import { IProduct } from '../type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { formatPrice } from '../formatPrice';

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
}

const ProductCard: React.FC<IProductCardProps> = (props) => {
    const {
        category,
        _id,
        main_image,
        title,
        isPromotion,
        originalPrice,
        promotionPercent,
        salePrice,
        rate,
    } = props.product;
    return (
        <div
            className={`h-max max-h-[345px] p-2.5 rounded-lg border-[#eaecf0] border hover:shadow-lg max-w-[220px]`}
        >
            <Link href={`/${category}/${_id}`}>
                <div className="h-[50%]">
                    <MotionDiv whileHover={{ y: -10 }} whileTap={{ y: 0 }} transition={{ duration: 0.2 }}>
                        <Image src={main_image} alt="sp" width={200} height={200} quality={100} />
                    </MotionDiv>
                </div>

                <div className="mt-3 h-[50%] flex flex-col">
                    <p className="hover:text-blue-custom min-h-10 text-base font-medium leading-[19px] mb-1 flex items-center capitalize">{title}</p>
            
                        {isPromotion && (
                            <div className="flex text-xs items-center gap-[1px]">
                                <span
                                    className="line-through text-gray-500
                                "
                                >
                                    {formatPrice(originalPrice)}<sup>đ</sup>
                                </span>
                                <br />
                                <span className="text-[#dd2f2c] rounded-md max-lg:hidden">
                                    {promotionPercent}
                                    <span>%</span>
                                </span>
                            </div>
                        )}
                    <p className="text-red-600 text-xl font-bold">
                    {formatPrice(salePrice)} <sup>đ</sup>
                    </p>
                    <div className='mt-2 flex justify-between text-xs'> 
                        <span>
                        <FontAwesomeIcon icon={faStar} className='w-[14px] h-[14px] text-[#FFD400]'/> <span className='text-gray-500'>{rate}</span>
                        </span>
                       
                        <span className='cursor-pointer text-blue-custom text-xs'>Xem ngay</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
