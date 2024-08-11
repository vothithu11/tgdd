import { bannerContent, images } from '@/datas/data';
import BannerContent from './BannerContent';
import BannerSlider from '@/components/BannerSlider';

function Banner() {
    return (
        <div className="">
            <div className="relative flex-1 flex justify-center items-center">
                <img src="/image/banner-big.png" alt="banner" className="object-contain relative" />
                <div className="absolute -bottom-[25%] padding">
                    <BannerSlider images={images} />
                </div>
            </div>
            <div className="w-full center mt-28 gap-x-4 max-lg:grid max-lg:grid-cols-2 max-lg:mt-10 padding">
                {bannerContent.map((value) => (
                    <BannerContent image={value.image} title={value.title} key={value.title} />
                ))}
            </div>
            <div className="w-full padding">
                <img src="/image/banner-footer.png" alt="banner" className="w-full my-10 max-lg:my-6" />
            </div>
        </div>
    );
}

export default Banner;
