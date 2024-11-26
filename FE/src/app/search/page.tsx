import { fetchProducts } from '@/api';
import ProductCard from '@/components/product-card';
import { IProduct } from '@/components/type';

const Search = async ({ searchParams }:{searchParams:{ [key: string]: string | undefined }}) => {
    const dataSearch = await fetchProducts({ searchParams });
    return (
        <div className="bg-[#f2f4f7] pb-5">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="py-2.5 font-bold">Kết quả tìm kiếm: ({dataSearch.length})</h1>
                <div className="bg-[#ffff] p-5 rounded-lg">
                    {dataSearch.length > 0 ? (
                        <div className="grid grid-cols-5 justify-items-center mt-2 max-lg:grid-cols-2 max-xl:grid-cols-3 gap-4">
                            {dataSearch.map((product:IProduct) => (
                                <ProductCard product={product} key={product._id} />
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
