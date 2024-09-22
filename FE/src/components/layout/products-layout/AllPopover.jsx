import ButtonBlue from '@/components/button/ButtonBlue';
import AllPopoverCard from './AllPopverCard'

const AllPopover = ({ filterData, onSelect, handleSubmit, clearFilters, tempParams, openPopup, showPopup }) => {
    const selectedDatas =  Object.values(tempParams);
    return (
        <div className='absolute z-10 top-3 p-4 left-0 border-2 mt-20 rounded-md background-gradient w-[800px] before:content-[""] before:absolute before:-top-2 before:left-4 before:w-4 before:h-4 before:bg-[#A3AF73] before:rotate-45
        max-xl:p-1 max-xl:w-[600px] max-sm:w-[300px] max-xl:top-12
        '>
            <div className='space-x-3'><strong className='max-lg:text-sm'>Đã chọn:</strong> {selectedDatas.map(value=><ButtonBlue key={value}>{value}</ButtonBlue>)}</div>
            {filterData.map((filter) => (
                <AllPopoverCard
                    key={filter.queryName}
                    filter={filter}
                    onSelect={onSelect}
                />
            ))}

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
    );
};

export default AllPopover;
