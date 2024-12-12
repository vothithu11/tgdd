export const dynamic = 'force-dynamic';
import { fetchTablet } from '@/api';
import { IProduct, ISearchParams } from '@/components/type';
import ProductsLayout from '@/components/ProductsLayout';
import {  filterDataTablet, filterDataTabletPopular } from '@/components/data.mocks';
import Filter from '@/components/Filter';
interface ITabletPage {
    searchParams: ISearchParams
}
export const metadata= {
    title: 'Máy tính bảng, tablet giá rẻ, mua trả chậm 0% lãi suất',
    description: 'Máy tính bảng, tablet giá rẻ, mua trả chậm 0% lãi suất',
};
const TabletPage = async ({ searchParams }:ITabletPage) => {
    const products:IProduct[] = await fetchTablet({
        brand: [searchParams.brand].flat(),
        ram: [searchParams.ram].flat(),
        storage: [searchParams.storage].flat(),
        screen: [searchParams.screen].flat(),
        type: [searchParams.type].flat(),
        salePrice: searchParams.salePrice,
        sort:  searchParams.sort,
    });
    return (
        <ProductsLayout quantity={products?.length} title='Máy tính bảng' products={products}><Filter filterData={filterDataTablet} filterDataPopular={filterDataTabletPopular}/></ProductsLayout>
    );
};

export default TabletPage;
