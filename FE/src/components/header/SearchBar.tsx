'use client'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import querystring from 'querystring';

function SearchBar({className}:{className?:string}) {
  const [keyword, setKeyword] = useState('');

  const router = useRouter();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newSearchParams = new URLSearchParams();
      newSearchParams.set('keyword', keyword);

      const paramsObject = Object.fromEntries(newSearchParams.entries());

      const newUrl = `/search?${querystring.stringify(paramsObject)}`;
      router.push(newUrl);
      setKeyword('');
  };
  return (
    <form className= { `h-[40px] w-[415px] bg-white rounded-[32px] flex items-center max-lg:flex-1 max-lg:rounded-none ${className}`} onSubmit={handleSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='ml-3 text-gray-400 w-[17px] h-[17px]' />
        <input value={keyword} type="text" placeholder='Bạn tìm gì...' className='bg-transparent flex-1 h-full border-none outline-none p-2 leading-[14px]' onChange={(e)=>setKeyword(e.target.value)}/>
    </form>
  )
}

export default SearchBar