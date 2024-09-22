
const ButtonCustom = ({ color, title, handleBuyNow }) => {
    return (
        <button
            type="button"
            className={`py-4 px-2 border-2 rounded-md text-sm max-lg:text-xs cursor-pointer ${color}`}
            onClick={handleBuyNow ? handleBuyNow : null}
        >
            {title}
        </button>
    );
};

export default ButtonCustom;
