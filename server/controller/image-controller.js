
import File from '../model/File.js'

const url = 'http://localhost:8000'

export const uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(404).send({ status: false, msg: 'File not Found' });
        };
        const fileName = `${Date.now()}-${req.file.originalname}`
        const newFile = new File({
            filename: fileName,
            contentType: req.file.mimetype,
            data: req.file.buffer, // Store file as Buffer
        });
        await newFile.save();
        const newUrl = `${url}/file/${fileName}`
        return res.status(201).json({ status: true, msg: 'File uploaded successfully', fileUrl: newUrl });
    } catch (error) {
        return res.status(500).send({ status: false, error: error.message });
    }
}

export const getFile = async (req, res) => {
    try {
        const file = await File.findOne({filename:req.params.id});
        if (!file) return res.status(404).json({ error: 'File not found' });

        res.set('Content-Type', file.contentType);
        return res.send(file.data);
    } catch (error) {
        return res.status(500).json({ error: 'Error retrieving file' });
    }
}