'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { menuBarAdmin } from '@/datas/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface INameUser {
    name?: string
}

const NavAdmin = () => {
    const [menuBarVisible, setMenuBarVisible] = useState(false);
    const router = useRouter();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/auth');
    };
    let nameUserParse: INameUser | null = null;
    if (typeof localStorage !== 'undefined') {
        const nameUser: string | null = localStorage.getItem('user');
        nameUserParse = nameUser ? JSON.parse(nameUser) : null;
    }
    return (
        <div className="relative z-10 grid grid-cols-2 bg-[#ff6666] h-12 center px-4 rounded-xl">
            <Link href={'/'}>
                <img src="/image/logo-short.png" alt="logo" className="w-10 h-10 rounded-full" />
            </Link>
            <div className="flex items-center space-x-4">
                <button onClick={() => setMenuBarVisible(!menuBarVisible)}>
                    <FontAwesomeIcon icon={faUser} className="h-8" />
                </button>
                {menuBarVisible && (
                    <ul className="absolute left-0 w-[95%] bg-slate-50 p-4 rounded-lg shadow-lg top-[100px] text-sm text-gray-700 dark:text-gray-400">
                        {menuBarAdmin.map((menu) => (
                            <li
                                key={menu.id}
                                className="block px-4 py-2 hover:bg-gray-100 hover:italic dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <Link href={menu.link} className="flex space-x-3">
                                    <p>{menu.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                <nav>
                    {nameUserParse ? (
                        <div className="flex justify-end items-center space-x-4">
                            <p>Welcome, {nameUserParse.name}</p>
                            <button onClick={handleLogout} className="cart-btn">
                                LOG-OUT
                            </button>
                        </div>
                    ) : (
                        <Link href={'/auth'} className="cart-btn">
                            <button type="submit">SIGN-IN</button>
                        </Link>
                    )}
                </nav>
            </div>
        </div>
    );
};
export default NavAdmin;
