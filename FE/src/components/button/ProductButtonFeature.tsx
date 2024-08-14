import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const ProductButtonFeature = ({ filter, onSelect, handleSubmit, clearFilters, resetFilters, openPopup, showPopup }) => {
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        setSelectedValue('');
    }, [resetFilters]);

    const handleClick = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        onSelect({ [filter.queryName]: value });
    };

    return (
        <div className="grid grid-cols-1 relative">
            <button
                className="mx-2 py-2 px-4 border-2 rounded-md text-md cursor-pointer "
                onClick={() => showPopup(filter.queryName)}
            >
                <div className="flex items-center space-x-2">
                    <span> {filter.placeholder}</span>
                    <FontAwesomeIcon icon={faSortDown} />{' '}
                </div>
            </button>

            {openPopup === filter.queryName && (
                <div className="absolute z-10 top-10 left-0 border-2 mt-2 rounded-md bg-white w-[500px]">
                    <div className="mt-2 space-x-4 space-y-2 px-4">
                        {filter.items.map((item) => (
                            <button
                                value={item.value}
                                key={item.value}
                                className={`p-1 border-2 rounded-md hover:border-blue-400 ${
                                    selectedValue === item.value ? 'bg-blue-500 text-white' : ''
                                }`}
                                onClick={handleClick}
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
                            onClick={clearFilters}
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
