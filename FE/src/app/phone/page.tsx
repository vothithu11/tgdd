import { fetchPhone } from '@/api';
import { IProduct, ISearchParams } from '@/components/type';
import ProductsLayout from '@/components/ProductsLayout';
import {  filterDataMobile, filterDataMobilePopular } from '@/components/data.mocks';
import Filter from '@/components/Filter';
interface IPhonePage {
    searchParams: ISearchParams
}

const PhonePage = async ({ searchParams }:IPhonePage) => {
    const products:IProduct[] = await fetchPhone({
        brand: [].concat(searchParams.brand),
        ram: [].concat(searchParams.ram),
        storage:[].concat(searchParams.storage),
        type:[].concat(searchParams.type),
        salePrice: searchParams.salePrice,
        sort:  searchParams.sort,
    });
    console.log(searchParams,'searchparams')
    return (
       <ProductsLayout quantity={products?.length} title='Điện thoại' products={products}><Filter filterData={filterDataMobile} filterDataPopular={filterDataMobilePopular}/></ProductsLayout>
    );
};

export default PhonePage;
