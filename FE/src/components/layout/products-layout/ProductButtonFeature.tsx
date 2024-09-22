'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';

const ProductButtonFeature = ({ filter, onSelect, handleSubmit, clearFilters, openPopup,
    showPopup}) => {
        const [selectedValue, setSelectedValue] = useState('');


    const handleClick = useCallback((value: string) => {
        setSelectedValue(value);
        onSelect({ [filter.queryName]: value });
    }, [filter.queryName, onSelect]);
    const handleCancel = (queryName: string) => {
        onSelect({ [queryName]: "" });
        setSelectedValue('');
    };
    return (
        <div className="grid grid-cols-1 relative">
            <button
                className="mx-2 p-3 border rounded-md text-sm cursor-pointer"
                onClick={() => showPopup(filter.queryName)}
            >
                <div className="flex items-center space-x-2">
                    <span> {filter.placeholder}</span>
                    <FontAwesomeIcon icon={faSortDown} className='-mt-1'/>
                </div>
            </button>

            {openPopup === filter.queryName && (
                <div className="absolute z-10 top-10 left-0 mt-[21px] rounded-md background-gradient w-[500px] before:content-[''] before:absolute before:-top-2 before:left-4 before:w-4 before:h-4 before: before:bg-[#A3AF73] before:rotate-45"  style={{ boxShadow: '0px 4px 6px rgba(214, 214, 214, 0.5)' }}>
                    <div className="mt-2 space-x-4 space-y-2 px-4">
                        {filter.items.map((item) => (
                            <button
                                value={item.value}
                                key={item.value}
                                className={`p-1 border rounded-md hover:border-blue-400 hover:text-blue-400${
                                    selectedValue === item.value ? 'border border-blue-500' : ''
                                }`}
                                onClick={()=>handleClick(item.value)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                    <div className="flex space-x-4 my-4 center-x mx-auto">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="p-1 border-2 border-red-500 rounded-md text-md cursor-pointer bg-[#f6f7f8] text-red-500"
                        >
                            Xem kết quả
                        </button>
                        <button
                             onClick={()=>handleCancel(filter.queryName)}
                            className="p-1 border-2 rounded-md text-md cursor-pointer bg-[#288AD6] text-white"
                        >
                            Bỏ chọn
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductButtonFeature;