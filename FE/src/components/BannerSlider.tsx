'use client';
import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BannerSlider = ({ images, numVisible = 2 }) => {
    const [index, setIndex] = useState(0);

    const prevImage = () => {
        setIndex((prevIndex) => wrap(0, images.length, prevIndex - numVisible));
    };

    const nextImage = () => {
        setIndex((prevIndex) => wrap(0, images.length, prevIndex + numVisible));
    };

    const getVisibleImages = () => {
        let visibleImages = [];
        for (let i = 0; i < numVisible; i++) {
            const imageIndex = wrap(0, images.length, index + i);
            visibleImages.push(images[imageIndex]);
        }
        return visibleImages;
    };

    return (
        <div className=" relative flex items-center">
            <div
                className="absolute -left-5 z-10 w-10 h-10 p-3 rounded-full bg-slate-200 center cursor-pointer"
                onClick={prevImage}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="flex w-full">
                <AnimatePresence>
                    {getVisibleImages().map((image, i) => (
                        <motion.img
                            className="rounded-lg pr-2 last:pr-0"
                            key={image.src}
                            src={image}
                            alt=""
                            style={{ width: `${100 / numVisible}%`, height: '100%' }}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 50 }}
                        />
                    ))}
                </AnimatePresence>
            </div>
            <div
                className="absolute -right-5 z-10 w-10 h-10 p-3 rounded-full bg-slate-200 center cursor-pointer"
                onClick={nextImage}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
};

export default BannerSlider;
