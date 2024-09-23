'use client';
import { useEffect, useState } from 'react';
import Button from '../button/Button';
import SelectAddressForm from './SelectAddressForm';
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';
import { submitPlace} from '../../components/counter/placeSlice';

function AddressForm({ onClose }) {
    const [indexPlace, setIndexPlace] = useState<number[]>([]);
    const [selectedPlace, setSelectedPlace] = useState([]);
    const [selectedPlaceNames, setSelectedPlaceNames] = useState<string>('');
    const dispatch =useDispatch();
   
    const handleSelectedPlace = (id: number, name: string) => {
        setIndexPlace((prev) => [...prev, id]);
        setSelectedPlaceNames((prev) => `${prev}${prev ? ', ' : ''}${name}`);
    };
    useEffect(() => {
        if (indexPlace.length === 3) {
            onClose();
            dispatch(submitPlace(selectedPlaceNames));
        }
    }, [indexPlace]);
    useEffect(() => {
        async function fetchData() {
            try {
                let url = '';
                if (indexPlace.length === 0) {
                    url = 'https://esgoo.net/api-tinhthanh/1/0.htm';
                } else if (indexPlace.length === 1) {
                    url = `https://esgoo.net/api-tinhthanh/2/${indexPlace[0]}.htm`;
                } else if (indexPlace.length === 2) {
                    url = `https://esgoo.net/api-tinhthanh/3/${indexPlace[1]}.htm`;
                }

                if (url) {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const data = await response.json();
                    setSelectedPlace(data.data);
                }
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        }

        fetchData();
    }, [indexPlace]);
    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    // };
    const handleBack = () => {
        setIndexPlace((prev) => prev.slice(0, -1));
    };

    return (
        <div className="fixed z-10 inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
            {/* <div className="fixed z-200 w-100vw h-100vh flex justify-center items-center bg-slate-400 opacity-95  top-0 left-0 bottom-0 right-0"> */}
            <div className="w-[480px] h-[488px] bg-white opacity-100">
                <div className="h-16 bg-blue-600 px-2 center">
                    <button className="cursor-pointer" onClick={handleBack}>
                        {'<'}
                    </button>
                    <h2 className="truncate max-w-[370px] ">Địa chỉ đã chọn: {selectedPlaceNames}</h2>
                    <Button title={'x Đóng'} onClick={onClose}/>
                </div>
                <div className="bg-blue-600 h-12 center-x w-full">
                    <SearchBar text={'Tìm nhanh tỉnh thành, quận huyện'} extraClassInput="w-[460px] mb-2" />
                </div>
                <div className="flex justify-center flex-col">
                    <p className="text-center center-x  font-semibold h-8">Chọn Tỉnh Quận Huyện Việt Nam</p>

                    <SelectAddressForm
                        selectedPlace={selectedPlace}
                        onSelect={handleSelectedPlace}
                        selectedPlaceNames={selectedPlaceNames}
                    />

                    {/* <div className="flex justify-center">
                        <Button title={'Xác nhận'} wi={'w-20'} he={'h-8'} />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default AddressForm;
