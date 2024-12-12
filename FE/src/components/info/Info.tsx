'use client';
import { useState } from 'react';
import InfoTech from './InfoTech';
import InfoReview from './InfoReview';
import { IProduct } from '../type';

function Info({ product }: { product: IProduct }) {
    const [tabInfo, setTabInfo] = useState(0);
    return (
        <div className=" flex flex-col justify-center gap-5">
            <div className="flex justify-center gap-5">
                {['Thông số kỹ thuật', 'Bài viết đánh giá'].map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setTabInfo(index)}
                        className={`w-[245px] h-[40px] rounded-lg py-2 text-center font-semibold  border border-solid ${
                            tabInfo === index ? 'text-[#2a83e9] border-[#2a83e9] bg-[#f1f8fe]' : ''
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
            {tabInfo === 0 && <InfoTech />}
            {tabInfo === 1 && <InfoReview product={product} />}
        </div>
    );
}

export default Info;
