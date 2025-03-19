import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    data: Buffer, // Store file data as Buffer
});

const File = mongoose.model('File', fileSchema);

export default File;