import { menuBar } from './data.mocks';
import Nav from './Nav';
import MenuBar from './MenuBar';
import banner from './assets/banner.png'
import Link from 'next/link';
import NavAdmin from '../auth/NavAdmin';

function Header() {
    return (
        <div className="">
            <div className='relative right-0'>

            <Link href='/admin' >
           <span className='border-2 bg-slate-400'>admin</span>
            </Link>
            </div>
            <header className="w-full padding bg-[#FFE8B9]">
                <img src={banner.src} alt="banner" />
            </header>
            <nav className="padding bg-[#FFD400] w-full h-28 ">
                <Nav />
                <MenuBar menuBar={menuBar} />
            </nav>
        </div>
    );
}

export default Header;
