
import BannerSlider from '@/components/BannerSlider';
import ProductCard from '@/components/product-card';
import { faAngleDown, faAngleRight, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { IProduct } from './type';
import IconReview from './IconReview';
import Link from 'next/link';
interface IProductsLayoutProps {
    quantity:number,
    title:string,
    products: IProduct[],
    children: React.ReactNode,
}

function ProductsLayout({quantity,title,products,children}:IProductsLayoutProps) {
  return (
    <main className="bg-[#f2f4f7] pb-3">
    <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2 pt-2.5">
            <Link href='/'>
            <span className="text-[#98a2b3]">Trang chủ</span>
            </Link>
            <FontAwesomeIcon icon={faAngleRight} className="w-3 h-3 font-thin text-[#98a2b3]" />
            <span>{quantity} {title}</span>
        </div>
        <div className="mt-4">
        <BannerSlider images={['/banner1.png','/banner2.png','/banner3.png','/banner4.png']} visibleNumber={2}/>
        </div>
        {/* content */}
        <div className="bg-white p-5 mt-4 rounded-lg ">
           {children}
            {/* list */}
            <div className="w-full flex gap-2.5 flex-wrap">
                {products?.length>0 ? products.map((product) => (
                    <ProductCard product={product} key={product._id} />
                )):<div className='mx-auto'><Image src='/nodata.png' alt='image' quality={100} width={400} height={400} className='object-contain'/></div>}
            </div>
            {/* <div className="w-[340px] mx-auto mt-4">
                <button className="space-x-1 text-blue-custom border-[#2a83e9] leading-10 border rounded-lg text-center w-full font-bold">
                    Xem thêm 100 điện thoại{' '}
                    <FontAwesomeIcon icon={faAngleDown} className="w-3 h-3 opacity-80" />
                </button>
            </div> */}
            <div className="w-[480px] h-30 mx-auto mt-11 p-3 border border-[#ffd400] shadow-lg rounded-md flex gap-4 items-center">
                <IconReview/>
            </div>
        </div>
    </div>
</main>
  )
}

export default ProductsLayout