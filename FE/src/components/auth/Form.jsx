'use client';
import { useForm } from 'react-hook-form';
import { createProduct } from '../constants/data.mocks';
import FileBase64 from 'react-file-base64';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Form({ handleProduct }) {
    const [fileData, setFileData] = useState('');
    const handleFileUpload = (file) => {
        setFileData(file.base64); 
      };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const formData = { ...data, main_image: fileData };
        reset(); 
        handleProduct(formData);
        toast.success('Tạo sản phẩm mới thành công!');
    };
    return (
        <div className="bg-[#f2f4f7] py-6">
            <div className="w-[1200px] mx-auto bg-white rounded-lg p-5">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    {createProduct.map((item, i) => (
                        <div key={i} className="flex gap-2.5">
                            <p className="normal-case w-[20%]">{item.name}:</p>
                            <input
                                defaultValue=""
                                {...register(item.value, { required: 'Required' })}
                                className="border p-1 rounded-lg w-[60%]"
                            />
                            {errors[item.value] && <p className="mx-auto">{errors[item.value].message}</p>}
                        </div>
                    ))}
                    <span>Hình ảnh:</span>
                    <FileBase64
                        multiple={false}
                        onDone={handleFileUpload}
                    />
                   
                    <button
                        type="submit"
                        className="w-[170px] h-9 py-2.5 flex items-center justify-center rounded-lg border cursor-pointer bg-[#288AD6] text-white mx-auto"
                    >
                        Submit
                    </button>
                </form>
                <Toaster  position="top-center"/>
            </div>
        </div>
    );
}

export default Form;
