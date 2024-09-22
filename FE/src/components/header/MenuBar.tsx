import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSortDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SubMenuBar from './SubMenuBar';
import Link from 'next/link';

function MenuBar({ menuBar }) {
    return (
        <section className="py-8 w-full h-11 max-xl:hidden">
            <div className="center text-sm">
                {menuBar.map((menu) => (
                   <div className="relative group" key={menu.id}>
                   <Link href={menu.link}>
                       <div className="center space-x-3">
                           <FontAwesomeIcon icon={menu.icon} />
                           <div>{menu.title}</div>
                           {menu.completed && <FontAwesomeIcon icon={faSortDown} />}
                       </div>
                   </Link>
                   {menu.completed && (
                       <div className="hidden group-hover:block before:content-[''] before:absolute before:w-full before:h-10 before:opacity-0">
                           <SubMenuBar submenu={menu.submenu} />
                       </div>
                   )}
               </div>
                ))}
            </div>
        </section>
    );
}

export default MenuBar;
