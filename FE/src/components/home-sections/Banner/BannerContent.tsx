const BannerContent = ({ image, title }) => {
    return (
        <div className="flex justify-between items-center rounded-2xl shadow-md p-2 space-x-1 bg-orange-700">
            <img src={image.src} className="object-contain w-20 h-20 max-lg:w-12 max-lg:h-12" />
            <p className="text-xl font-bold center max-lg:text-base max-lg:font-normal flex-1"> {title}</p>
        </div>
    );
};

export default BannerContent;
