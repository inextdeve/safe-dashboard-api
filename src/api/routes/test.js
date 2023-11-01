import express from "express";
import { getInfo } from "../controllers/test.js";
// import cache from "../middlewares/cache.js";

const router = express.Router();

// if you want to use cache
// router.use(cache(30, "json"));

router.get("/", getInfo);

export default router;
