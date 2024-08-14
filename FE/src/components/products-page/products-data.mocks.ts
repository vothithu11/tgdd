import logo_iphone from './assets/logo-iphone.png';
import logo_samsung from './assets/logo-samsung.png';
import logo_oppo from './assets/logo-oppo.png';
import logo_xiaomi from './assets/logo-xiaomi.png';
import logo_realme from './assets/logo-realme.png';
import logo_vivo from './assets/logo-vivo.png';
import logo_macbook from './assets/logo-macbook.png';
import logo_hp from './assets/logo-hp.png';
import logo_asus from './assets/logo-asus.png';
import logo_dell from './assets/logo-dell.png';
export const filterDataMobile = [
    {
        items: [
            { name: 'IPHONE', value: 'iphone', image: logo_iphone },
            { name: 'SAMSUNG', value: 'samsung', image: logo_samsung },
            { name: 'OPPO', value: 'oppo', image: logo_oppo },
            { name: 'XIAOMI', value: 'xiaomi', image: logo_xiaomi },
            { name: 'REALME', value: 'realme', image: logo_realme },
            { name: 'VIVO', value: 'vivo', image: logo_vivo },
        ],
        placeholder: 'HÃNG',
        queryName: 'brand',
    },
    {
        items: [
            { name: 'Dưới 4 triệu', value: 'below4' },
            { name: '4 - 10 triệu', value: '4to10' },
            { name: '10 - 20 triệu', value: '10to20' },
            { name: 'Trên 20 triệu', value: 'above20' },
        ],
        placeholder: 'GIÁ',
        queryName: 'price',
    },
    // {
    //     items: [
    //         { name: 'Chơi game, cấu hình cao', value: '6' },
    //         { name: 'Pin khủng trên 5000mAh', value: '5000' },
    //         { name: 'Chụp hình', value: '12' },
    //         { name: 'Livestream', value: '12' },
    //     ],
    //     placeholder: 'NHU CẦU',
    //     queryName: 'demand',
    // },
    {
        items: [
            { name: '3 GB', value: '3' },
            { name: '4 GB', value: '4' },
            { name: '6 GB', value: '6' },
            { name: '8 GB', value: '8' },
            { name: '12 GB', value: '12' },
        ],
        placeholder: 'RAM',
        queryName: 'ram',
    },
    {
        items: [
            { name: '64 GB', value: '64' },
            { name: '128 GB', value: '128' },
            { name: '256 GB', value: '256' },
            { name: '512 GB', value: '512' },
            { name: '1 TB', value: '1' },
        ],
        placeholder: 'DUNG LƯỢNG LƯU TRỮ',
        queryName: 'storage',
    },
    {
        items: [
            { name: 'Sạc nhanh(từ 20W)', value: '20' },
            { name: 'Sạc siêu nhanh(từ 60W)', value: '60' },
            { name: 'Sạc không dây', value: '0' },
        ],
        placeholder: 'SẠC NHANH',
        queryName: 'charger',
    },
];

export const filterDataLaptop = [
    {
        items: [
            { name: 'MACBOOK', value: 'macbook', image: logo_macbook },
            { name: 'HP', value: 'hp', image: logo_hp },
            { name: 'ASUS', value: 'asus', image: logo_asus },
            { name: 'DELL', value: 'dell', image: logo_dell },
        ],
        placeholder: 'HÃNG',
        queryName: 'brand',
    },
    {
        items: [
            { name: 'Dưới 10 triệu', value: 'below10' },
            { name: '10 - 20 triệu', value: '10to20' },
            { name: '20 - 30 triệu', value: '20to30' },
            { name: 'Trên 30 triệu', value: 'above30' },
        ],
        placeholder: 'GIÁ',
        queryName: 'pricerange',
    },
    {
        items: [
            { name: 'Văn phòng, học tập', value: 'văn-phòng' },
            { name: 'Đồ họa, kỹ thuật', value: 'kỹ-thuật' },
            { name: 'Gaming', value: 'gaming' },
            { name: 'Mỏng nhẹ', value: 'mỏng-nhẹ' },
        ],
        placeholder: 'NHU CẦU',
        queryName: 'demand',
    },
    {
        items: [
            { name: '8 GB', value: '8' },
            { name: '16 GB', value: '16' },
            { name: '32 GB', value: '32' },
            { name: '64 GB', value: '64' },
        ],
        placeholder: 'RAM',
        queryName: 'ram',
    },
    {
        items: [
            { name: 'QQVGA', value: 'qqvga' },
            { name: 'QVGA', value: 'qvga' },
            { name: 'HD+', value: 'hd' },
            { name: 'FULLHD+', value: 'fullhd' },
            { name: '1.5K', value: '1.5k' },
            { name: '1.5K+', value: '1.5k+' },
            { name: '2K+', value: '2k+' },
            { name: 'Retina (Iphone)', value: 'retina' },
        ],
        placeholder: 'MÀN HÌNH',
        queryName: 'screen',
    },
    {
        items: [
            { name: '256 GB', value: '256' },
            { name: '512 GB', value: '512' },
            { name: '1 TB', value: '1' },
            { name: '2 TB', value: '2' },
        ],
        placeholder: 'CPU',
        queryName: 'storage',
    },
];