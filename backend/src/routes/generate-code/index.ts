import { Router } from "express";
import { generateCode } from "../../controller/generate-code";

const router = Router();

router.route("/create").get(generateCode);

export default router;