import { convertItemFilter } from '@/components/constants/convertItemFilter';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { IPendingFilter, RootState } from './constants/type';
import { formatSalePrice } from './constants/formatSalePrice';

interface IFilterSelectedProps {
    handleValue: (key: string, value: string | number) => void;
    handleCancel: () => void;
}

function FilterSelected({ handleValue, handleCancel }: IFilterSelectedProps) {
    const { pendingFilter } = useSelector((state: RootState) => state.filter);
    const isEmpty = Object.values(pendingFilter).every((item) => item.length === 0);
    const nonEmptyFilters = Object.entries(pendingFilter).filter(
        ([_, value]) => Array.isArray(value) && value.length > 0
    );
    return (
        <div className="flex items-center gap-2">
            {!isEmpty &&
                nonEmptyFilters?.map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2 h-10 text-[#314657]">
                        {(value.length > 0 && key!=='salePrice') ?
                            value.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleValue(key, item)}
                                    className="w-max h-full border py-1 px-3 rounded-lg border-[#e0e0e0] hover:border-[#288AD6] flex gap-0.5 items-center capitalize"
                                >
                                    {convertItemFilter(key, item)}
                                    <FontAwesomeIcon icon={faXmark} className="w-2.5 h-2.5" />
                                </button>
                                
                            )):<span  className="w-max h-full border py-1 px-3 rounded-lg border-[#e0e0e0] hover:border-[#288AD6] flex gap-0.5 items-center">Từ {formatSalePrice(Number(value[0]))} - {formatSalePrice(Number(value[1]))} đ</span>}
                    </div>
                ))}
            {!isEmpty && (
                <div className="text-blue-custom cursor-pointer" onClick={handleCancel}>
                    Xóa tất cả
                </div>
            )}
        </div>
    );
}

export default FilterSelected;
