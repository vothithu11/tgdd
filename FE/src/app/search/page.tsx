export const dynamic = 'force-dynamic';
import { fetchProducts } from '@/api';
import ProductCard from '@/components/product-card';
import { IProduct } from '@/components/type';
export const metadata = {
    title: 'Kết quả tìm kiếm | Thegioididong.com',
    description: 'Kết quả tìm kiếm | Thegioididong.com',
   
};

const Search = async ({ searchParams }:{searchParams:{ [key: string]: string}}) => {
    const dataSearch = await fetchProducts({ searchParams });
    return (
        <div className="bg-[#f2f4f7] pb-5">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="py-2.5 font-bold max-lg:ml-2.5">Kết quả tìm kiếm: ({dataSearch.length})</h1>
                <div className="bg-[#ffff] p-5 rounded-lg w-full">
                    {dataSearch.length > 0 ? (
                        <div className="w-full flex gap-2.5 flex-wrap mx-auto justify-start">
                            {dataSearch.map((product:IProduct) => (
                                 <div className='w-[19%] max-lg:w-[31%] max-md:w-[46%]' key={product._id} >
                                    <ProductCard product={product}/>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
