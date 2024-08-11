import { menuBar } from '@/datas/data';
import Nav from './Nav';
import MenuBar from './MenuBar';
function Header() {
    return (
        <div className="">
            <header className="w-full padding bg-[#FFE8B9]">
                <img src="/image/banner.png" alt="banner" />
            </header>
            <nav className="padding bg-[#FFD400] w-full h-28 ">
                <Nav />
                <MenuBar menuBar={menuBar} />
            </nav>
        </div>
    );
}

export default Header;
