import { useState } from 'react';
import Button from '../button/Button';
import ProductCounter from '../counter/ProductCounter';
import Modal from '../UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import ButtonCustom from '../button/ButtonCustom';
import { increase } from '../counter/counterSlice';
import FormatPrice from '../FormatPrice';

const CartItem = ({ detailData, handleClose }) => {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const handleBuyNow= ()=>{
      dispatch(increase({ ...detailData, quantity: qty } ));
      handleClose()
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-white w-[408px] h-[416px] p-4 space-y-4 rounded-md">
                    <div className='center'>
                    <span>{detailData.title}</span>
                    <button onClick={handleClose}>X</button>
                    </div>
                    <div className='flex justify-start gap-4'>
                    <div className='text-red-500'><FormatPrice price={detailData.salePrice}/> <span>đ</span></div>
                    <div className='text-gray-500 line-through'><FormatPrice price={detailData.originalPrice}/> <span>đ</span></div>
                    </div>
                    <div className='border-b-2 border-b-gray-300 pb-4'>
                        <span className='pr-2 font-bold'>Chọn số lượng:</span>
                        <span className="border-[1px] p-2 border-[#d7d8da]">
                            <FontAwesomeIcon
                                icon={faMinus}
                                style={{ color: '#395484' }}
                                aria-label="Decrement value"
                                onClick={() => setQty((pre) => Math.max(pre - 1, 1))}
                            />
                        </span>
                        <span className='border-[1px] p-2 border-[#d7d8da]'>{qty}</span>
                        <span className="border-[1px] p-2 border-[#d7d8da]">
                            <FontAwesomeIcon
                                icon={faPlus}
                                style={{ color: '#395484' }}
                                aria-label="Increment value"
                                onClick={() => setQty((pre) => pre + 1)}
                            />
                        </span>
                       
                    </div>
                    <p className='text-blue-custom'>Xem tất cả khuyến mãi</p>
                    <div className='space-y-2'>
                        <p>Chọn 1 trong 2 khuyến mãi: </p>
                        <div>
                        <input type='radio'/>
                        <span className='ml-2'>Nhận voucher 500.000 đ</span>
                        </div>
                        <div>
                        <input type='radio'/>
                        <span className='ml-2'>Tặng bảo hành bảo hiểm mở rộng miễn phí 6 tháng</span>
                        </div>
                    </div>
                    <ButtonCustom
                            color={'bg-[#FB6E2E] border-[#FB6E2E] w-full text-white text-lg font-semibold h-12'}
                            title='THÊM VÀO GIỎ HÀNG'
                            handleBuyNow={handleBuyNow}
                        />
                    <p className='text-blue-custom flex justify-center cursor-pointer'>Xem giỏ hàng</p>
                </div>
            </div>
        </>
    );
};

export default CartItem;
