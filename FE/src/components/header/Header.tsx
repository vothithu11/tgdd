import Image from 'next/image';
import SearchBar from './SearchBar';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuBar } from './data.mocks';
import Link from 'next/link';
import CartHeader from '../CartHeader';
import Address from './Address';
import LoginBtn from './LoginBtn';
function Header() {
    return (
        <header className="bg-[#ffd500] h-[96px] text-sm text-[#333]">
            <div className=" flex flex-col items-center w-[1200px] mx-auto h-full pt-2.5">
                {/* top */}
                <div className="flex justify-between gap-2.5 h-[52px] w-full">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={228}
                            height={40}
                            quality={100}
                            priority
                            className="object-cover"
                        />
                    </Link>
                    <SearchBar />
                    <LoginBtn />
                    <CartHeader />
                    <Address />
                </div>
                {/* bottom */}
                <div className="flex justify-between items-center gap-[7px] h-auto w-full pt-[5px] leading-[18px]">
                    {menuBar.map((menu) => (
                        <Link href={menu.link} key={menu.id}>
                            <div className="flex justify-between gap-[5px] items-center p-2 w-max hover:bg-[#fe9] rounded-t-lg">
                                <FontAwesomeIcon icon={menu.icon} />
                                <div>{menu.title}</div>
                                {menu.completed && <FontAwesomeIcon icon={faAngleDown} />}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
