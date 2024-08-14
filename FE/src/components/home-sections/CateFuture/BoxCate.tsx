import React from 'react';

function BoxCate({ value }) {
    return (
        <div className="items-center p-4">
            <img src={value.image.src} alt="san pham" width={44} height={55} />
            <div className="flex flex-1 flex-col w-full max-sm:w-full text-sm">{value.title}</div>
        </div>
    );
}

export default BoxCate;
