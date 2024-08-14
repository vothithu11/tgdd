import { bannerContent, images } from '../data-mock'
import BannerContent from './BannerContent';
import BannerSlider from '@/components/BannerSlider';
import banner_footer from '../assets/banner-footer.png'
import banner_big from '../assets/banner-big.png'

function Banner() {
    return (
        <div className="">
            <div className="relative flex-1 flex justify-center items-center">
                <img src={banner_big.src} alt="banner" className="object-contain relative" />
                {/* <div className="absolute -bottom-[25%] padding"> */}
                <div className='container padding absolute -bottom-[25%]'>
                    <BannerSlider images={images} visibleNumber={2}/>
                </div>
            </div>
            <div className="w-full center mt-28 gap-x-4 max-lg:grid max-lg:grid-cols-2 max-lg:mt-10 padding">
                {bannerContent.map((value) => (
                    <BannerContent image={value.image} title={value.title} key={value.title} />
                ))}
            </div>
            <div className="w-full padding">
                <img src={banner_footer.src} alt="banner" className="w-full my-10 max-lg:my-6 rounded-md" />
            </div>
        </div>
    );
}

export default Banner;
