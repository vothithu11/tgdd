'use client';
const ProductThumb = ({ imgURL, changeBigLap, bigLapImg }) => {
    const handleClick = () => {
        if (bigLapImg !== imgURL.bigProduct) {
            changeBigLap(imgURL.bigProduct);
        }
    };
    return (
        <div className="text-center space-y-2">
            <div
                className={`border cursor-pointer flex justify-center ${
                    bigLapImg === imgURL.bigProduct ? 'border-red-500' : 'border-gray-200'
                }`}
                onClick={handleClick}
            >
                {' '}
                <img src={imgURL.thumbnail} className="py-1 object-contain max-xl:w-[35px] max-xl:h-[35px]" width={50} height={50} />
            </div>
            <div className="max-xl:text-sm">{imgURL.title}</div>
        </div>
    );
};

export default ProductThumb;
