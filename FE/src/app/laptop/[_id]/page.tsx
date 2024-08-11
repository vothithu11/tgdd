import ProductDetail from '@/components/productDetail/ProductDetail';

const LaptopProduct = async (props) => {
    const _id = props?.params?._id;
    const res = await fetch(`${process.env.NEXT_DOMAIN_URL}/posts/${_id}`);
    const dataProduct = await res.json();

    return <ProductDetail dataProduct={dataProduct} />;
};

export default LaptopProduct;
