'use client';
import ProductDetailLayout from '../layout/ProductDetailLayout';
import StarRating from '../StarRating';
import { FormatPrice } from '@/datas/covertData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { increment } from '@/components/counter/counterSlice';
import { useState, useEffect } from 'react';
import BoxRight from './BoxRight';
import BoxLeft from './BoxLeft';

const ProductDetail = ({ dataProduct }) => {
    const detailData = dataProduct;
    const { category, brand } = detailData;
    const initialImage = dataProduct.image[0]?.bigProduct;
    const [bigLapImg, setBigLap] = useState(initialImage);
    const [visible, setVisible] = useState(2);
    const showMoreItems = () => setVisible((pre) => pre + 6);
    const dispatch = useDispatch();
    const handleBuyNow = () => {
        dispatch(increment(detailData));
    };
    const handleAddToCart = () => {
        dispatch(increment(detailData));
    };

    return (
        <ProductDetailLayout>
            <div className="border-b-2 border-gray-custom py-3 space-y-2 text-blue-custom">
                <div className="flex gap-4">
                    <h4>{category == 'phone' ? 'Điện thoại' : 'Laptop'} </h4>
                    <span className="text-base items-center text-gray-500">{'>'}</span>
                    <h4>
                        {detailData.category == 'phone' ? 'Điện thoại' : 'Laptop'} {brand}
                    </h4>
                </div>
                <div className="flex gap-2 items-center max-lg:hidden">
                    <h2 className="text-2xl font-semibold text-black">{detailData.title}</h2>
                    <StarRating rating={detailData.rate} />
                    <span>đánh giá</span>
                </div>
            </div>
            <div className="grid grid-cols-5 mt-4 ">
                <BoxLeft bigLapImg={bigLapImg} detailData={detailData} setBigLap={setBigLap} />
                <BoxRight
                    handleBuyNow={handleBuyNow}
                    detailData={detailData}
                    visible={visible}
                    showMoreItems={showMoreItems}
                />
            </div>
        </ProductDetailLayout>
    );
};

export default ProductDetail;
