export const formatSalePrice = (price) => {
    if (isNaN(price) || price === null || price === undefined) {
        return 'Invalid price';
    }

    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};


