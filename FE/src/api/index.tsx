'use server';
interface SearchParams {
    category?: string;
    brand?: string;
    ram?: number;
    type?: string;
    screen?: number;
    storage?: number;
    charger?: number;
    price?: number;
    pricerange?: number;
    page?: number;
    limit?: number;
    keyword?:string,
}

interface FetchProductsProps {
    searchParams?: SearchParams;
}

interface FetchProductDetailProps {
    _id: string;
}
export const fetchProducts = async (props: FetchProductsProps) => {
    try {
        const {
            keyword='',
        } = props?.searchParams || {};

        const res = await fetch(
            `${process.env.NEXT_DOMAIN_URL}/posts?keyword=${keyword}`, 
            { cache: 'no-store' }
        );

        const data = await res.json();
        const products = data.docs || [];
        return products;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchPhoneProducts = async (props: FetchProductsProps) => {
    try {
        const {
            brand = '',
            pricerange='',
            ram = '',
            type = '',
            screen = '',
            storage = '',
            charger = '',
            price = '',
            page = 1,
            limit = 10,
        } = props?.searchParams || {};

        const res = await fetch(
            `${process.env.NEXT_DOMAIN_URL}/posts?category=phone&brand=${brand}&ram=${ram}&type=${type}&screen=${screen}&storage=${storage}&charger=${charger}&price=${price}&pricerange=${pricerange}&page=${page}&limit=${limit}`,
            
            { cache: 'no-store' }
        );

        const data = await res.json();
        const products = data.docs || [];
        return products;
    } catch (error) {
        console.error(error);
    }
};
export const fetchLaptopProducts = async (props: FetchProductsProps) => {
    try {
        const {
            brand = '',
            pricerange='',
            ram = '',
            type = '',
            screen = '',
            storage = '',
            charger = '',
            price = '',
            page = 1,
            limit = 10,
        } = props?.searchParams || {};

        const res = await fetch(
            `${process.env.NEXT_DOMAIN_URL}/posts?category=laptop&brand=${brand}&ram=${ram}&type=${type}&screen=${screen}&storage=${storage}&charger=${charger}&price=${price}&pricerange=${pricerange}&page=${page}&limit=${limit}`,
            
            { cache: 'no-store' }
        );

        const data = await res.json();
        const products = data.docs || [];
        return products;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchProductDetail = async (_id: FetchProductDetailProps) => {
    try {
        const res = await fetch(`${process.env.NEXT_DOMAIN_URL}/posts/${_id}`, { cache: 'no-store' });
        const data = await res.json();
        return data; 
    } catch (error) {
        console.error('Error fetching product detail:', error);
        return null; 
    }
}

