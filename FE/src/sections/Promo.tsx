import { optionPromo } from '@/datas/data';
import ImageHighLightsLayout from '@/components/layout/ImageHighLightsLayout';

function Promo() {
    return (
        <div>
            {optionPromo.map((value) => (
                <ImageHighLightsLayout title={value.title} valueGrid={'grid-cols-3'}>
                    {value.images.map((val) => (
                        <img src={val.subImage} alt="img" className=" rounded-xl" />
                    ))}
                </ImageHighLightsLayout>
            ))}
        </div>
    );
}

export default Promo;
