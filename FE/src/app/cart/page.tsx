'use client';
import { useSelector } from 'react-redux';
import ProductCounter from '@/components/counter/ProductCounter';
import FormCart from '@/components/cart/FormCart';
import FormatPrice from '@/components/FormatPrice';


const CartPage = () => {
    const { value, products } = useSelector((state) => state.counter);

    const totalCost = products.reduce((acc, product) => {
        return acc + product.salePrice * product.quantity;
    }, 0);

    return (
        <div className="padding">
            <div className="shadow-xl p-4 mx-20 space-y-8 max-lg:mx-2 lg:mx-10">
                <div className="flex justify-between">
                    <span className="text-blue-custom">{'<'} Mua thêm sản phẩm khác</span>
                    <span>Giỏ hàng của bạn</span>
                </div>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div
                            key={product._id}
                            className="grid grid-cols-3 border-b-2 mx-[30%] lg:mx-[30%] p-2 center  max-lg:mx-2 max-lg:grid max-lg:grid-cols-2 max-lg:items-center "
                        >
                            <img src={product.main_image} alt={product.title} width="100px" className="" />
                            <div className="space-y-2 max-lg:px-2 max-lg:text-base">
                                <h2>{product.title}</h2>
                                <p className="">
                                    <FormatPrice price={product.salePrice} /> <span>đ</span>
                                </p>
                            </div>
                            <ProductCounter product={product} />
                        </div>
                    ))
                ) : (
                    <p className="flex justify-center ">Giỏ hàng của bạn trống</p>
                )}

                <p className="flex justify-center font-semibold text-xl max-lg:text-base  max-lg:font-bold">
                    Tổng tiền:
                    <span className="text-red-600 font-bold ml-4 max-lg:text:base  max-lg:font-bold">
                        <FormatPrice price={totalCost} />đ
                    </span>
                </p>
            </div>
            <FormCart />
        </div>
    );
};

export default CartPage;
