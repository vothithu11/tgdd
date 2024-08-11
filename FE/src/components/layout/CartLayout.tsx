import React from 'react';
import Header from '../header/Header';

const CartLayout = ({ children }) => {
    return (
        <main className="relative">
            <Header />

            <section className="padding">
                <div className="flex justify-between">
                    <span className="text-blue-custom">{'<'} Mua thêm sản phẩm khác</span>
                    <span>Giỏ hàng của bạn</span>
                </div>

                {children}
            </section>
        </main>
    );
};

export default CartLayout;
