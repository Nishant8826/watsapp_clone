import multer from 'multer';

const storage = multer.memoryStorage(); // Store file in memory as a Buffer

export default multer({storage});