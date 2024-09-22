// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import ProductCard from './product-card';
// import { useInView } from 'react-intersection-observer';
// import { useEffect, useState } from 'react';
// import { getData } from '@/app/phone/page';

// const LoadMore = ({ products, onSelect }) => {
//     const { ref, inView } = useInView();
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         if (inView) {
//             getData(2).then((res) => {
//                 setData([...products, ...res]);
//             });
//         }
//     }, [inView, data]);
//     return (
//         <div>
//             <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2">
//                 {products.map((item) => (
//                     <div className="border-2 border-gray-100 hover:shadow-md" key={item._id}>
//                         <ProductCard product={item} bgImage={'bg-white'} moreInfo={true} />
//                     </div>
//                 ))}
//             </div>

//             <div className="center-x padding-y" ref={ref}>
//                 <FontAwesomeIcon icon={faSpinner} className="h-[50px]" />
//             </div>
//         </div>
//     );
// };

// export default LoadMore;
