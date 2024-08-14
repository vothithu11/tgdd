'use client';
import React, { useState } from 'react';
import ProductsLayout from '@/components/layout/products-layout';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ProductCard from '@/components/product-card';

const ProductsPage: React.FC = (props) => {
    const {products, filterData } = props;
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [tempParams, setTempParams] = useState({});
    const [resetFilters, setResetFilters] = useState('');
    const [openPopup, setOpenPopup] = useState('');
  

    const handleTempChange = (newParams: { [key: string]: string | number }) => {
        setTempParams((prev) => ({ ...prev, ...newParams }));
    };

    const handleSubmit = () => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        Object.entries(tempParams).forEach(([param, value]) => {
            newSearchParams.set(param, value);
        });

        const newUrl = `${pathname}?${newSearchParams.toString()}`;
        router.replace(newUrl);
        setOpenPopup('');
    };

    const clearFilters = () => {
        setTempParams({});
        router.replace(pathname);
        setOpenPopup('');
    };

    const showPopup = (queryName: string) => {
        setOpenPopup((prev) => (prev === queryName ? '' : queryName));
    };
    return (
        <ProductsLayout
            filterData={filterData}
            onSelectFeature={handleTempChange}
            handleSubmit={handleSubmit}
            clearFilters={clearFilters}
            resetFilters={resetFilters}
            openPopup={openPopup}
            showPopup={showPopup}
        >
            {products.length === 0 ? (
                <div>Loading...</div>
            ) : (products.length > 0)  ? (
                <>
                    <ul className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2">
                        {products.map((item) => (
                            <li className="border-2 border-gray-100 hover:shadow-md" key={item._id}>
                                <ProductCard product={item} extraClassContainer={'bg-white'} moreInfoBtn={true} />
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <div>No products found</div>
            )}
        </ProductsLayout>
    );
};

export default ProductsPage;
