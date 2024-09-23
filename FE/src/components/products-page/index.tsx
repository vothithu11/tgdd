'use client';
import React, { useCallback, useEffect, useState } from 'react';
import ProductsLayout from '@/components/layout/products-layout';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ProductCard from '@/components/product-card';

const ProductsPage: React.FC = (props) => {
    const { products, filterData } = props;
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [tempParams, setTempParams] = useState({});
    const [openPopup, setOpenPopup] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleTempChange = useCallback((newParams: { [key: string]: string | number }) => {
        setTempParams((prev) => ({ ...prev, ...newParams }));
    }, []);
    const handleSubmit =() => {
        setIsLoading(true);
        const newSearchParams = new URLSearchParams(searchParams.toString());
        Object.entries(tempParams).forEach(([param, value]) => {
            newSearchParams.set(param, value);
        });

        const newUrl = `${pathname}?${newSearchParams.toString()}`;

        router.replace(newUrl);

        setOpenPopup('');
    }

    const clearFilters = 
        () => {
            setTempParams({});
            router.replace(pathname);
            setOpenPopup('');
        }
       

    const showPopup = (queryName: string) => {
        setOpenPopup((prev) => (prev === queryName ? '' : queryName));
    }
    useEffect(() => {
        setIsLoading(false);
    }, [products]);
    return (
        <ProductsLayout
            filterData={filterData}
            onSelect={handleTempChange}
            handleSubmit={handleSubmit}
            clearFilters={clearFilters}
            openPopup={openPopup}
            showPopup={showPopup}
            tempParams={tempParams}
        >
            {isLoading && <p>Loading...</p>}
            {!isLoading && products.length === 0 && <div>No products found</div>}
            {!isLoading && products.length > 0 && (
                <>
                    <div className="grid grid-cols-5 gap-3 max-xl:grid-cols-3 max-md:grid-cols-2">
                        {products.map((item) => (
                                <ProductCard product={item} extraClassContainer={'bg-white'} moreInfoBtn={true} key={item._id} />
                        ))}
                    </div>
                </>
            )}
        </ProductsLayout>
    );
};

export default ProductsPage;
