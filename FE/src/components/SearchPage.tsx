'use client';
import ProductCard from './productCard/ProductCard';
import ProductDetailLayout from './layout/ProductDetailLayout';

const SearchPage = ({ data }) => {
    return (
        <ProductDetailLayout>
            <h1 className="font-semibold text-xl text-center p-2 border-b-2">Kết quả tìm kiếm: ({data.length})</h1>
            {data.length > 0 ? (
                <div className="grid grid-cols-5 justify-items-center bg-slate-50 mt-2 max-lg:grid-cols-2">
                    {data.map((product) => (
                        <ProductCard
                            product={product}
                            bgImage={'bg-slate-50 shadow-md'}
                            key={product._id}
                            moreInfo={true}
                        />
                    ))}
                </div>
            ) : (
                <p>No results found</p>
            )}
        </ProductDetailLayout>
    );
};

export default SearchPage;
