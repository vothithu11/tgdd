export const dynamic = 'force-dynamic';
import { fetchPhone } from '@/api';
import { IProduct, ISearchParams } from '@/components/constants/type';
import ProductsLayout from '@/components/ProductsLayout';
import {  filterDataMobile, filterDataMobilePopular } from '@/components/constants/data.mocks';
import Filter from '@/components/Filter';
interface IPhonePage {
    searchParams: ISearchParams
}
export const metadata= {
    title: 'Điện thoại, Smartphone chính hãng giá rẻ, mua trả chậm 0% lãi suất',
    description: 'Điện thoại, Smartphone chính hãng giá rẻ, mua trả chậm 0% lãi suất',
};
const PhonePage = async ({ searchParams }:IPhonePage) => {
    const products:IProduct[] = await fetchPhone({
        brand: [searchParams.brand].flat(),
        ram: [searchParams.ram].flat(),
        storage: [searchParams.storage].flat(),
        type: [searchParams.type].flat(),
        salePrice: searchParams.salePrice,
        sort:  searchParams.sort,
    });
   
    return (
        <ProductsLayout quantity={products?.length} title='Điện thoại' products={products}><Filter filterData={filterDataMobile} filterDataPopular={filterDataMobilePopular}/></ProductsLayout>
    );
};

export default PhonePage;
