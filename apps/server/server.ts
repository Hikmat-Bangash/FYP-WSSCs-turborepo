import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import dbconnect from "./db/dbconnect";
import AuthRouter from "./Routes/auth.route";
import complaint from "./Routes/Complaint.route";
import Citizen from "./Routes/citizen.route";
import mongoose, { ConnectOptions } from "mongoose";
import testingRouter from "./dummyRoute";

dotenv.config();

const app: Express = express();

const PORT = Number(process.env.PORT);
const Mongo_uri: any = process.env.DB_URL;

// ----- connecting to database -----
mongoose.set("strictQuery", true);
// dbconnect(Mongo_uri)
mongoose
  .connect(Mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  } as ConnectOptions)
  .then(() => {
    console.log("Database Connected Successfuly.");
  })
  .catch((err) => {
    console.log(err);
  });

//-------- MIDDLEWARES ---------
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(helmet());
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---- Default/home page route
app.get("/", (req: Request, res: Response) => {
  res.send("WELCOME TO THE 'COMMUNITY CLEANUP' PROJECT SERVER SIDE PAGE 👋");
});

// ------ Custom middlewares ---------
app.use('/testing', testingRouter);
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/citizens", Citizen);
app.use("/api/v1/complaints", complaint);

// ----- Errors handler ------
app.all("*", (req: Request, res: Response) => {
  res.status(500).json({
    status: 500,
    success: false,
    message: `Can not find ${req.originalUrl} on this server`,
  });
});

// -------- app listening port number ---------
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
