'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { newsfeed } from './data.mocks';

function NewsFeed() {
    const [newsfeedSelected,setNewsfeedSelected]=useState(0);
    const handleClickTab = (index:number)=>{
     if(index !== newsfeedSelected){
        setNewsfeedSelected(index)
     }
    }
    return (
        <div>
            <div className="flex gap-3 mt-2.5">
                {['24h công nghệ','Hỏi đáp'].map((tab,i)=><button key={i} onClick={()=>handleClickTab(i)} className={`rounded-lg border border-solid py-2 px-4 cursor-pointer ${newsfeedSelected === i ? 'border-[#101828] font-bold text-[#101828] border-2':""} `}>
                    {tab}
                </button>)}
            </div>
            <div className="flex gap-[13px] mt-2.5 mb-4">
                {newsfeed[newsfeedSelected].map((news, i) => (
                    <Link href={'/news/detail'} key={i}>
                        <div className="w-[280px] h-[162px] relative">
                            <Image
                                src={news.img}
                                alt="banner-news"
                                fill
                                quality={100}
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <p>{news.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NewsFeed;
