import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const ProductDetailLayout = ({ children }) => {
    return (
        <main className="relative">
            <Header />
            <section className="padding">{children}</section>
            <section className="bg-slate-50 border-t-2 mt-11">
                <Footer />
            </section>
        </main>
    );
};

export default ProductDetailLayout;
