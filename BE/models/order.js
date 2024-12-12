import mongoose from 'mongoose';
const orderSchema = mongoose.Schema({
    name:String,
    products: [{id:String, quantity:Number}],
    date: { type: Date, default: Date.now },
    address: String,
    phoneNumber:String,
})
const Order = mongoose.model('Order', orderSchema);
export default Order;
