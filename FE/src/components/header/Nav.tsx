'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSortDown, faBars } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { menuBar } from './data.mocks';
import { useState } from 'react';
import logo from './assets/logo.png';
import AddressForm from './AddressForm';
import { createPortal } from 'react-dom';

function Nav() {
    const count = useSelector((state) => state.counter.value);
    const [menuBarVisible, setMenuBarVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal((pre) => !pre);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const place = useSelector(state=>state.placeName.place);
   


    return (
        <nav className="w-full h-11 py-4 max-lg:py-1">
            <ul className="w-full h-11 p-2.5 text-sm center max-lg:p-1 max-xl:hidden">
                <li className="">
                    <Link href="/">
                        <img src={logo.src} alt="logo" className="w-40 h-8" />
                    </Link>
                </li>
                <li className="text-xs max-xl:hidden">
                    <button className="text-xs space-x-2 bg-[#FFBC06] h-12 px-2" onClick={handleOpenModal}>
                        <span>Xem giá tồn kho, tại:</span>
                        <FontAwesomeIcon icon={faSortDown} className="" />
                        <div className="font-bold">{place}</div>
                    </button>
                    {showModal &&
                        createPortal(
                            <div className="modal">
                                <AddressForm onClose={handleCloseModal} />
                            </div>,
                            document.body,
                        )}
                </li>
                <li className="max-xl:hidden">
                    <SearchBar text={'Bạn tìm gì ...'} />
                </li>
                <li className="text-xs bg-[#FFBC06] h-12 px-2 center max-xl:hidden">
                    <a>
                        Tài khoản &<br /> Đơn hàng
                    </a>
                </li>
                <li className="text-xs h-11">
                    <Link href="/cart">
                        <button className=" bg-[#FFBC06] h-full px-2 space-x-2">
                            <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
                            <span className="">
                                <span className="max-xl:hidden"> Giỏ hàng </span> ({count})
                            </span>
                        </button>
                    </Link>
                </li>
                <li className="max-xl:hidden">
                    <a>24h Công nghệ</a>
                </li>
                <li className="max-xl:hidden">
                    <a>Hỏi đáp</a>
                </li>
                <li className="max-xl:hidden">
                    <a>Game App</a>
                </li>
            </ul>
            <div className="hidden max-xl:min-h-5 max-xl:bg-[#FFBC06] max-xl:grid max-xl:grid-cols-3 relative z-10 items-center justify-items-center px-3.5">
                <div className="justify-self-start">
                    <Link href="/">
                        <img src={logo.src} alt="logo" className="w-40 h-8" />
                    </Link>
                </div>

                <div className="text-xs h-11 justify-self-center mb-0.5">
                    <Link href="/cart">
                        <button className=" bg-[#FFBC06] h-full px-1 ">
                            <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
                            <span className="">
                                <span className="max-xl:hidden"> Giỏ hàng </span> ({count})
                            </span>
                        </button>
                    </Link>
                </div>
                <div className='justify-self-end'>
                    <button onClick={() => setMenuBarVisible(!menuBarVisible)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    {menuBarVisible && (
                        <ul className="absolute left-0 w-[95%] bg-slate-50 p-4 rounded-lg shadow-lg z-100 top-[100px] text-sm text-gray-700 dark:text-gray-400">
                            {menuBar.map((menu) => (
                                <li
                                    key={menu.id}
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <Link href={menu.link} className="flex space-x-3">
                                        <FontAwesomeIcon icon={menu.icon} />
                                        <p>{menu.title}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="my-2 col-span-3">
                    <SearchBar text={'Bạn tìm gì ...'} />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
