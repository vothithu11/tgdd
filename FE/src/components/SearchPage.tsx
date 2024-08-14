'use client';
import ProductCard from './product-card';
const SearchPage = ({ data }) => {
    return (
        <div className='padding'>
            <h1 className="font-semibold text-xl text-center p-2 border-b-2">Kết quả tìm kiếm: ({data.length})</h1>
            {data.length > 0 ? (
                <div className="grid grid-cols-5 justify-items-center mt-2 max-lg:grid-cols-2">
                    {data.map((product) => (
                        <ProductCard
                            product={product}
                            extraClassContainer={'bg-slate-200 shadow-md'}
                            key={product._id}
                            moreInfoBtn={true}
                        />
                    ))}
                </div>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default SearchPage;
