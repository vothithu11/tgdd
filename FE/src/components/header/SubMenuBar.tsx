import React from 'react';

function SubMenuBar({ submenu }) {
    return (
        <div
            className="absolute z-50 p-2.5 w-[150%] rounded bg-white top-[120%] right-0 mx-auto before:content-[''] before:absolute before:-top-1 before:right-4 before:w-4 before:h-4 before: before:bg-white before:rotate-45"
            style={{ boxShadow: '0px 4px 6px rgba(214, 214, 214, 0.5)' }}
        >
            <div className=''>
                {submenu.map((submenu) => (
                    <div className="" key={submenu.title}>
                        <p className='font-bold border-b border-b-gray-200 py-2 mb-2'>{submenu.title}</p>
                        <div className='space-y-2'>
                            {submenu.sub.map((sub: string) => (
                                <span className='block' key={sub}>{sub}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SubMenuBar;
