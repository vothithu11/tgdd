'use client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitPlace } from '../slice/placeSlice';
import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface IPlace{
   id:string,
   name:string,
}
function AddressForm({ onClose }:{onClose:()=>void}) {
    const [indexPlace, setIndexPlace] = useState<number[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<IPlace[]>([]);
    const [selectedPlaceNames, setSelectedPlaceNames] = useState<string>('');
    const dispatch = useDispatch();
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
                    console.log('datadsdfjdg',data.data)
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
        setSelectedPlaceNames((pre) => pre.split(',').slice(0, -1).join(',').trim());
    };

    return (
        <div className="fixed z-10 inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
            <div className="w-[480px] h-[488px] bg-white rounded-lg">
                <div className="h-16 bg-[#288AD6] px-2 flex justify-between items-center rounded-lg">
                    <span className="cursor-pointer" onClick={handleBack}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </span>
                    <h2 className="truncate max-w-[370px] font-semibold text-base ">
                        Địa chỉ giao hàng: {selectedPlaceNames}
                    </h2>
                    <button
                        className="py-1.5 px-2 border-2 border-gray-100 rounded-md text-sm cursor-pointer bg-[#f6f7f8]"
                        onClick={onClose}
                    >
                        <FontAwesomeIcon icon={faXmark} /> Đóng
                    </button>
                </div>
                <div className="flex justify-center flex-col p-4">
                    <p className="text-center font-semibold h-8">Chọn Tỉnh Quận Huyện Việt Nam</p>

                    <div className="border-gray-700 p-2 mx-2">
                        <ul className="grid grid-cols-2 max-h-[300px] overflow-y-auto gap-2">
                            {selectedPlace.map((place) => (
                                <li key={place.id} className="">
                                    <button
                                        onClick={() => handleSelectedPlace(Number(place.id),place.name)}
                                        className="hover:bg-blue-100 border-b-2 p-2 border-b-gray-100 w-[190px] flex justify-start"
                                    >
                                        {place.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressForm;
