import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    conversationId: {
        type: String
    },
    senderId: {
        type: String
    },
    recieverId: {
        type: String
    },
    type: {
        type: String
    },
    text: {
        type: String
    }
},
    {
        timestamps: true
    }
);

const message = mongoose.model('Message', MessageSchema);

export default message;