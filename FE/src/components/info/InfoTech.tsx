'use client';
import { useState } from 'react';
import { info } from '@/components/constants/data.mocks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from '../constants/type';
import { convertItemFilter } from '../constants/convertItemFilter';

function InfoTech({ product }: { product: IProduct }) {
    const [openTab, setOpenTab] =  useState<number[]>([]);

    return (
        <div className="flex flex-col gap-2.5">
            {info.map((info, index) => (
                <div key={index}>
                    <div
                        className={`w-full rounded-lg font-semibold py-[15px] px-2.5 bg-[#f2f4f7] flex justify-between cursor-pointer`}
                        onClick={() =>
                            setOpenTab((pre) =>
                                openTab.includes(index) ? openTab.filter((item) => item !== index) : [...pre, index],
                            )
                        }
                    >
                        <span>{info.title}</span>
                        {openTab.includes(index) ? (
                            <FontAwesomeIcon icon={faAngleUp} />
                        ) : (
                            <FontAwesomeIcon icon={faAngleDown} />
                        )}
                    </div>
                    {openTab.includes(index) &&
                        info.des.map((item, i) => (
                            <p key={i} className="w-full p-2.5 flex gap-4 border-b border-[#f2f4f7]">
                                <span>{item[0]}</span>
                                <span className='capitalize'>{product[item[1]] !== undefined? convertItemFilter(item[1],product[item[1]]): item[1]}</span>
                            </p>
                        ))}
                </div>
            ))}
        </div>
    );
}

export default InfoTech;
