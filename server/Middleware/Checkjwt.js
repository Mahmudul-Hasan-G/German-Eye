import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


const CheckJwt = async (req, res, next) => {

    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. Token is missing.' });
    }
    try {
        const checked = jwt.verify(token, process.env.SECRET_KEY);
        req.user = checked.user;
        console.log("token checked");
        next();
    }
    catch (err) {
        res.status(401).json({ message: "Token is not valid" });
    }


};
export default CheckJwt;

