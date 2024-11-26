import mongoose from 'mongoose';
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String,
    isAdmin: {
        type: Boolean,
        default:false
    }
});

const User = mongoose.model('users', userSchema);
export default User;