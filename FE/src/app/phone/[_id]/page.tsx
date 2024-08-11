import ProductDetail from '@/components/productDetail/ProductDetail';
import { url } from '@/datas/data';

const PhoneProduct = async ({ params }) => {
    const { _id } = params || {};

    try {
        const res = await fetch(`${url}/posts/${_id}`, { cache: 'no-store', next: { revalidate: 0 } });
        if (!res.ok) {
            return <div>Error: {res.statusText}</div>;
        }

        const dataProduct = await res.json();

        if (!dataProduct) {
            return <div>Error: Detail data is undefined</div>;
        }

        return <ProductDetail dataProduct={dataProduct} />;
    } catch (error) {
        return <div>Error: {error.message}</div>;
    }
};

export default PhoneProduct;