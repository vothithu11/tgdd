'use client';
import { useState } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
// import ProductCard from '../productCard/ProductCard';
import LoadMore from '../LoadMore';

const ProductsPage = ({ data, filterData }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const [tempParams, setTempParams] = useState({});
    const [resetFilters, setResetFilters] = useState(false);

    const handleTempChange = (newParams) => {
        setTempParams((prev) => ({ ...prev, ...newParams }));
    };

    const handleSubmit = () => {
        const newSearchParams = new URLSearchParams(searchParams);
        Object.entries(tempParams).forEach(([param, value]) => {
            newSearchParams.set(param, value);
        });

        const newUrl = `${pathname}?${newSearchParams.toString()}`;
        router.replace(newUrl);
    };

    const clearFilters = () => {
        setTempParams({});
        setResetFilters((prev) => !prev);
        router.replace(pathname);
    };

    const products = data.docs || [];

    return (
        // <ProductsLayout filterData={filterData} onSelectFeature={handleTempChange} resetFilters={resetFilters}>
        //     <div className="flex space-x-4 my-4 center-x mx-auto">
        //         <button
        //             onClick={handleSubmit}
        //             className=" py-2 px-4 border-2 border-red-500 rounded-md text-md cursor-pointer bg-[#f6f7f8] text-red-500"
        //         >
        //             Xem kết quả
        //         </button>
        //         <button
        //             onClick={clearFilters}
        //             className=" py-2 px-4 border-2 rounded-md text-md cursor-pointer bg-[#288AD6] text-white"
        //         >
        //             Bỏ chọn
        //         </button>
        //     </div>
        //     <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2">
        //         {products.map((item) => (
        //             <div className="border-2 border-gray-100 hover:shadow-md" key={item._id}>
        //                 <ProductCard product={item} bgImage={'bg-white'} moreInfo={true} />
        //             </div>
        //         ))}
        //     </div>
        // </ProductsLayout>
    );
};

export default ProductsPage;
