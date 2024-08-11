import { useEffect, useState } from 'react';

const ProductButtonFeature = ({ filter, onSelect, resetFilters }) => {
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        setSelectedValue('');
    }, [resetFilters]);

    const handleClick = (event) => {
        const selectedValue = event.target.value;
        setSelectedValue(selectedValue);
        onSelect({ [filter.queryName]: selectedValue });
    };

    return (
        <select
            id={filter.queryName}
            className="center-x py-1.5 px-0.5 m-2 border-2 rounded-md text-xs cursor-pointer"
            onChange={handleClick}
            value={selectedValue}
        >
            <option value="" className="">
                {filter.placeholder}
            </option>
            {filter.items.map((item) => (
                <option value={item.value} key={item.value}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

export default ProductButtonFeature;
