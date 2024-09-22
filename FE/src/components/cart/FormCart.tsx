import React from 'react';
import { useSelector } from 'react-redux';

const FormCart = () => {
    const place = useSelector(state=>state.placeName.place);
    return (
        <div className="space-y-5 text-black px-7 py-3.5">
            <p className='uppercase'>Thông tin khách hàng</p>
            <div className="flex justify-start space-x-4">
                <label className="flex items-center space-x-1">
                    <input type="radio" name="gender" />
                    <span>Anh</span>
                </label>
                <label className="flex items-center space-x-1">
                    <input type="radio" name="gender" />
                    <span>Chị</span>
                </label>
            </div>
            <div className="flex justify-start space-x-2.5">
                <input
                    type="text"
                    placeholder="Họ và tên"
                    className="border-2 border-gray-custom hover:border-orange-300 focus:border-orange-300 p-2 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Số điện thoại"
                    className="border-2 border-gray-custom hover:border-orange-300 focus:border-orange-300 p-2 rounded-md"
                />
            </div>
            <p className='uppercase'>Chọn cách thức nhận hàng</p>
            <div className="flex justify-start space-x-4">
                <label className="flex items-center space-x-1">
                    <input type="radio" />
                    <span>Giao tận nơi</span>
                </label>
                <label className="flex items-center space-x-1">
                    <input type="radio" />
                    <span> Nhận tại siêu thị</span>
                </label>
            </div>
            <div>Địa chỉ giao hàng: {place} </div>
            <input
                type="text"
                placeholder="Yêu cầu khác (không bắt buộc)"
                className="border-2 rounded-md w-full p-2 border-gray-custom hover:border-orange-300 focus:border-orange-300"
            />
            <div className="space-y-3.5">
                <label className="flex items-center space-x-1">
                    <input type="checkbox"/>
                    <span> Gọi người khác nhận hàng (nếu có)</span>
                </label>
                <label className="flex items-center space-x-1">
                    <input type="checkbox" />
                    <span> Chuyển danh bạ, dữ liệu qua máy mới</span>
                </label>
                <label className="flex items-center space-x-1">
                    <input type="checkbox" />
                    <span> Xuất hóa đơn công ty</span>
                </label>
            </div>
        </div>
    );
};

export default FormCart;
