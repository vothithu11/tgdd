import React from 'react';
import { fetchData } from '@/action';

const Test = async () => {
    const data = await fetchData(4);
    const products = data.docs;
    return (
        <div>
            {products.map((item) => (
                <p key={item.id}>{item.brand}</p>
            ))}
        </div>
    );
};

export default Test;
