'use client'
import { menuBar } from './data.mocks';
import Nav from './Nav';
import MenuBar from './MenuBar';
import banner from './assets/banner.png'
import NavAdmin from '../auth/NavAdmin';
import { useState } from 'react';


function Header() {
    const [dataPlaces, setDataPlaces] = useState([])
    return (
        <div className="">
            <div className='max-xl:hidden'>
           <NavAdmin/>
            </div>
            <header className="w-full padding bg-[#FFE8B9] max-xl:hidden">
                <img src={banner.src} alt="banner" />
            </header>
            <nav className="padding bg-[#FFD400] w-full max-xl:bg-transparent">
                <Nav dataPlaces= {dataPlaces}/>
                <MenuBar menuBar={menuBar} />
            </nav>
        </div>
    );
}

export default Header;
