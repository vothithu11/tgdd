'use client';
import { faAngleRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import AddressModal from '../AddressModal';
import { RootState } from '../constants/type';

function Address({className}:{className?:string}) {
    const {place} = useSelector((state: RootState)=>state.placeName)
    return (
        <AddressModal className=''>
        <div
            className={`w-[300px] h-[42px] max-sm:w-[200px] max-lg:flex-1 flex gap-0.5 items-center justify-between bg-[#ffe14c] hover:bg-[#fe9] rounded-[32px] px-[5px] pl-[11px] pr-2 cursor-pointer text-[#333]${className}`}
        >
            <div className="flex items-center gap-[5px]">
                <FontAwesomeIcon icon={faLocationDot} className="w-[17px] h-[23px]" />
                <span className="leading-[18.2px] line-clamp-1">{place ? place : 'Chọn địa chỉ giao hàng'}</span>
            </div>
            <FontAwesomeIcon icon={faAngleRight} className="w-2 h-2 font-thin" />
        </div>
        
    </AddressModal>
    );
}

export default Address;
