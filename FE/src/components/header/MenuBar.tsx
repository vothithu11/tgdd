// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping, faSortDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import SubMenuBar from './SubMenuBar';
// import Link from 'next/link';

// function MenuBar({ menuBar }) {
//     return (
//         <section className="py-8 w-full h-11 max-xl:hidden">
//             <div className="center text-sm">
//                 {menuBar.map((menu) => (
//                    <div className="relative group" key={menu.id}>
//                    <Link href={menu.link}>
//                        <div className="center space-x-3">
//                            <FontAwesomeIcon icon={menu.icon} />
//                            <div>{menu.title}</div>
//                            {menu.completed && <FontAwesomeIcon icon={faSortDown} />}
//                        </div>
//                    </Link>
//                    {menu.completed && (
//                        <div className="hidden group-hover:block before:content-[''] before:absolute before:w-full before:h-10 before:opacity-0">
//                            <SubMenuBar submenu={menu.submenu} />
//                        </div>
//                    )}
//                </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default MenuBar;
'use client'

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"
import { menuBar } from '@/components/constants/data.mocks'

export const MenuBar = () => {
    const [openMenuBar,setOpenMenuBar] = useState(false)
  return (
    <div className="w-full h-full flex items-center justify-center relative" onClick={()=>setOpenMenuBar(prev=>!prev)}>
          <FontAwesomeIcon icon={faBars} className="w-6 h-5" />
          {openMenuBar && (
             <div className="flex flex-col justify-center items-center gap-8 w-[100vw] h-[calc(100vh-106px)] leading-[16px] absolute -left-2.5 top-12 bg-[#f2f4f7] z-50">
             {menuBar.map((menu) => (
                 <Link href={menu.link} key={menu.id}>
                     <div className=" flex justify-between gap-[5px] items-center hover:text-blue-custom">
                         <FontAwesomeIcon icon={menu.icon} className='w-5 h-5'/>
                         <div>{menu.title}</div>
                        </div>
                 </Link>
             ))}
         </div>

          )}
    </div>
  )
}
