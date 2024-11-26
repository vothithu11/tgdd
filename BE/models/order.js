import mongoose from 'mongoose';
const orderSchema = mongoose.Schema({
    name:String,
    products: [{title:String, quantity:Number, salePrice:Number}],
    date: { type: Date, default: Date.now },
    address: String,
    phoneNumber:String,
    totalPrice:Number,
})
const Order = mongoose.model('Order', orderSchema);
export default Order;
