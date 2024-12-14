'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { newsfeed } from './constants/data.mocks';

function NewsFeed() {
    const [newsfeedSelected,setNewsfeedSelected]=useState(0);
    const handleClickTab = (index:number)=>{
     if(index !== newsfeedSelected){
        setNewsfeedSelected(index)
     }
    }
    return (
        <div>
            <div className="flex gap-2 mt-2.5">
                {['24h công nghệ','Hỏi đáp'].map((tab,i)=><button key={i} onClick={()=>handleClickTab(i)} className={`rounded-lg border border-solid py-2 px-4 cursor-pointer ${newsfeedSelected === i ? 'border-[#101828] font-bold text-[#101828] border-2':""} `}>
                    {tab}
                </button>)}
            </div>
            <div className="grid grid-cols-4 gap-[13px] mt-2.5 w-full max-md:grid-cols-2">
                {newsfeed[newsfeedSelected].slice(0,4).map((news, i) => (
                    <Link href={`/news/${news.id}`} key={i} >
                        <div className='w-[100%] h-[162px] relative max-lg:h-[110px]'>
                            <Image
                                src={news.img}
                                alt="banner-news"
                                fill
                                sizes='100vh'
                                quality={100}
                                className="rounded-lg object-cover"
                            />
                    </div>
                        <p className='pt-2 leading-5'>{news.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NewsFeed;
