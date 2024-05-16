import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    manager: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false, // 비밀번호 조회되지 않게 하기
    },
    status: {
        type: String,
        enum: ['FOR_SALE', 'SOLD_OUT'],
        default: 'FOR_SALE',
    }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);