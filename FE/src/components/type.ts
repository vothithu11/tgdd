

export interface IProduct {
    _id:string,
    ram: number,
    battery: number,
    camera: number,
    charger: number,
    desc: string,
    main_image: string,
    image: [
        {
            thumbnail: string,
            bigProduct: string,
            title: string,
        }
    ],
    isPromotion: boolean,
    originalPrice: number,
    promotionPercent: number,
    rate: number,
    salePrice: number,
    screen: string,
    storage: number,
    title: string,
    brand: string,
    category: string,
    type: string,
    demand: string,
    quantity?:number,
}  
export interface ISearchParams {
  brand: string[] ,
  ram: string[],
  storage: string[],
  charger: string[],
  type: string[],
  sort: [],
  salePrice: number[],
  demand:string[],
}
export interface IPendingFilter {
    [key:string]: string[]|number[];
}
export interface RootState {
    filter: {
        pendingFilter:IPendingFilter,
        filter:IPendingFilter,
        filterSort:IPendingFilter,
    },
    counter: {
        value: number;
        products: IProduct[];
    };
    placeName:{
        place:string | null,
    }
    userName:{
        name:string | null,
    }
}
export interface IOrder {
    products: {
        title: string;
        quantity: number | undefined;
        salePrice: number;
    }[];
    address: string | null;
    totalPrice: number;
}
export interface IFilterItem{
    name: string, value: string, image?: string | boolean; 
}
export interface IFilterItemPopular extends IFilterItem{
    queryName: string,
}
export interface IFilterData{
    items?: IFilterItem[];
    placeholder: string;
    queryName: string;
}

