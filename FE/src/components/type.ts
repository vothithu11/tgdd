

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
  brand: string[] | string ,
  ram: string[] | string,
  storage: string[] | string,
  charger: string[] | string,
  type: string[] | string,
  sort: string,
  salePrice: string,
  salePrice_gte: string,
  demand?:string[] | string,
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
// export interface IOrderProduct{
//     name:string,
//     quantity:number,
//     salePrice:number,
// }
// export interface IOrder{
//     name:string,
//     products:IOrderProduct[],
//     totalPrice:number,
//     phoneNumber:string,
//     address:string,
// }