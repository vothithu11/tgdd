'use client';
import Auth from '@/components/auth/Auth';
import NavAdmin from '@/components/auth/NavAdmin';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signin} from '../../components/counter/nameUserSlice';

const AuthPage = () => {
    const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
    const dispatch = useDispatch();
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
            const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/users/${endpoint}`, {
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
                dispatch(signin({ name: data.result.name }));
                router.push('/admin');
            }
            if (response.ok) {
                router.push('/admin');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className=" padding padding-y center-x bg-custom-gradient">
            {/* <NavAdmin /> */}
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
