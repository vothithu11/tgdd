'use client';
import Button from '../button/Button';
import Input from './Input';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

const Auth = ({ formData, handleChange, handleSubmit, isSignup, switchMode }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword((prev) => !prev);

    return (
        <div className="text-md font-medium text-gray-900 space-y-4 shadow-lg bg-slate-50 py-4 w-[520px]">
            <div className="mt-6 center-x space-x-2">
                <FontAwesomeIcon icon={faLock} />
                <button className="">{isSignup ? 'SIGN-UP' : 'SIGN-IN'}</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-2 px-4 ">
                {isSignup && (
                    <>
                        <Input
                            name={'firstName'}
                            placeholder={'First Name'}
                            label={'First Name'}
                            handleChange={handleChange}
                            type={'text'}
                            value={formData.firstName}
                        />
                        <Input
                            name={'lastName'}
                            placeholder={'Last Name'}
                            label={'Last Name'}
                            handleChange={handleChange}
                            type={'text'}
                            value={formData.lastName}
                        />
                    </>
                )}
                <Input
                    name={'email'}
                    placeholder={'Email Address'}
                    label={'Email Address'}
                    handleChange={handleChange}
                    type={'email'}
                    value={formData.email}
                />
                <Input
                    name={'password'}
                    placeholder={'Password'}
                    label={'Password'}
                    handleChange={handleChange}
                    type={showPassword ? 'text' : 'password'}
                    handleShowPassword={handleShowPassword}
                    value={formData.password}
                />
                {isSignup && (
                    <Input
                        name={'confirmPassword'}
                        placeholder={'Repeat Password'}
                        label={'Repeat Password'}
                        handleChange={handleChange}
                        type={showPassword ? 'text' : 'password'}
                        handleShowPassword={handleShowPassword}
                        value={formData.confirmPassword}
                    />
                )}
                <div className="mt-6 center-x">
                    <Button type="submit" title={'SUBMIT'} color={'red'} bgBtn={'hover:bg-red-500 active:bg-red-700'} />
                </div>
                <div className="mt-6 center-x">
                    <button type="button" onClick={switchMode}>
                        {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Auth;
