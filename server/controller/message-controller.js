import Conversation from '../model/Conversation.js';
import Message from '../model/Message.js'


export const newMessage = async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text })
        return res.status(200).send({ status: true, msg: 'Message has been sent successfully' });
    } catch (error) {
        return res.status(500).send({ status: false, error: error.message });
    }
}

export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.id })
        return res.status(200).send({ status: true, data: messages });
    } catch (error) {
        return res.status(500).send({ status: false, error: error.message });
    }
}