import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.5qww5.mongodb.net/`;


export const Connection = async () => {
    try {
        await mongoose.connect(uri);
        console.log('DB Connected successfully');
    } catch (error) {
        console.log(`Error occured while connecting with DB : `, error.message);
    }
}
