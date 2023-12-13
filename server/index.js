import express from "express";
import dotenv from "dotenv";
import connectDB from "./Connection/Connection.js";
import signIn from "./Routes/signIn.js";
import signUp from "./Routes/signUp.js";
import signOut from "./Routes/signOut.js";
import place from "./Routes/place.js";
import city from "./Routes/place.js";
import cors from 'cors';



const app = express();
app.use(cors());


app.use(express.json({ limit: "50mb" }));

dotenv.config({ path: ".env" });

const port = process.env.PORT || 3000;
connectDB();

app.use(signIn);
app.use(signUp);
app.use(signOut);
app.use(place);
app.use(city);


app.get('/', (req, res) => {
    res.send('hello there');
})

app.listen(port, () => {
    console.log("server is running on port", port);
})

