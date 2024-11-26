'use client'

import Image from "next/image";
import { useState } from "react";

function IconReview() {
    const [feedBack, setFeedBack] = useState(false);
    const handleClick = () => {
            setFeedBack(true);
    };

    return (
        <div>
            {feedBack ? (
                <p className="text-lg font-bold leading-8 flex flex-col gap-5 text-center p-6">Cảm ơn bạn đã đánh giá trải nghiệm!</p>
            ) : (
                <div className="w-full h-full mx-auto flex gap-4 items-center">
                <span className="w-4/8 p-3 text-[#515764] font-thin text-[13px]">
                    Bạn có hài lòng với trải nghiệm tìm kiếm <br/>thông tin, sản phẩm trên website không?
                </span>
                <div className="w-2/8 flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={handleClick}>
                    <Image src="/icon-happy.png" alt="icon" width={30} height={30} quality={100} className='hover:scale-110 w-auto h-auto '/>
                    <span className="text-[#ffd400] text-center">Hài lòng</span>
                </div>
                <div className="w-2/8 flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={handleClick}>
                    <Image src="/icon-bad.png" alt="icon" width={30} height={30} quality={100} className='hover:scale-110' />
                    <span className="text-[#ffd400] text-center">Không hài lòng</span>
                </div>
                </div>
            )}
        </div>
    );
}


export default IconReview

    


