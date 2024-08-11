import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSortDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SubMenuBar from './SubMenuBar';
import Link from 'next/link';

function MenuBar({ menuBar }) {
    return (
        <section className="py-8 w-full h-11 max-xl:hidden">
            <ul className="center text-sm">
                {menuBar.map((menu) => (
                    <Link href={menu.link} key={menu.id} className="center space-x-3 ">
                        <FontAwesomeIcon icon={menu.icon} />
                        <li key={menu.id}>{menu.title}</li>
                        {menu.completed && <FontAwesomeIcon icon={faSortDown} />}
                        {/* {menu.completed && <SubMenuBar />} */}
                    </Link>
                ))}
            </ul>
        </section>
    );
}

export default MenuBar;
