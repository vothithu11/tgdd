'use client';
import { faAngleRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import AddressModal from '../AddressModal';
import { RootState } from '../type';

function Address() {
    const {place} = useSelector((state: RootState)=>state.placeName)
    return (
        <AddressModal>
        <div
            className="w-[300px] h-full flex gap-0.5 items-center justify-between bg-[#fe9] rounded-[32px] px-3 cursor-pointer text-[#333]"
        >
            <div className="flex items-center gap-[5px]">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-6" />
                <span className="leading-[18.2px]">{place ? place : 'Chọn địa chỉ giao hàng'}</span>
            </div>
            <FontAwesomeIcon icon={faAngleRight} className="w-6 h-6 ml-3 font-thin" />
        </div>
        
    </AddressModal>
    );
}

export default Address;
