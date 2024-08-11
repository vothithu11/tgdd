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
                className={`border-2 cursor-pointer flex justify-center ${
                    bigLapImg === imgURL.bigProduct ? 'border-red-500' : 'border-gray-200'
                }`}
                onClick={handleClick}
            >
                {' '}
                <img src={imgURL.thumbnail} className="py-1 object-contain" width={50} height={50} />
            </div>
            <div className="">{imgURL.title}</div>
        </div>
    );
};

export default ProductThumb;
