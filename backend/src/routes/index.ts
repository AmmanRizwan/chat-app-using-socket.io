import express from "express"
import generateCodeRouter from "./generate-code";

const router = express.Router();

router.use("/generate-code", generateCodeRouter);

export default router;