'use client';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { IProduct, RootState } from './type';
import ProductCard from './product-card';
import { useSelector } from 'react-redux';

const LoadMore = ({ products }: { products: IProduct[] }) => {
    const [page, setPage] = useState(-1);
    const productsPerPage = 10;
    const totalProducts = products.length;

    const remainingProducts = products.slice(10, 10 + productsPerPage * (page + 1));
    let count = totalProducts - productsPerPage - remainingProducts.length;
    const filterSort = useSelector((state: RootState) => state.filter.filterSort);
    const handlePagination = () => {
        if (remainingProducts.length < totalProducts) {
            setPage((prev) => prev + 1);
        }
    };
    useEffect(() => {
        setPage(-1);
    }, [filterSort]);
    return (
        <>
            <div className="w-full flex gap-2.5 flex-wrap">
                {remainingProducts?.length > 0 &&
                    remainingProducts.map((product: IProduct,i) => <div key={i} className='w-[19%] max-lg:w-[31%] max-md:w-[46%]'><ProductCard product={product} key={product._id} /></div>)}
            </div>
            {count > 0 && (
                <div className="w-[340px] mx-auto mt-4">
                    <button
                        onClick={handlePagination}
                        className="space-x-1 text-blue-custom border-[#2a83e9] leading-10 border rounded-lg text-center w-full font-bold"
                    >
                        Xem thêm {count} điện thoại
                        <FontAwesomeIcon icon={faAngleDown} className="w-3 h-3 opacity-80" />
                    </button>
                </div>
            )}
        </>
    );
};

export default LoadMore;
