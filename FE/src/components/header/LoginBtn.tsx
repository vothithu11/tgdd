'use client'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveName } from '../slice/nameUserSlice';
import { useRouter } from 'next/navigation';
import { RootState } from '../type';

function LoginBtn() {
    const [openModal,setOpenModal]=useState(false);
    const [name, setName]=useState<string | null>(null);
    const dispatch = useDispatch();
    const user =useSelector((state:RootState)=>state.userName.name);
    const router = useRouter();
    useEffect(()=>{
        const convertName = localStorage.getItem('user');
        if(convertName){
            setName(JSON.parse(convertName)?.name);
            dispatch(saveName(convertName));
        }else{
            setName(user)
        }
       
    },[user])
    
    const handleLogout =()=>{
        localStorage.removeItem('user');
        localStorage.removeItem('token')
        dispatch(saveName(null))
        router.push('/auth');
    }
    const handleLogin =()=>{
        if(!name){
            router.push('/auth');
        }else{
           setOpenModal(pre=>!pre)
        }
    }
    return (
        <div onClick={handleLogin}>
            <div className='relavtive'>
        <button className="w-[110px] h-full rounded-[32px] text-center flex gap-0.5 items-center justify-center leading-[42px] hover:bg-[#fe9]">
            <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
            <span>{name?name: 'Đăng nhập'}</span>
        </button>
            {openModal && name !==null && <div className='flex absolute z-20 top-[65px] flex-col items-center gap-1.5 bg-slate-100 p-2.5 rounded-lg'>
                <span className="hover:bg-slate-400 w-full px-2.5 py-1 rounded-lg">Orders</span>
                <Link href='/admin'>
                <span className="hover:bg-slate-400 w-full px-2.5 py-1 rounded-lg">Create Product</span>
                </Link>
                <button onClick={handleLogout} className='px-2.5 py-1 rounded-lg bg-orange-400 w-full'>Logout</button>
            </div> }
            </div>
        </div>
    );
}

export default LoginBtn;
