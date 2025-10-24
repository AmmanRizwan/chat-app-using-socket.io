import express, { Request, Response } from "express";
import cors from "cors";
import env from "./config/env";
import http from "http";
import { SocketServer } from "./socket";
import router from "./routes";

const port = env.PORT;

const app = express();

app.use(cors({
  origin: env.ORIGIN.split(","),
  methods: env.METHOD.split(","),
  credentials: true, 
  allowedHeaders: "Content-Types"
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is ready"});
})

export const server = http.createServer(app);

SocketServer();

server.listen(port, () => {
  console.log(`Server is running at ${port} on ${env.ENV} mode`);
})