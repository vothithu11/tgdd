'use client';

import { formatSalePrice } from '@/components/formatSalePrice';
import { IOrder } from '@/components/type';
import { useEffect, useState } from 'react';

function page() {
    const [orders, setOrders] = useState<IOrder[]>([]);
    useEffect(() => {
        const getOrder = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/orders`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                if (response.ok) {
                    console.log('ok');
                }
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error(error);
            }
        };
        getOrder();
    }, []);
    console.log('data order', orders);
    return (
        <div className='w-[1200px] mx-auto'> 
            <h1>Orders</h1>
            <div className='grid grid-cols-3 my-3'>
                {orders.map((order) => (
                    <div key={order._id} className='flex flex-col'>
                        <div>Order Date: {order.date}</div>
                        <div>Name: {order.name}</div>
                        <div>Address: {order.address}</div>
                        <div className='flex flex-col'>Products: {order.products.map((product=><span>{product.title} - {product.quantity} -{formatSalePrice(product.salePrice)}</span>))}</div>
                        <div>ToTal: {formatSalePrice(order.totalPrice)} đ</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default page;
