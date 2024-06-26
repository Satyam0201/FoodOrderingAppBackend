import express, {Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import MyUserRoute from "./Routes/MyUserRoute"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("connected to database!"));


const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response)=>{
    res.send({ message: "health is ok"});

});

app.use("/api/my/user", MyUserRoute)

app.listen(7000, () => {
console.log("server started on localhost:7000");
});

