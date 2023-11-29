import express from "express";
import dotenv from "dotenv";
import connectDB from "./Connection/Connection.js";


const app = express();

dotenv.config({ path: ".env" });

const port = process.env.PORT || 3000;
connectDB();

app.get('/', (req, res) => {
    res.send('hello there');
})

app.listen(port, () => {
    console.log("server is running on port", port);
})

