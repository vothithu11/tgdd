'use client';
import { faAngleDown, faCheck, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { dataSort } from './data.mocks';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { clickButton, clickPopup, clickSort, submit, cancel } from '@/components/slice/filterSlice';
import FilterSelected from './FilterSelected';
import { IFilterData, IFilterItemPopular, RootState } from './type';
import Image from 'next/image';
import PriceRange from './PriceRange';
import useUrlSearchParams from './useUrlSearchParams';
interface IFilterProps {
    filterData: IFilterData[];
    filterDataPopular: IFilterItemPopular[];
}
function Filter({ filterData, filterDataPopular }: IFilterProps) {
    const [showResults, setShowResults] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const router = useRouter();
    const pathName = usePathname();
    const { filterSort, pendingFilter } = useSelector((state: RootState) => state.filter);
    const updateUrlSearchParams = useUrlSearchParams(filterSort);
    const dispatch = useDispatch();
    const handleClick = (key: string, value: string | number) => {
        dispatch(clickPopup({ key, value }));
    };
    const handleOption = (key: string, value: string | number) => {
        dispatch(clickButton({ key, value }));
        updateUrlSearchParams();
    };
    const handleSort = (key: string, value: string | number) => {
        dispatch(clickSort({ key, value }));
        updateUrlSearchParams();
    };
    const handleSubmit = () => {
        dispatch(submit());
        updateUrlSearchParams();
        setShowResults(false);
    };
    const handleCancel = () => {
        dispatch(cancel());
        router.replace(pathName);
        setShowResults(false);
    };
    const isEmpty = Object.values<string[] | number[]>(pendingFilter).every((item) => item.length === 0);
    useEffect(() => {
        dispatch(cancel());
    }, [pathName, dispatch]);
    useEffect(() => {
        updateUrlSearchParams();
    }, [filterSort]);
    return (
        <div>
            <div className='flex flex-wrap gap-2 leading-3 relative max-md:gap-3'>
                <button
                    className={`space-x-1 w-max border py-1.5 px-3 rounded-lg flex items-center ${
                        !isEmpty ? 'border-[#288AD6] text-blue-custom' : ''
                    } `}
                    onClick={() => setShowResults((pre) => !pre)}
                >
                    <span className="relative">
                        <FontAwesomeIcon icon={faFilter} className="w-5 h-5" />
                        {!isEmpty && (
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="w-2 h-2 bg-orange-500 rounded-full absolute -top-1 right-0 p-0.5"
                            />
                        )}
                    </span>
                    <span>Lọc</span>
                </button>
                {showResults && (
                    <div className="absolute top-14 shadow-lg bg-gradient-to-r from-indigo-50 via-gray-200 to-indigo-100 w-[720px] max-h z-10 p-5 flex flex-col gap-5 rounded-lg before:content-[''] before:absolute before:w-4 before:h-4  before:bg-indigo-50 before:rotate-45 before:-top-2 before:left-3">
                        <div className="flex flex-wrap gap-5">
                            {!isEmpty && (
                                <div className="flex gap-2.5 items-center">
                                    <span className="font-bold">Đã chọn:</span>{' '}
                                    <FilterSelected handleValue={handleClick} handleCancel={handleCancel} />
                                </div>
                            )}
                            <div className="flex gap-5 flex-wrap items-center justify-between">
                                {filterData.map((filter: IFilterData, i) => (
                                    <div key={i} className="flex flex-col">
                                        <div className="font-bold">{filter.placeholder}</div>
                                        <div className="mt-2.5">{filter.queryName === 'price' && <PriceRange />}</div>
                                        <div className="flex gap-2.5 py-2.5">
                                            {filter.items?.map((list, j) => (
                                                <button
                                                    key={j}
                                                    onClick={() => handleClick(filter.queryName, list.value)}
                                                    className="p-2 text-center rounded-lg border cursor-pointer max-w border-[#e0e0e0] hover:border-[#288AD6] flex flex-col items-center justify-center gap-1"
                                                >
                                                    {list?.image && (
                                                        <Image
                                                            src={`/${list.value}.png`}
                                                            alt="img"
                                                            width={40}
                                                            height={40}
                                                            quality={100}
                                                        />
                                                    )}
                                                    <span> {list.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center gap-2">
                            <button
                                onClick={handleCancel}
                                className="w-[170px] h-9 py-2.5 text-center rounded-lg border cursor-pointer border-[#dd1c1a] text-[#dd1c1a] "
                            >
                                Xóa tất cả
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="w-[170px] h-9 py-2.5 text-center rounded-lg border cursor-pointer bg-[#288AD6] text-white"
                            >
                                Xem kết quả
                            </button>
                        </div>
                    </div>
                )}
                {isEmpty &&
                    filterDataPopular.map((item: IFilterItemPopular, i: number) => (
                        <button
                            className="w-max border border-none py-1.5 px-3 rounded-lg bg-[#f2f4f7] hover:border-[#288AD6]"
                            key={i}
                            onClick={() => handleOption(item.queryName, item.value)}
                        >
                            {item.name}
                        </button>
                    ))}
                <FilterSelected handleValue={handleOption} handleCancel={handleCancel} />
            </div>
            <div className="flex items-center gap-6 my-5 font-medium text-[#667085]">
                <span>Sắp xếp theo:</span>
                {dataSort.map((item, i) => (
                    <span key={i} onClick={() => handleSort(item.queryName, item.value)} className="cursor-pointer">
                        {item.name}
                    </span>
                ))}
                <span
                    className="flex gap-0.5 items-center relative cursor-pointer"
                    onClick={() => setShowBtn((pre) => !pre)}
                >
                    Giá <FontAwesomeIcon icon={faAngleDown} className="w-3 h-3 opacity-80" />
                    {showBtn && (
                        <span className="flex flex-col items-center gap-2 absolute top-10 z-10 right-0 bg-slate-50 w-32 h-24 p-2 shadow-md rounded-lg">
                            <span onClick={() => handleSort('sort', 'salePrice')} className="pt-3 cursor-pointer">
                                Giá thấp - cao
                            </span>
                            <span onClick={() => handleSort('sort', '-salePrice')} className="pt-3 cursor-pointer">
                                Giá cao - thấp
                            </span>
                        </span>
                    )}
                </span>
            </div>
        </div>
    );
}
export default Filter;
