import { fetchLaptopProducts, fetchProductDetail} from '@/api';
import ProductDetailLayout from '@/components/ProductDetailLayout';
import { IProduct } from '@/components/type';

const PhoneDetail = async ({params}: { params: { _id: string } } ) => {
    const _id = params._id;
    const dataProduct: IProduct = await fetchProductDetail(_id);
    const dataMore: IProduct[]= await fetchLaptopProducts();

    return (
        <ProductDetailLayout dataProduct={dataProduct} dataMore={dataMore} label='Điện thoại' />
    );
};

export default PhoneDetail;
