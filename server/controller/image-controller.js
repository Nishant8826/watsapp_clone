
export const uploadFile = async (req, res) => {
    try {
        return res.status(200).send({ status: true });
    } catch (error) {
        return res.status(500).send({ status: false, error: error.message });
    }
}