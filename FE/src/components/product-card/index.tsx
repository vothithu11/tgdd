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
        <div className={`py-8 px-4 bg-white m-2 rounded-md ${extraClassContainer} min-h-[510px] max-lg: `}>
            <Link href={`/${category}/${_id}`}>
                <MotionDiv whileHover={{ y: -10 }} whileTap={{ y: 0 }} transition={{ duration: 0.2 }}>
                    <img src={main_image} alt="sp" width={210} height={193} />
                </MotionDiv>
                <div className="grid justify-items-center gap-1 mt-2">
                    <p className="max-lg:text-sm center-x hover:text-blue-custom">{title}</p>
                    {/* <p>{iphone && 'Online giá quả rẻ'}</p> */}

                    <div className="">
                        {isPromotion && (
                            <div className="flex space-x-2">
                                <span className="line-through text-gray-500 max-lg:text-xs">
                                    <FormatPrice price={originalPrice}/> <span>đ</span>
                                </span>
                                <br />
                                <span className=" p-1 rounded-md bg-[#FFF0E9] max-lg:hidden">
                                    {promotionPercent}
                                    <span>%</span>
                                </span>
                            </div>
                        )}
                    </div>
                    <p className="text-red-600 font-bold max-lg:font-normal">
                    <FormatPrice price={salePrice}/> <span>đ</span>
                    </p>
                    <p>
                        <StarRating rating={rate} />
                    </p>
                    {moreInfoBtn && (
                        <ul className="grid justify-items-start gap-2 p-2 text-sm list-disc max-lg:hidden">
                            <li>{screen}</li>
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
