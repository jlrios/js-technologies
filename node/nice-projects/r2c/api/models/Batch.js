import mongoose from 'mongoose'

const { Schema } = mongoose

const batchSchema = new Schema({
    batchId: {
        type: String,
        required: true
    }, 
    date: { 
        type: Date, 
        required: true
    },
    batchReference: {
        type: String,
        required: true
    }, 
    quantityDevices: {
        type: Number,
        required: true,
        default: 0
    },
    notes: String,
})

const Batch = mongoose.model('Batch', batchSchema)

export default Batch