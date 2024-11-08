import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
    {
        timestamps: {
            createdAt: "created_At",
            updatedAt: "updated_At"
        }
    })

const contactModel = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default contactModel