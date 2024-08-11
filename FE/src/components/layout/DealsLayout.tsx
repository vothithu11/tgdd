import Image from 'next/image';
import Promo from '@/sections/Promo';
import Button from '../button/Button';
import BannerSliderComponent from '../BannerSliderComponent';

import Link from 'next/link';

function DealsLayout({ dealsList, image, btn, background, bgImage, moreInfo, numVisible, title, url }) {
    return (
        <div className={`my-14 ${background} w-full rounded-xl max-lg:mt-8`}>
            <Image width={1354} height={500} src={image} alt="hinh-anh-highlights" />

            {/* <div className="p-5">
               
                <div className="grid grid-cols-5 max-lg:grid-cols-2">
                    {dealsList.map((deal) => (
                        <ProductCard product={deal} key={deal.id}  />
                    ))}
                </div>
                {btn && <Button />}
            </div> */}
            <BannerSliderComponent
                dataPromo={dealsList}
                numVisible={numVisible}
                bgImage={bgImage}
                moreInfo={moreInfo}
            />
            {btn && (
                <div className="flex justify-center">
                    <Link href={url}>
                        <button className="bg-white p-2 rounded-lg h-12 w-80 mb-4">
                            {title} {'>'}
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default DealsLayout;
