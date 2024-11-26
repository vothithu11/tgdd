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
    keyword?: string;
}

interface FetchProductsProps {
    searchParams?: SearchParams;
}

interface FetchProductDetailProps {
    _id: string;
}
export const fetchProducts = async (props: FetchProductsProps) => {
    try {
        const { keyword = '' } = props?.searchParams || {};

        const res = await fetch(`${process.env.NEXT_DOMAIN_URL}/posts?keyword=${keyword}`, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await res.json();
        return products;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchPhone = async (filters) => {
    const { category = 'phone', brand = [], type = [], ram = [],storage = [], salePrice = [0,50000000], sort} = filters;
 
    const brandQuery = brand.length >0 ? `&brand=${brand.join('&brand=')}` : '';
    const ramQuery = ram.length >0  ? `&ram=${ram.join('&ram=')}` : '';
    const storageQuery = storage.length >0  ? `&storage=${storage.join('&storage=')}` : '';
    const typeQuery = type.length >0  ? `&type=${type.join('&type=')}` : '';
     const url = `${process.env.NEXT_DOMAIN_URL}/posts?category=${category}&sort=${sort}${brandQuery}${typeQuery}${ramQuery}${storageQuery}&salePrice[gte]=${salePrice[0]}&salePrice[lte]=${salePrice[1]}`;

   
   console.log('url',url)
    try {
        const res = await fetch(url, {
            cache: 'no-store',
        });
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        console.log(data); 
        return data;
    } catch (error) {
        console.error(error);
    }
};
export const fetchLaptop = async (filters) => {
    const { category = 'laptop', brand = [], ram = [],storage = [],demand=[], salePrice = [0,50000000], sort } = filters;
 
    const brandQuery = brand.length >0 ? `&brand=${brand.join('&brand=')}` : '';
    const ramQuery = ram.length >0  ? `&ram=${ram.join('&ram=')}` : '';
    const demandQuery = demand.length >0  ? `&demand=${demand.join('&demand=')}` : '';
    const storageQuery = storage.length >0  ? `&storage=${storage.join('&storage=')}` : '';
     const url = `${process.env.NEXT_DOMAIN_URL}/posts?category=${category}&sort=${sort}${brandQuery}${ramQuery}${storageQuery}${demandQuery}&salePrice[gte]=${salePrice[0]}&salePrice[lte]=${salePrice[1]}`;
   

    try {
        const res = await fetch(url, {
            cache: 'no-store',
        });
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
export const fetchPhoneProducts = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_DOMAIN_URL}/posts?category=phone`, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
export const fetchLaptopProducts = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_DOMAIN_URL}/posts?category=laptop`, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchProductDetail = async (_id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_DOMAIN_URL}/posts/${_id}`, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error('Failed to fetch product');
        }
        const data = (await res.json()) || [];
        return data;
    } catch (error) {
        console.error('Error fetching product detail:', error);
        return null;
    }
};

export const createOrder = async(orders)=>{
    console.log(orders,'hgdfd')
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/orders`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(orders),  
          });
          if(response.ok){
            console.log('ok')
          }
    } catch (error) {
        console.error(error);
    }
}
