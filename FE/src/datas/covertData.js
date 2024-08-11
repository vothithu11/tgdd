export const FormatPrice = (price) => {
    if (price === undefined || price === null || isNaN(price)) {
        return 'Invalid price'; // or an empty string ''
    }

    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
