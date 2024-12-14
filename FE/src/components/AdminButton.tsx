'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveName } from './slice/nameUserSlice';
import { RootState } from './constants/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBox, faDatabase, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

function AdminButton() {
    const [name, setName] = useState<string | null>(null);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.userName.name);
    useEffect(() => {
        const convertName = localStorage.getItem('user');
        if (convertName) {
            setName(JSON.parse(convertName)?.name);
            dispatch(saveName(convertName));
            setIsAdmin(JSON.parse(convertName)?.isAdmin);
        } else {
            setName(user);
        }
    }, [user]);

    const handleLogout =()=>{
        localStorage.removeItem('user');
        localStorage.removeItem('token')
        dispatch(saveName(null))
        window.location.href = '/auth';
    }
   
    return (
        <div className='py-5'>
            <div className='flex justify-between'>
       <Image src='/logo.png' alt='logo'  width={240} height={53} quality={100} className=''/>
           
            <div className=" flex justify-end gap-5 text-blue-custom">
                <button className="w-max h-[40px] py-1 px-5 text-center flex gap-2 items-center justify-around border border-[#ffe14c] bg-white rounded-2xl hover:bg-[#fe9] max-lg:bg-[#ffe14c]">                
                <Image src='/avt.png' alt='avatar'  width={40} height={40} quality={100} className='w-9 h-9 rounded-full'/>
                    <span className='uppercase'>{name}</span>
                </button>
                <Link href='/admin/create'>
                <button className="w-max h-[40px] py-1 px-5 text-center flex gap-2 items-center justify-around border border-[#ffe14c] bg-white rounded-2xl hover:bg-[#fe9] max-lg:bg-[#ffe14c]">
                <FontAwesomeIcon icon={faDatabase} className='w-5 h-4' /> <span> Create Product</span>
                </button>
                </Link>
                <Link href='/admin/orders'>
                <button className="w-max h-[40px] py-1 px-5 text-center flex gap-2 items-center justify-around border border-[#ffe14c] bg-white rounded-2xl hover:bg-[#fe9] max-lg:bg-[#ffe14c]">
                <FontAwesomeIcon icon={faBox} className='w-5 h-4' /> <span>Orders</span> 
                </button>
                </Link>
                <button onClick={handleLogout} className="w-max h-[40px] py-1 px-5 text-center flex gap-2 items-center border-[#ffe14c] justify-around border bg-white rounded-2xl hover:bg-[#fe9] max-lg:bg-[#ffe14c]">
                    <span>Log-out</span><FontAwesomeIcon icon={faArrowRightFromBracket} className='w-5 h-4' />
                </button>
            </div>
            </div>
        </div>
    );
}

export default AdminButton;
