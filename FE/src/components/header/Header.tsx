import Image from 'next/image';
import SearchBar from './SearchBar';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuBar } from './data.mocks';
import Link from 'next/link';
import CartHeader from './CartHeader';
import Address from './Address';
import LoginBtn from './LoginBtn';
import { MenuBar } from './MenuBar';
function Header() {
    return (
        <header className="bg-[#ffd500] h-[106.6px] text-sm text-[#333] max-lg:h-[100px]">
            {/* desktop */}
            <div className=" flex flex-col items-center max-w-[1225px] mx-auto h-full pt-2.5 max-lg:hidden">
                {/* top */}
                <div className="flex items-center gap-2.5 h-[53px] w-full pl-2.5 ">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={240}
                            height={53}
                            quality={100}
                            priority
                            className="object-cover mt-1"
                        />
                    </Link>
                    <SearchBar />
                    <LoginBtn />
                    <CartHeader />
                    <Address />
                </div>
                {/* bottom */}
                <div className="flex justify-between items-center gap-[6px] h-[44px] max-w-[1200px] leading-[16px] pt-[5px] -ml-[19px]">
                    {menuBar.map((menu) => (
                        <Link href={menu.link} key={menu.id}>
                            <div className=" h-[39px] flex justify-between gap-[5px] items-center pt-[5px] pb-2.5 px-2.5 w-max hover:bg-[#fe9] rounded-t-lg">
                                <FontAwesomeIcon icon={menu.icon} className='w-5 h-5'/>
                                <div>{menu.title}</div>
                                {menu.completed && <FontAwesomeIcon icon={faAngleDown} className='w-2 h-2' />}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* tablet */}
            <div className="hidden max-lg:flex items-center w-full h-full flex-col gap-[9px] px-2.5 py-0.5">
                <div className="flex items-center justify-between gap-2 w-full">
                    <Link href="/">
                        <Image
                            src="/iconlogo.png"
                            alt="logo"
                            width={41}
                            height={41}
                            quality={100}
                            priority
                            className="object-cover"
                        />
                    </Link>
                    <Address />
                    <LoginBtn />
                </div>
                <div className="flex w-full items-center">
                    <div className="bg-[#f2f4f7] rounded-l-lg h-full w-[52px]">
                      <MenuBar/>
                    </div>
                    <SearchBar className="h-[42px]" />
                    <CartHeader />
                </div>
            </div>
        </header>
    );
}

export default Header;
