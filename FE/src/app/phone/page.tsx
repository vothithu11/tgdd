export const dynamic = 'force-dynamic';
import { fetchPhoneProducts } from '@/api';
import ProductsPage from '@/components/products-page';
import { filterDataMobile } from '@/components/products-page/products-data.mocks';


const PhonePage = async ({ searchParams }) => {
        const products = await fetchPhoneProducts({ searchParams });
    return (
        <div>
            <ProductsPage products={products} filterData={filterDataMobile}/>
        </div>
    );
};

export default PhonePage;
