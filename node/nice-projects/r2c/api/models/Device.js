import mongoose from 'mongoose'

const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId

const deviceSchema = new Schema({
    batchId: ObjectId,
    warehouse: {
        type: String,
        required: true
    },
    deviceType: {
        type: String,
        required: true
    },
    maker: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    notes: String
}, { timestamps: true })

const Device = mongoose.model('Device', deviceSchema)

export default Device