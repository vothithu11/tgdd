import { optionPromo } from './data-mock'
import ImageHighLightsLayout from '@/components/layout/ImageHighLightsLayout';

function Promo() {
    return (
        <div>
            {optionPromo.map((value) => (
                <ImageHighLightsLayout title={value.title} extraClassChildren={'grid-cols-3'}>
                    {value.images.map((val) => (
                        <img src={val.subImage.src} alt="img" className=" rounded-xl" />
                    ))}
                </ImageHighLightsLayout>
            ))}
        </div>
    );
}

export default Promo;
