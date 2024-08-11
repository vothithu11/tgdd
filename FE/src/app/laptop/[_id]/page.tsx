import ProductDetail from '@/components/productDetail/ProductDetail';
import { url } from '@/datas/data';
const LaptopProduct = async (props) => {
    const _id = props?.params?._id;
    const res = await fetch(`${url}/posts/${_id}`);
    const dataProduct = await res.json();

    return <ProductDetail dataProduct={dataProduct} />;
};

export default LaptopProduct;
