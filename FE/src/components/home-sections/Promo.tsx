import { optionPromo } from './data-mock'
import ImageHighLightsLayout from '@/components/layout/ImageHighLightsLayout';

function Promo() {
    return (
        <div>
            {optionPromo.map((value) => (
                <ImageHighLightsLayout title={value.title} extraClassChildren={'grid-cols-3'} key={value.id}>
                    {value.images.map((val) => (
                        <div key={val.name}>
         <img src={val.subImage.src} alt="img" className=" rounded-xl"/>
                        </div>
                    ))}
                </ImageHighLightsLayout>
            ))}
        </div>
    );
}

export default Promo;
