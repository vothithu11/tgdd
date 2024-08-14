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




