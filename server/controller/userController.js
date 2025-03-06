import user from '../model/User.js'

export const addUser = async (req, res) => {
    try {
        let exist = await user.findOne({ sub: req.body.sub });
        if (exist) {
            return res.status(200).send({ status: true, msg: 'User already exist', data: exist });
        };
        const newUser = new user(req.body);
        await newUser.save();
        return res.status(201).send({ status: true, msg: 'Success', data: newUser });
    } catch (error) {
        return res.satus(500).send({ status: false, error: error.message });
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await user.find({});
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send({ status: false, error: error.message });
    }
}