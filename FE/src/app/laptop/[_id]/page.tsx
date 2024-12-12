import {fetchPhoneProducts, fetchProductDetail} from '@/api';
import ProductDetailLayout from '@/components/ProductDetailLayout';
import { IProduct } from '@/components/type';

const LaptopDetail = async ({params}: { params: { _id: string } } ) => {
    const _id = params._id;
    const dataProduct: IProduct = await fetchProductDetail(_id);
    const dataMore: IProduct[]= await fetchPhoneProducts();

    return (
            <ProductDetailLayout dataProduct={dataProduct} dataMore={dataMore} label='Laptop' />
    );
};

export default LaptopDetail;