import { fetchLaptop } from '@/api';
import { IProduct, ISearchParams } from '@/components/type';
import ProductsLayout from '@/components/ProductsLayout';
import Filter from '@/components/Filter';
import {  filterDataLaptop, filterDataLaptopPopular } from '@/components/data.mocks';
interface ILaptopPage {
    searchParams: ISearchParams
}

const LaptopPage = async ({ searchParams }:ILaptopPage) => {
    const products:IProduct[] = await fetchLaptop({
        brand: [].concat(searchParams.brand),
        ram: [].concat(searchParams.ram),
        storage:[].concat(searchParams.storage),
        demand:[].concat(searchParams.demand),
        salePrice: searchParams.salePrice,
        sort:  searchParams.sort,
    });
    return (
     <ProductsLayout quantity={products?.length} title='Laptop' products={products}><Filter filterData={filterDataLaptop} filterDataPopular={filterDataLaptopPopular}/></ProductsLayout>
    );
};

export default LaptopPage;