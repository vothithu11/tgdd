'use client';
import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ProductCard from './productCard/ProductCard';

const BannerSliderComponent = ({ dataPromo, numVisible, bgImage, moreInfo }) => {
    const [index, setIndex] = useState(0);

    const prevImage = () => {
        setIndex((prevIndex) => wrap(0, dataPromo.length, prevIndex - numVisible));
    };

    const nextImage = () => {
        setIndex((prevIndex) => wrap(0, dataPromo.length, prevIndex + numVisible));
    };

    // const getVisibleProducts = () => {
    //     let visibleProducts = [];
    //     for (let i = 0; i < numVisible; i++) {
    //         const productIndex = wrap(0, dataPromo.length, index + i);
    //         visibleProducts.push(dataPromo[productIndex]);
    //     }
    //     return visibleProducts;
    // };

    return (
        <div className="relative flex items-center overflow-hidden">
            <div
                className="absolute left-0 w-10 h-10 py-8 px-0.5 ml-0.5 rounded-r-md opacity-50 hover:opacity-70 hover:drop-shadow-xl z-10 bg-slate-200 flex items-center justify-center cursor-pointer"
                onClick={prevImage}
            >
                <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-10" />
            </div>
            <div className="flex flex-nowrap w-full">
                <AnimatePresence>
                    <motion.div
                        className="flex flex-wrap w-full"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    >
                        {/* {getVisibleProducts().map((product) => (
                            <div key={product._id} className="flex-shrink-0 w-1/5 p-2">
                                <ProductCard product={product} bgImage={bgImage} moreInfo={moreInfo} />
                            </div>
                        ))} */}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div
                className={
                    'absolute right-0 z-10 w-10 h-10 py-8 px-0.5 mr-0.5 rounded-l-md opacity-50 hover:opacity-70 hover:drop-shadow-xl bg-slate-200 flex items-center justify-center cursor-pointer'
                }
                onClick={nextImage}
            >
                <FontAwesomeIcon icon={faChevronRight} className="w-6 h-10" />
            </div>
        </div>
    );
};

export default BannerSliderComponent;
