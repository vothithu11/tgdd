'use client';

import StarRating from '../StarRating';
import { useDispatch } from 'react-redux';
import { increment } from '@/components/counter/counterSlice';
import { useState } from 'react';
import BoxRight from './BoxRight';
import BoxLeft from './BoxLeft';
interface IProductDetailProps{
    dataProduct: IDataProduct;
}
interface IDataProduct{
    category: string;
    rate: number;
    title: string;
    image: IImage;
    brand:string;
}
interface IImage{
    image: ImageItem[];
}
type ImageItem = {
    thumbnail: string;
    bigProduct: string;
    title: string;
}

const ProductDetail:React.FC<IProductDetailProps> = ({ dataProduct }) => {
    const detailData = dataProduct;
    const {
        category,
        rate,
        title,
        image,
        brand,
    } = detailData;
    // const { category, brand } = detailData;
    const initialImage = dataProduct.image[0]?.bigProduct;
    const [bigLapImg, setBigLap] = useState(initialImage);
    const [visible, setVisible] = useState(2);
    const showMoreItems = () => setVisible((pre) => pre + 6);
  

    return (
        <div className='padding mb-4'>
            <div className="border-b-2 border-gray-custom py-3 space-y-2 text-blue-custom">
                <div className="flex gap-4">
                    <h4>{category === 'phone' ? 'Điện thoại' : 'Laptop'} </h4>
                    <span className="text-base items-center text-gray-500">{'>'}</span>
                    <h4>
                        {category === 'phone' ? 'Điện thoại' : 'Laptop'} {brand}
                    </h4>
                </div>
                <div className="flex gap-2 items-center max-lg:hidden">
                    <h2 className="text-2xl font-semibold text-black">{title}</h2>
                    <StarRating rating={rate} />
                    <span>đánh giá</span>
                </div>
            </div>
            <div className="grid grid-cols-5 mt-4 ">
                <BoxLeft bigLapImg={bigLapImg} detailData={detailData} setBigLap={setBigLap} />
                <BoxRight
                    detailData={detailData}
                    visible={visible}
                    showMoreItems={showMoreItems}
                />
            </div>
        </div>
    );
};

export default ProductDetail;
