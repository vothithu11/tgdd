export const dynamic = 'force-dynamic';
import { fetchLaptopProducts } from '@/api';
import ProductsPage from '@/components/products-page';
import { filterDataLaptop } from '@/components/products-page/products-data.mocks';
interface SearchParams {
    category?: string;
    brand?: string;
    ram?: number;
    type?: string;
    screen?: number;
    storage?: number;
    charger?: number;
    price?: number;
    pricerange?: number;
    page?: number;
    limit?: number;
    keyword?:string,
}

interface LaptopPageProps {
    searchParams?: SearchParams;
}
const LaptopPage = async ({ searchParams }:LaptopPageProps) => {
    const products = await fetchLaptopProducts({ searchParams });
    return (
        <div>
             <ProductsPage products={products}  filterData={filterDataLaptop}/>
        </div>
    );
};

export default LaptopPage;