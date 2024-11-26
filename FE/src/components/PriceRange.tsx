'use client'
import { formatPrice } from '@/components/formatPrice';
import { clickPrice } from '@/components/slice/filterSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Slider from 'react-slider';

const PriceRange = () => {
  const [values, setValues] = useState([0, 50000000]);
  const dispatch = useDispatch();
  const handleChange = (newValues:number[]) =>{
    setValues(newValues)
  };
  const handleAfterChange = (newValues: number[]) => {
    dispatch(clickPrice({ key: 'salePrice', value: newValues }));
  };
  return (
    <div className='w-max flex flex-col gap-2.5'>
      <p className="text-blue-custom">Chọn mức giá phù hợp với bạn:</p>
      <div className="flex justify-between gap-2">
          <input
            type="number"
            id="minPrice"
            className="w-[100px] border border-gray-300 bg-transparent rounded-md px-2 py-1 text-sm outline-none"
            value={(values[0])}
            onChange={(e) => handleChange([+e.target.value, values[1]])}
          />
          <input
            type="number"
            id="maxPrice"
            className="w-[100px] border border-gray-300 bg-transparent rounded-md px-2 py-1 text-sm outline-none"
            value={values[1]}
            onChange={(e) => handleChange([values[0], +e.target.value])}
          />
       </div>
      <Slider
        className="h-2 rounded-md cursor-pointer mt-2.5"
        thumbClassName="h-4 w-4 -mt-1 bg-blue-500 rounded-full shadow-md focus:outline-none"
        trackClassName="bg-blue-400 h-2 rounded-md" 
        value={values}
        onChange={handleChange}
        onAfterChange={handleAfterChange}
        min={0}
        max={50000000}
        step={100000}
      />
    </div>
  );
};

export default PriceRange;


