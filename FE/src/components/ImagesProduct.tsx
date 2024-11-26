'use client';

import Image from 'next/image';
import { useState } from 'react';
interface IImage{
    thumbnail:string,
    bigProduct:string,
}

function ImagesProduct({ image }:{image:IImage[]}) {
    const [imageSelected, setImageSelected] = useState(image[0].bigProduct);
    const [selected, setSelected] =useState(0)
    const handleClick = (item:IImage,i:number)=>{
        setImageSelected(item.bigProduct);
        setSelected(i);
    }
    console.log(image)
    return (
        <div className="p-5 bg-[#fff] rounded-xl">
            <div className="w-[570px] h-[380px] relative mx-auto">
                <Image
                    src={imageSelected}
                    alt="banner-deals"
                    quality={100}
                    fill
                    className="rounded-lg cursor-pointer object-contain"
                />
            </div>
            <div className="py-5 flex justify-center gap-[5px]">
                {image.map((item, i) => (
                    <Image
                        src={item.thumbnail}
                        alt="titleImg"
                        width={40}
                        height={27}
                        quality={100}
                        className={`object-cover p-1 ${selected===i ? 'border border-[#bbddfd] rounded-lg' :""}`}
                        key={i}
                        onClick={() =>handleClick(item,i)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImagesProduct;
