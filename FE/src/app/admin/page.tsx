'use client';

import NavAdmin from '@/components/auth/NavAdmin';
import Form from '../../components/auth/Form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const AdminPage = () => {
    const initialState = {
        brand: '',
        title: '',
        ram: '',
        originalPrice: '',
        salePrice: '',
        promotionPercent: '',
        desc: '',
        storage: '',
        battery: '',
    };
    const router = useRouter();
    const [post, setPost] = useState(initialState);
    let token: string | null;
    if (typeof localStorage !== 'undefined') {
        token = localStorage.getItem('token');
    }
    const createProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(post),
            });

            if (response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return <Form post={post} setPost={setPost} handleSubmit={createProduct} />;
};

export default AdminPage;
