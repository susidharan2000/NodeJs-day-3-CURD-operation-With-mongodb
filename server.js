import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./Database/Config.js";
import empRouter from "./Routers/EmpRouter.js"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
ConnectDB();

const port = 4000 || process.env.PORT

app.use('/api',empRouter);
app.get("/",(req,res)=>{
    res.status(200).send("welcome to our app");
});

app.listen(port,()=>{
    console.log("App is running",port);
});
