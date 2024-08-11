'use client';
import { useState } from 'react';
import ProductsLayout from '@/components/layout/product-layout';
import ProductCard from '@/components/productCard/ProductCard';
import { filterDataLaptop } from '@/datas/data';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const LaptopProducts = (props) => {
    const ram = props?.searchParams.ram || '';
    const brand = props?.searchParams.brand || '';
    const type = props?.searchParams.type || '';
    const screen = props?.searchParams.screen || '';
    const storage = props?.searchParams.storage || '';
    const charger = props?.searchParams.charger || '';
    const pricerange = props?.searchParams.pricerange || '';
    const demand = props?.searchParams.demand || '';
    // const res = await fetch(
    //     `${process.env.NEXT_DOMAIN_URL}/posts?category=laptop&brand=${brand}&ram=${ram}&type=${type}&screen=${screen}&storage=${storage}&charger=${charger}&pricerange=${pricerange}&demand=${demand}`,
    //     { cache: 'no-store' },
    // );

    // const dataLaptop = await res.json();

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const [tempParams, setTempParams] = useState({});
    const [resetFilters, setResetFilters] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);

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
        setOpenPopup(false);
    };

    const clearFilters = () => {
        setTempParams({});
        router.replace(pathname);
        setOpenPopup(false);
    };

    const showPopup = (queryName) => {
        setOpenPopup((prev) => (prev === queryName ? null : queryName));
    };

    // const products = data.docs || [];

    return (
        <ProductsLayout
            filterData={filterDataLaptop}
            onSelectFeature={handleTempChange}
            handleSubmit={handleSubmit}
            clearFilters={clearFilters}
            resetFilters={resetFilters}
            openPopup={openPopup}
            showPopup={showPopup}
        >
            {/* <ul className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2">
                {products.map((item) => (
                    <li className="border-2 border-gray-100 hover:shadow-md" key={item._id}>
                        <ProductCard product={item} bgImage={'bg-white'} moreInfoBtn={true} />
                    </li>
                ))}
            </ul> */}
        </ProductsLayout>
    );
};

export default LaptopProducts;
