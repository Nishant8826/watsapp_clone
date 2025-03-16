import Conversation  from "../model/Conversation.js";

export const newConversation = async (req, res) => {
    try {
        const { senderId, recieverId } = req.body;
        const exist = await Conversation.findOne({ members: { $all: [recieverId, senderId] } });
        if (exist) {
            return res.status(200).send({ status: true, msg: 'conversation already exist' });
        };
        const newConversation = new Conversation({
            members: [senderId, recieverId]
        })
        await newConversation.save();
        return res.status(201).send({ status: true, msg: 'conversation saved successfully' });
    } catch (error) {
        return res.status(500).send({ status: false, error: error.message });
    }
}