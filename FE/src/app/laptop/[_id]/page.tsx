import ProductDetail from '@/components/product-detail';
import { fetchProductDetail } from '@/api';

const LaptopDetail = async (props) => {
    const _id = props?.params?._id;
    const dataProduct = await fetchProductDetail(_id);

    return <ProductDetail dataProduct={dataProduct} />;
};

export default LaptopDetail;
