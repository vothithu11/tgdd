import { cateFuture } from '../data-mock'
import BoxCate from './BoxCate';
import ImageHighLightsLayout from '@/components/layout/ImageHighLightsLayout';

function CateFuture() {
    return (
        <ImageHighLightsLayout
            title="DANH MỤC NỔI BẬT"
            extraClassChildren="grid-cols-10"
            extraClassContainer="bg-white rounded-xl p-6 space-y-4"
        >
            {cateFuture.map((value) => (
                <BoxCate key={value.title} value={value} />
            ))}
        </ImageHighLightsLayout>
    );
}

export default CateFuture;
