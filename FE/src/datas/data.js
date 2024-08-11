import {
    faMobileScreenButton,
    faLaptop,
    faTabletScreenButton,
    faHeadphones,
    faClock,
    faDesktop,
} from '@fortawesome/free-solid-svg-icons';
export const menuBar = [
    {
        title: 'Điện thoại',
        id: 1,
        icon: faMobileScreenButton,
        completed: false,
        link: '/phone',
    },
    {
        title: 'Laptop',
        id: 2,
        icon: faLaptop,
        completed: false,
        link: '/laptop',
    },
    {
        title: 'Tablet',
        id: 3,
        icon: faTabletScreenButton,
        completed: false,
        link: '/',
    },
    {
        title: 'Phụ kiện',
        id: 4,
        icon: faHeadphones,
        completed: true,
        link: '/',
    },
    {
        title: 'Smartwatch',
        id: 5,
        icon: faClock,
        completed: false,
        link: '/',
    },
    {
        title: 'Đồng hồ',
        id: 6,
        icon: faClock,
        completed: false,
        link: '/',
    },
    {
        title: 'Máy cũ, thu cũ',
        id: 7,
        icon: faMobileScreenButton,
        completed: true,
        link: '/',
    },
    {
        title: 'PC, Máy in',
        id: 8,
        icon: faDesktop,
        completed: true,
        link: '/',
    },
    {
        title: 'Sim, Thẻ cào',
        id: 9,
        icon: faDesktop,
        completed: false,
        link: '/',
    },
    {
        title: 'Dịch vụ tiện ích',
        id: 10,
        icon: faDesktop,
        completed: true,
        link: '/',
    },
];
export const bannerContent = [
    {
        title: 'Smartphone Đặc Quyền',
        id: 1,
        image: './image/banner-content1.png',
    },
    {
        title: 'Phụ kiện giảm đến 50%',
        id: 2,
        image: './image/banner-content2.png',
    },
    {
        title: 'Laptop xả kho Giảm đến 35%',
        id: 3,
        image: './image/banner-content3.png',
    },
    {
        title: 'Giảm đến 50+++',
        id: 4,
        image: './image/banner-content4.png',
    },
];
export const cateFuture = [
    {
        title: 'Điện thoại',
        image: './image/dtdd.png',
    },
    {
        title: 'Laptop',
        image: './image/laptop.png',
    },
    {
        title: 'Tablet',
        image: './image/tablet.png',
    },
    {
        title: 'Đồng hồ thông minh',
        image: './image/donghothongminh.png',
    },
    {
        title: 'Máy cũ giá rẻ',
        image: './image/maycugiare.png',
    },
    {
        title: 'Ốp lưng',
        image: './image/oplung.png',
    },
    {
        title: 'Chuột máy tinh',
        image: './image/chuotmaytinh.png',
    },
    {
        title: 'Bàn phím',
        image: './image/donghothongminh.png',
    },
    {
        title: 'Sim, thẻ cào',
        image: './image/donghothongminh.png',
    },
    {
        title: 'Đồng hồ thời trang',
        image: './image/donghothoitrang.png',
    },
    {
        title: 'Loa',
        image: './image/maycugiare.png',
    },
    {
        title: 'Tai nghe',
        image: './image/oplung.png',
    },
    {
        title: 'Sạc dự phòng',
        image: './image/chuotmaytinh.png',
    },
    {
        title: 'Camera',
        image: './image/donghothongminh.png',
    },
    {
        title: 'Cáp sạc',
        image: './image/donghothongminh.png',
    },
    {
        title: 'Máy tính bộ',
        image: './image/donghothoitrang.png',
    },
    {
        title: 'Máy in',
        image: './image/dtdd.png',
    },
    {
        title: 'Màn hình máy tính',
        image: './image/laptop.png',
    },
    {
        title: 'Thẻ nhớ',
        image: './image/tablet.png',
    },
    {
        title: 'Phụ kiện cho laptop',
        image: './image/donghothongminh.png',
    },
];

export const filterDataMobile = [
    {
        items: [
            { name: 'IPHONE', value: 'iphone', image: 'image/logo-iphone.png' },
            { name: 'SAMSUNG', value: 'samsung', image: 'image/logo-samsung.png' },
            { name: 'OPPO', value: 'oppo', image: 'image/logo-oppo.png' },
            { name: 'XIAOMI', value: 'xiaomi', image: 'image/logo-xiaomi.png' },
            { name: 'REALME', value: 'realme', image: 'image/logo-realme.png' },
            { name: 'VIVO', value: 'vivo', image: 'image/logo-vivo.png' },
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
            { name: 'MACBOOK', value: 'macbook', image: 'image/logo-macbook.png' },
            { name: 'HP', value: 'hp', image: 'image/logo-hp.png' },
            { name: 'ASUS', value: 'asus', image: 'image/logo-asus.png' },
            { name: 'DELL', value: 'dell', image: 'image/logo-dell.png' },
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
export const optionPromo = [
    {
        title: 'CHUYÊN TRANG THƯƠNG HIỆU',
        images: [
            {
                name: 'img1',
                subImage: '/image/option1-promo.png',
            },
            {
                name: 'img2',
                subImage: '/image/option2-promo.png',
            },
            {
                name: 'img3',
                subImage: '/image/option3-promo.png',
            },
        ],
    },
    {
        title: 'CHUỖI MỚI DEAL KHỦNG',
        images: [
            {
                name: 'img1',
                subImage: '/image/option1-promo.png',
            },
            {
                name: 'img2',
                subImage: '/image/option2-promo.png',
            },
            {
                name: 'img3',
                subImage: '/image/option3-promo.png',
            },
        ],
    },
];
export const footerData = [
    'Tích điểm Quà tặng VIP',
    'Lịch sử mua hàng',
    'Tìm hiểu về mua trả góp',
    'Chính sách bảo hành',
    'Giới thiệu công ty (MWG.vn)',
    'Tuyển dụng',
    'Gửi góp ý, khiếu nại',
    'Tìm siêu thị (3.043 shop)',
    'Tổng đài hỗ trợ',
];

export const menuBarAdmin = [
    {
        title: 'My profile',
        id: 1,
        link: '/admin/profile',
    },
    {
        title: 'Create Product',
        id: 2,
        link: '/admin/create',
    },
];
export const images = [
    '/image/banner1.png',
    '/image/banner2.png',
    '/image/banner3.png',
    '/image/banner4.png',
    '/image/banner5.png',
    '/image/banner1.png',
    '/image/banner2.png',
    '/image/banner3.png',
    '/image/banner4.png',
    '/image/banner5.png',
];
