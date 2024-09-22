'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import querystring from 'querystring';

function SearchBar({ text, extraClassInput, extraClassBtn }) {
    const [keyword, setKeyword] = useState('');

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSearchParams = new URLSearchParams();
        newSearchParams.set('keyword', keyword);

        const paramsObject = Object.fromEntries(newSearchParams.entries());

        const newUrl = `/search?${querystring.stringify(paramsObject)}`;
        router.push(newUrl);
        setKeyword('')
    };

    return (
        <form onSubmit={handleSubmit} className="center relative ">
            <input
                type="text"
                placeholder={text}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className={`w-72 h-11 rounded focus:outline-none p-3 px-6 ${extraClassInput}`}
            />
            <button type="submit" className={`absolute w-[36px] h-[36px] top-[10%] right-0 ${extraClassBtn}`}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    );
}

export default SearchBar;
