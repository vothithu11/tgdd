import Link from 'next/link';
import StarRating from '../StarRating';
import FormatPrice from '../FormatPrice'
import { MotionDiv } from '../MotionDiv';
import React from 'react';

interface IProductCardProps {
    product: IProductItem;
    extraClassContainer?: string;
    moreInfoBtn: boolean;
}

interface IProductItem {
    category: string;
    _id: string;
    main_image: string;
    title: string;
    isPromotion: boolean;
    originalPrice: number;
    promotionPercent: number;
    salePrice: number;
    rate: number;
    screen: number;
    ram: number;
    battery: number;
}

const ProductCard: React.FC<IProductCardProps> = (props) => {
    const { extraClassContainer, product, moreInfoBtn } = props;
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
        screen,
        ram,
        battery,
    } = product;
    return (
        <div className={`min-h-[490px] max-lg:min-h-[320px] p-2.5 leading-3 rounded-lg border-gray-100 border hover:shadow-lg ${extraClassContainer} max-w-[220px] text-sm`}>
            <Link href={`/${category}/${_id}`}>
                <MotionDiv whileHover={{ y: -10 }} whileTap={{ y: 0 }} transition={{ duration: 0.2 }}>
                    <img src={main_image} alt="sp" width={200} height={200} />
                </MotionDiv>
                <div className="mt-4 max-lg:space-y-2">
                    <p className="text-sm flex justify-start hover:text-blue-custom min-h-10">{title}</p>
                    {/* <p>{iphone && 'Online giá quả rẻ'}</p> */}
                    <p className="text-red-600 text-lg font-bold">
                    <FormatPrice price={salePrice}/> <sup>đ</sup>
                    </p>
                    <div className="">
                        {isPromotion && (
                            <div className="flex space-x-2 text-sm items-center">
                                <span className="line-through text-gray-500 
                                ">
                                    <FormatPrice price={originalPrice}/> <sup>đ</sup>
                                </span>
                                <br />
                                <span className="p-1 text-[13px] text-[#dd2f2c] rounded-md max-lg:hidden">
                                    {promotionPercent}
                                    <span>%</span>
                                </span>
                            </div>
                        )}
                    </div>
                    
                    <div>
                        <StarRating rating={rate} />
                    </div>
                    {moreInfoBtn && (
                        <ul className="grid justify-items-start gap-2 p-3 text-sm list-disc max-lg:hidden">
                            <li>Màn hình: {screen}</li>
                            <li>
                                <span>RAM: </span>
                                {ram} GB
                            </li>

                            <li>
                                Pin: {battery} {category === 'laptop' ? 'tiếng' : 'mAh'}
                            </li>
                        </ul>
                    )}
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
