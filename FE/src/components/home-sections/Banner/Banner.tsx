import { bannerContent, images } from '../data-mock'
import BannerContent from './BannerContent';
import BannerSlider from '@/components/BannerSlider';
import banner_footer from '../assets/banner-footer.png'
import banner_big from '../assets/banner-big.png'

function Banner() {
    return (
        <div className="">
            <div className="relative flex-1 flex justify-center items-center">
                <img src={banner_big.src} alt="banner" className="object-contain" />
                {/* <div className="absolute -bottom-[25%] padding"> */}
                <div className='w-[96%] absolute -bottom-[30%]'>
                    <BannerSlider images={images} visibleNumber={2}/>
                </div>
            </div>
            <div className="mt-28 gap-3 grid grid-cols-4 max-xl:grid max-lg:grid-cols-2 max-lg:mt-10">
                {bannerContent.map((value) => (
                    <BannerContent image={value.image} title={value.title} key={value.title} />
                ))}
            </div>
            <div className="w-full">
                <img src={banner_footer.src} alt="banner" className="w-full my-10 max-lg:my-6 rounded-md" />
            </div>
        </div>
    );
}

export default Banner;
