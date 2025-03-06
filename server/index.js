import express from "express";
import cors from 'cors'

import { Connection } from "./database/db.js";
import route from "./routes/route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', route);

const PORT = '8000'

Connection();

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})