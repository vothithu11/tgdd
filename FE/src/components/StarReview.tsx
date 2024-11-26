'use client';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function StarReview() {
    const [selectedStar, setSelectedStar] = useState(-1);
    const [feedBack, setFeedBack] = useState(false);
    const handleSelected = (index: number) => {
        setSelectedStar(index);
        setTimeout(() => {
            setFeedBack(true);
        }, 2000);
    };

    return (
        <div>
            {feedBack ? (
                <p className="text-lg font-bold leading-8 flex flex-col gap-5 text-center p-6">Cảm ơn bạn đã đánh giá sản phẩm!</p>
            ) : (
                <div className='flex flex-col gap-5 text-center p-6'>
                    <p className="text-[26px] font-bold leading-8">Đánh giá sản phẩm này</p>
                    <p className="text-[#757575] leading-[18px]">
                        Nếu đã mua sản phẩm này tại TGDĐ. Hãy đánh giá ngay để giúp hàng ngàn người chọn <br /> mua hàng
                        tốt nhất bạn nhé!
                    </p>

                    <div className="flex gap-5 justify-center">
                        {Array.from({ length: 5 }, (_, index) => (
                            <FontAwesomeIcon
                                onClick={() => handleSelected(index)}
                                key={index}
                                icon={faStar}
                                className={`w-10 h-10 cursor-pointer ${index <= selectedStar ? 'text-[#FFD43B]' : 'text-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default StarReview;
