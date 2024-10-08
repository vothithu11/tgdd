import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    ram: Number,
    battery: Number,
    camera: Number,
    charger: Number,
    desc: String,
    main_image: String,
    image: [
        {
            thumbnail: String,
            bigProduct: String,
            title: String,
        }
    ],
    isPromotion: Boolean,
    originalPrice: Number,
    promotionPercent: Number,
    rate: Number,
    salePrice: Number,
    screen: String,
    storage: Number,
    title: String,
    brand: String,
    category: String,
    type: String,
    demand: String,
});



const PostProduct = mongoose.model('PostProduct', postSchema);
export default PostProduct;

