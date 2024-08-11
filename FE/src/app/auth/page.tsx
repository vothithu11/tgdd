'use client';
import Auth from '@/components/auth/Auth';
import NavAdmin from '@/components/auth/NavAdmin';
import { url } from '@/datas/data';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
const AuthPage = () => {
    const [formData, setFormData] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const switchMode = () => setIsSignup((prev) => !prev);
    const router = useRouter();
    const auth = async (e) => {
        e.preventDefault();
        const endpoint = isSignup ? 'signup' : 'signin';
        try {
            const response = await fetch(`${url}/users/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.result));
                console.log('Token saved to localStorage:', localStorage.getItem('token'));
                console.log('User saved to localStorage:', localStorage.getItem('user'));
            }
            console.log(data);
            if (response.ok) {
                router.push('/admin');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="background-auth padding padding-y">
            <NavAdmin />
            <Auth
                handleSubmit={auth}
                handleChange={handleChange}
                formData={formData}
                isSignup={isSignup}
                switchMode={switchMode}
            />
        </div>
    );
};

export default AuthPage;
