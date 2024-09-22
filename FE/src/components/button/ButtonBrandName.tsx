
// import { useState, useEffect } from 'react';

// const ButtonBrandName = ({ filter, onSelect, resetFilters }) => {
//     const [isActive, setIsActive] = useState(false);

//     useEffect(() => {
//         setIsActive(false);
//     }, [resetFilters]);

//     const handleClickBtn = () => {
//         setIsActive(!isActive);
//         onSelect({ brand: filter.value });
//     };

//     return (
//         <div
//             className={`border-2 rounded-full mx-2 cursor-pointer ${
//                 isActive ? 'border-blue-700' : 'hover:border-blue-500'
//             }`}
//             onClick={handleClickBtn}
//         >
//             <img src={filter.image.src} alt={filter.name} className="rounded-full" />
//         </div>
//     );
// };

// export default ButtonBrandName;
