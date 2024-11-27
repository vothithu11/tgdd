export const dynamic = 'force-dynamic';
import { fetchLaptop } from '@/api';
import { IProduct, ISearchParams } from '@/components/type';
import ProductsLayout from '@/components/ProductsLayout';
import Filter from '@/components/Filter';
import { filterDataLaptop, filterDataLaptopPopular } from '@/components/data.mocks';
interface ILaptopPage {
    searchParams: ISearchParams;
}

const LaptopPage = async ({ searchParams }: ILaptopPage) => {
    const products: IProduct[] = await fetchLaptop({
        brand: [searchParams.brand].flat(),
        ram: [searchParams.ram].flat(),
        storage: [searchParams.storage].flat(),
        demand: [searchParams.demand].flat(),
        salePrice: searchParams.salePrice,
        sort: searchParams.sort,
    });
    return (
        <ProductsLayout quantity={products?.length} title="Laptop" products={products}>
            <Filter filterData={filterDataLaptop} filterDataPopular={filterDataLaptopPopular} />
        </ProductsLayout>
    );
};

export default LaptopPage;
