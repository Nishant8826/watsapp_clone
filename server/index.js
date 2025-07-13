const express = require("express");
const cors = require('cors')

require('dotenv').config();
const route = require("./routes/route.js");
const Connection = require("./database/db.js");
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', route);

const PORT = process.env.PORT || '8000'

Connection();

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})