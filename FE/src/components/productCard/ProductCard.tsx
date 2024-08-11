import Link from 'next/link';
import StarRating from '../StarRating';
import { FormatPrice } from '@/datas/covertData';
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
}

const ProductCard: React.FC<IProductCardProps> = (props) => {
    const { extraClassContainer, product, moreInfoBtn } = props;
    const { category, _id, main_image, title, isPromotion } = product;
    return (
        <div className={`py-8 px-4 bg-white m-2 rounded-md ${extraClassContainer} min-h-[510px] max-lg: `}>
            <Link href={`/${category}/${_id}`}>
                <MotionDiv whileHover={{ y: -10 }} whileTap={{ y: 0 }} transition={{ duration: 0.2 }}>
                    <img src={main_image} alt="sp" width={210} height={193} />
                </MotionDiv>
                <div className="grid justify-items-center gap-1 mt-2">
                    <p className="max-lg:text-sm center-x hover:text-blue-custom">{title}</p>
                    {/* <p>{iphone && 'Online giá quả rẻ'}</p> */}

                    <p className="">
                        {isPromotion && (
                            <div className="flex space-x-2">
                                <span className="line-through text-gray-500 max-lg:text-xs">
                                    {FormatPrice(product.originalPrice)} <span>đ</span>
                                </span>
                                <br />
                                <span className=" p-1 rounded-md bg-[#FFF0E9] max-lg:hidden">
                                    {product.promotionPercent}
                                    <span>%</span>
                                </span>
                            </div>
                        )}
                    </p>
                    <p className="text-red-600 font-bold max-lg:font-normal">
                        {FormatPrice(product.salePrice)} <span>đ</span>
                    </p>
                    <p>
                        <StarRating rating={product.rate} />
                    </p>
                    {moreInfoBtn && (
                        <ul className="grid justify-items-start gap-2 p-2 text-sm list-disc max-lg:hidden">
                            <li>{product.screen}</li>
                            <li>
                                <span>RAM: </span>
                                {product.ram} GB
                            </li>

                            <li>
                                Pin: {product.battery} {product.category === 'laptop' ? 'tiếng' : 'mAh'}
                            </li>
                        </ul>
                    )}
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
