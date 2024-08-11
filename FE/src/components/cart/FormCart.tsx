import React from 'react';

const FormCart = () => {
    return (
        <div>
            <p>Thông tin khách hàng</p>
            <div className="flex justify-start space-x-2">
                <input type="radio" />
                Anh
                <input type="radio" />
                Chị
            </div>
            <div className="flex justify-start space-x-2">
                <input
                    type="text"
                    placeholder="Họ và tên"
                    className="border-2 border-gray-custom hover:border-orange-300 focus:border-orange-300 p-2"
                />
                <input type="text" placeholder="Số điện thoại" />
            </div>
            <p>Chọn cách thức nhận hàng</p>
            <div className="flex justify-start space-x-2">
                <input type="radio" />
                Giao tận nơi
                <input type="radio" />
                Nhận tại siêu thị
            </div>
            <div>api địa chỉ</div>
            <input
                type="text"
                placeholder="Yêu cầu khác (không bắt buộc)"
                className="border-2 w-full p-2 border-gray-custom hover:border-orange-300 focus:border-orange-300"
            />
            <div className="">
                <div>
                    <input type="checkbox" />
                    Gọi người khác nhận hàng (nếu có)
                </div>
                <div>
                    <input type="checkbox" />
                    Chuyển danh bạ, dữ liệu qua máy mới
                </div>
                <div>
                    <input type="checkbox" />
                    Xuất hóa đơn công ty
                </div>
            </div>
        </div>
    );
};

export default FormCart;
