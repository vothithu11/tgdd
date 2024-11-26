

import Input from './Input';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
interface IformData{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword?: string; 
}
interface IAuthProps{
    formData: IformData;
    handleChange: (e:React.ChangeEvent<HTMLInputElement>)=> void;
    handleSubmit: (e: React.FormEvent)=> void;
    isSignup: boolean;
    switchMode: ()=>void;
}

const Auth = ({ formData, handleChange, handleSubmit, isSignup, switchMode }:IAuthProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword((prev) => !prev);

    return (
        <div className='bg-[#f2f4f7'>
        <div className="text-md font-medium text-gray-900 space-y-4 shadow-lg bg-[#F1F1F1] py-4 w-[520px] rounded-xl mx-auto my-10">
            <div className="mt-6 flex gap-2.5 justify-center items-center text-white mx-auto py-1 px-2.5 rounded-lg bg-[#288AD6] w-max">
                <FontAwesomeIcon icon={faLock} />
                <button className="">{isSignup ? 'SIGN-UP' : 'SIGN-IN'}</button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5 ">
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
                <div className=" text-white mx-auto py-1 px-2.5 rounded-lg bg-[#288AD6] w-max">
                    <button type="submit"> SUBMIT</button>
                </div>
                <div className="text-center">
                    <button type="button" onClick={switchMode} >
                        {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Auth;
