'use client';
import Auth from '@/components/auth/Auth';
import { saveName } from '@/components/slice/nameUserSlice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AuthPage = () => {
    const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const switchMode = () => setIsSignup((prev) => !prev);
    const router = useRouter();
    const auth = async (e:React.FormEvent) => {
        e.preventDefault();
        const endpoint = isSignup ? 'signup' : 'signin';
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/users/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.result));
                dispatch(saveName(localStorage.getItem('user')));
                if (data.result.isAdmin) {
                    router.push('/admin/orders');
                } else {
                    router.push('/');
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        
            <Auth
                handleSubmit={auth}
                handleChange={handleChange}
                formData={formData}
                isSignup={isSignup}
                switchMode={switchMode}
            />
      
    );
};

export default AuthPage;
