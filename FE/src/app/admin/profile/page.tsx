// Test
// import NavAdmin from '@/components/auth/NavAdmin';
// import BannerSliderComponent from '@/components/BannerSliderComponent';
// import ProductCard from '@/components/productCard/ProductCard';


// const P = async () => {
//     const res = await fetch(`${process.env.NEXT_DOMAIN_URL}/posts`, { cache: 'no-store' });

//     const data = await res.json();
//     const dataPromo = data.docs;

//     return (
//         <div>
//             <NavAdmin />
//             {/* {datanew.map((item) => (
//                 <ProductCard product={item} moreInfo={false} />
//             ))} */}
//             <BannerSliderComponent dataPromo={dataPromo} numVisible={10} />
//         </div>
//     );
// };

// export default P;
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

const LocationSelector = () => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('0');
    const [selectedDistrict, setSelectedDistrict] = useState('0');
    const [selectedWard, setSelectedWard] = useState('0');
    const [view, setView] = useState('province'); // State to control the view (province, district, or ward)

    useEffect(() => {
        // Fetch provinces
        axios
            .get('https://esgoo.net/api-tinhthanh/1/0.htm')
            .then((response) => {
                if (response.data.error === 0) {
                    setProvinces(response.data.data);
                }
            })
            .catch((error) => console.error('Error fetching provinces:', error));
    }, []);

    useEffect(() => {
        if (selectedProvince !== '0') {
            // Fetch districts
            axios
                .get(`https://esgoo.net/api-tinhthanh/2/${selectedProvince}.htm`)
                .then((response) => {
                    if (response.data.error === 0) {
                        setDistricts(response.data.data);
                        setWards([]); // Clear wards when province changes
                        setSelectedDistrict('0'); // Reset selected district
                        setSelectedWard('0'); // Reset selected ward
                        setView('district'); // Show districts select
                    }
                })
                .catch((error) => console.error('Error fetching districts:', error));
        } else {
            setDistricts([]);
            setWards([]); // Clear wards when province is reset
            setSelectedDistrict('0'); // Reset selected district
            setSelectedWard('0'); // Reset selected ward
        }
    }, [selectedProvince]);

    useEffect(() => {
        if (selectedDistrict !== '0') {
            // Fetch wards
            axios
                .get(`https://esgoo.net/api-tinhthanh/3/${selectedDistrict}.htm`)
                .then((response) => {
                    if (response.data.error === 0) {
                        setWards(response.data.data);
                        setSelectedWard('0'); // Reset selected ward
                        setView('ward'); // Show wards select
                    }
                })
                .catch((error) => console.error('Error fetching wards:', error));
        } else {
            setWards([]); // Clear wards when district is reset
            setSelectedWard('0'); // Reset selected ward
        }
    }, [selectedDistrict]);

    const handleBack = () => {
        if (view === 'district') {
            setSelectedDistrict('0');
            setWards([]); // Clear wards when going back to province
            setView('province'); // Show provinces select
        } else if (view === 'ward') {
            setSelectedWard('0');
            setView('district'); // Show districts select
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            {view === 'province' && (
                <select
                    style={{
                        display: 'inline-table',
                        width: '25%',
                        padding: '5px',
                        margin: '5px 2%',
                        border: 'solid 1px #686868',
                        borderRadius: '5px',
                    }}
                    value={selectedProvince}
                    onChange={(e) => setSelectedProvince(e.target.value)}
                >
                    <option value="0">Tỉnh Thành</option>
                    {provinces.map((province) => (
                        <option key={province.id} value={province.id}>
                            {province.full_name}
                        </option>
                    ))}
                </select>
            )}
            {view === 'district' && (
                <>
                    <select
                        style={{
                            display: 'inline-table',
                            width: '25%',
                            padding: '5px',
                            margin: '5px 2%',
                            border: 'solid 1px #686868',
                            borderRadius: '5px',
                        }}
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                    >
                        <option value="0">Quận Huyện</option>
                        {districts.map((district) => (
                            <option key={district.id} value={district.id}>
                                {district.full_name}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={handleBack}
                        style={{
                            display: 'inline-table',
                            padding: '5px 10px',
                            margin: '5px 2%',
                            border: 'solid 1px #686868',
                            borderRadius: '5px',
                            backgroundColor: '#f0f0f0',
                        }}
                    >
                        Quay lại tỉnh
                    </button>
                </>
            )}
            {view === 'ward' && (
                <>
                    <select
                        style={{
                            display: 'inline-table',
                            width: '25%',
                            padding: '5px',
                            margin: '5px 2%',
                            border: 'solid 1px #686868',
                            borderRadius: '5px',
                        }}
                        value={selectedWard}
                        onChange={(e) => setSelectedWard(e.target.value)}
                    >
                        <option value="0">Phường Xã</option>
                        {wards.map((ward) => (
                            <option key={ward.id} value={ward.id}>
                                {ward.full_name}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={handleBack}
                        style={{
                            display: 'inline-table',
                            padding: '5px 10px',
                            margin: '5px 2%',
                            border: 'solid 1px #686868',
                            borderRadius: '5px',
                            backgroundColor: '#f0f0f0',
                        }}
                    >
                        Quay lại quận
                    </button>
                </>
            )}
        </div>
    );
};

export default LocationSelector;
